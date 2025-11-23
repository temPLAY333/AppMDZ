import * as React from "react";
import { useState, useEffect } from "react";
import { ScrollView, Text, StyleSheet, View, Image, Dimensions } from "react-native";
import TopBar from "../components/TopBar";
import ModeloIcon from "../components/ModeloIcon";
import Pin from "../components/Pin";
import { useRoute, useFocusEffect } from "@react-navigation/native";
import { useUniversalNavigation, SCREENS } from "../navigation";
import { RouteProp } from "@react-navigation/native";
import { plazasPorId } from "../data";
import { useTranslation } from "../localization";

/**
 * Genera la clave de traducción para una plaza basada en su ID
 * Convierte "plaza-san-martin" → "plaza.san.martin"
 */
const getPlazaTranslationKey = (plazaId: string): string => {
  return plazaId.replace(/-/g, '.');
};

/**
 * Dimensiones de imágenes de mapas (cache para optimización)
 * Todas las plazas usan la misma dimensión por simplicidad
 */
const MAP_IMAGE_DIMENSIONS = { width: 2500, height: 2500 };

/**
 * Obtiene las dimensiones de imagen para una plaza
 * Cache centralizado para evitar recálculos
 */
const getMapImageDimensions = (plazaId: string) => {
  // Por ahora todas las plazas tienen las mismas dimensiones
  // En el futuro se puede expandir para dimensiones específicas por plaza
  return MAP_IMAGE_DIMENSIONS;
};

import {
  Color,
  FontSize,
  Padding,
  Gap,
  FontFamily,
  Border,
} from "../GlobalStyles";

// Define el tipo para la ruta
type MapaModeloRouteProp = RouteProp<{
  MapaDeLaPlaza: { plazaId: string };
}, 'MapaDeLaPlaza'>;

const MapaDeLaPlaza = () => {
  const navigation = useUniversalNavigation();
  const route = useRoute<MapaModeloRouteProp>();
  const { t } = useTranslation();
  
  // Estado para controlar qué pin está destacado (grande)
  const [highlightedPinId, setHighlightedPinId] = useState<string>('parada-1');
  
  // Estado para las dimensiones de la imagen del mapa
  const [mapImageDimensions, setMapImageDimensions] = useState({
    width: 0,
    height: 0,
    displayWidth: 0,
    displayHeight: 0
  });
  
  // Obtenemos el plazaId de los parámetros de la ruta
  const { plazaId = 'plaza-san-martin' } = route.params || {};
  
  // Obtenemos los datos de la plaza
  const plaza = plazasPorId[plazaId];
  
  // Generar automáticamente la clave de traducción basada en el ID
  const plazaTranslationKey = getPlazaTranslationKey(plazaId);
  
  // Efecto para inicializar el pin destacado al montar el componente
  React.useEffect(() => {
    // Solo establecemos el pin inicial si no hay ningún pin destacado todavía
    // (esto evita que se resetee cada vez que el componente se vuelve a renderizar)
    if (!highlightedPinId && plaza?.paradas?.length > 0) {
      setHighlightedPinId('parada-1');
    }
  }, [plaza]);

  // Efecto para calcular las dimensiones de la imagen cuando cambia la plaza
  useEffect(() => {
    if (plaza?.modeloImagenPath) {
      try {
        // Resolver la imagen como asset
        const imageAsset = plaza.modeloImagenPath;
        
        // Para React Native nativo, usar resolveAssetSource
        {
          // Para React Native Web, usar dimensiones optimizadas centralizadas
          const imageDims = getMapImageDimensions(plaza.id);
          const screenWidth = Dimensions.get('window').width;
          const screenHeight = Dimensions.get('window').height;
          const imageAspectRatio = imageDims.width / imageDims.height;
          
          // Calcular padding responsive
          const responsivePadding = Math.min(Padding.p_36, screenWidth * 0.05) * 2; // Padding total horizontal
          
          // Calcular dimensiones que se ajusten completamente a la pantalla
          let displayWidth = screenWidth - responsivePadding - 20; // Restamos padding + margen adicional
          let displayHeight = displayWidth / imageAspectRatio;
          
          // Limitar altura máxima (más generoso en pantallas pequeñas)
          const maxHeight = Math.min(screenHeight * 0.5, 400); // Máximo 50% de la pantalla o 400px
          if (displayHeight > maxHeight) {
            displayHeight = maxHeight;
            displayWidth = displayHeight * imageAspectRatio;
          }
          
          // Asegurar que la imagen no sea demasiado pequeña
          const minWidth = 250;
          if (displayWidth < minWidth) {
            displayWidth = minWidth;
            displayHeight = displayWidth / imageAspectRatio;
          }
          
          setMapImageDimensions({
            width: imageDims.width,
            height: imageDims.height,
            displayWidth: displayWidth,
            displayHeight: displayHeight
          });
          console.log('DEBUG: Web image dimensions set:', {
            original: imageDims,
            display: { width: displayWidth, height: displayHeight }
          });
  }
      } catch (error) {
        console.warn('Error loading image dimensions:', error);
      }
    }
  }, [plaza?.modeloImagenPath]);

  // Debug effect para ver el estado de las dimensiones
  useEffect(() => {
    console.log('DEBUG: Image dimensions updated:', mapImageDimensions);
  }, [mapImageDimensions]);

  // Función para convertir coordenadas originales a coordenadas responsivas
  const getResponsivePosition = (originalX: number, originalY: number) => {
    if (mapImageDimensions.width === 0 || mapImageDimensions.height === 0) {
      console.log('DEBUG: Using original coordinates (no image dimensions)');
      return { left: originalX, top: originalY };
    }
    
    // Dimensiones del contenedor de la imagen (ya centrado)
    const containerWidth = mapImageDimensions.displayWidth;
    const containerHeight = mapImageDimensions.displayHeight;
    
    // Dimensiones originales de la imagen (2500x2500)
    const originalWidth = mapImageDimensions.width;
    const originalHeight = mapImageDimensions.height;
    
    // Calcular la escala que usa resizeMode="contain"
    const scaleX = containerWidth / originalWidth;
    const scaleY = containerHeight / originalHeight;
    const scale = Math.min(scaleX, scaleY);
    
    // Dimensiones reales de la imagen renderizada
    const renderedWidth = originalWidth * scale;
    const renderedHeight = originalHeight * scale;
    
    // Offset de centrado por resizeMode="contain"
    const offsetX = (containerWidth - renderedWidth) / 2;
    const offsetY = (containerHeight - renderedHeight) / 2;
    
    // Posición final = coordenadas escaladas + offset de centrado
    const result = {
      left: (originalX * scale) + offsetX,
      top: (originalY * scale) + offsetY
    };
    
    console.log('DEBUG PIN POSITION:', {
      originalCoords: { x: originalX, y: originalY },
      container: { width: containerWidth, height: containerHeight },
      originalImage: { width: originalWidth, height: originalHeight },
      scale,
      rendered: { width: renderedWidth, height: renderedHeight },
      offset: { x: offsetX, y: offsetY },
      finalPosition: result
    });
    
    return result;
  };

  // Efecto para actualizar el pin destacado cuando se regresa a esta pantalla
  useFocusEffect(
    React.useCallback(() => {
      // TODO: Implementar lógica de navegación anterior cuando sea necesario para web
      // Comentado temporalmente para compatibilidad universal con web
      /*
      const previousRoute = navigation.getState()?.routes?.[navigation.getState().index - 1];
      
      if (previousRoute && previousRoute.name === 'ParadaPlanta1' && previousRoute.params?.paradaId) {
        const previousParadaId = previousRoute.params?.paradaId;
        const paradas = plaza?.paradas || [];
        const currentIndex = paradas.findIndex(p => p.id === previousParadaId);
        
        // Si venimos de una parada, destacar esa parada 
        setHighlightedPinId(previousParadaId);
      }
      */
      // Ya no reseteamos a parada-1 si venimos de otra pantalla para mantener el estado
    }, [plazaId, plaza])
  );
  
  // Navegar a la pantalla de ParadaPlanta1 cuando se presiona un pin
  const handlePinPress = (paradaId: string) => {
    // Destacar el pin seleccionado
    setHighlightedPinId(paradaId);
    
    // Navegar a la pantalla de ParadaPlanta1 con los parámetros de la parada seleccionada
    navigation.navigate(SCREENS.PARADA_PLANTA, { plazaId, paradaId });
  };
  
  return (
    <ScrollView
      style={styles.mapaDeLaPlaza}
      contentContainerStyle={styles.mapaDeLaPlazaContent}
    >
      <TopBar translationKey={plazaTranslationKey} textoWidth="auto" />
      <View style={[styles.list, styles.listFlexBox]}>
        
        {/* Contenedor de imagen y pines */}
        <View style={styles.imageContainer}>
          {/* Contenedor de imagen con pines encima */}
          <View style={[
            styles.imageWithPinsContainer,
            mapImageDimensions.displayWidth > 0 && {
              width: mapImageDimensions.displayWidth,
              height: mapImageDimensions.displayHeight,
              alignSelf: 'center'
            }
          ]}>
            {/* Imagen del modelo 3D */}
            <Image
              style={styles.imagenPlaza}
              resizeMode="contain"
              source={plaza?.modeloImagenPath || require("../assets/plazas/Modelo-PSanMartin.png")}
            />
            
            {/* Pines de las paradas */}
          {plaza?.paradas.some(parada => typeof parada.ubicacionX === 'number' && typeof parada.ubicacionY === 'number') ? (
            plaza.paradas.map((parada) => {
              // Comprobamos que las coordenadas existan y sean válidas
              if (typeof parada.ubicacionX === 'number' && typeof parada.ubicacionY === 'number') {
                // Usar coordenadas del modelo si están disponibles, de lo contrario usar las coordenadas estándar
                const originalX = parada.modeloX !== undefined ? parada.modeloX : parada.ubicacionX;
                const originalY = parada.modeloY !== undefined ? parada.modeloY : parada.ubicacionY;
                
                // Convertir a coordenadas responsivas
                const responsivePos = getResponsivePosition(originalX, originalY);
                
                return (
                  <Pin
                    key={parada.id}
                    numero={parada.numero}
                    isLarge={parada.id === highlightedPinId}
                    onPress={() => handlePinPress(parada.id)}
                    style={{
                      position: 'absolute',
                      left: responsivePos.left,
                      top: responsivePos.top,
                      // Mayor z-index para asegurarnos que aparecen por encima de la imagen
                      zIndex: 10
                    }}
                  />
                );
              }
              return null; // No renderizar pin si faltan coordenadas
            })
          ) : (
            <View style={styles.noPinsContainer}>
              <Text style={styles.noPinsText}>
                No hay paradas con coordenadas disponibles
              </Text>
            </View>
          )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mapaDeLaPlazaContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    minHeight: "100%",
  },
  listFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  mapaTypo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontSize: FontSize.size_32,
  },
  mapaDeLaPlaza: {
    backgroundColor: Color.colorGray200,
    maxWidth: "100%",
    flex: 1,
    width: "100%",
  },
  list: {
    overflow: "hidden",
    paddingHorizontal: Math.min(Padding.p_36, Dimensions.get('window').width * 0.05), // Responsive: máximo 36px o 5% del ancho
    paddingTop: 45,
    paddingBottom: 93,
    gap: Gap.gap_19,
    alignSelf: "stretch",
    flex: 1,
  },
  plazaSanMartin: {
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    alignSelf: "stretch",
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    minHeight: Math.min(Dimensions.get('window').height * 0.5, 400), // Altura responsive
    marginVertical: 30, // Mayor margen vertical
    borderRadius: 12,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 10,
  },
  imageWithPinsContainer: {
    position: 'relative',
    width: "100%",
    height: '100%',
  },
  imagenPlaza: {
    width: "100%",
    height: '100%',
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: 12,
  },
  noPinsContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
  },
  noPinsText: {
    color: Color.colorWhite,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 8,
    overflow: 'hidden',
    maxWidth: '80%',
  },
});

export default MapaDeLaPlaza;
