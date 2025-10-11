import * as React from "react";
import { useState, useEffect } from "react";
import { ScrollView, Text, StyleSheet, View, Image, Dimensions, Platform } from "react-native";
import TopBar from "../components/TopBar";
import ModeloIcon from "../components/ModeloIcon";
import NavBar from "../components/NavBar";
import Pin from "../components/Pin";
import { useRoute, useFocusEffect } from "@react-navigation/native";
import { useUniversalNavigation, SCREENS } from "../navigation";
import { RouteProp } from "@react-navigation/native";
import { plazasPorId } from "../data";
import { useTranslation } from "../localization";
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
  
  // Determinar la clave de traducción para el nombre de la plaza según su ID
  let plazaTranslationKey = "plaza.san.martin"; // Por defecto
  if (plazaId === 'plaza-independencia') {
    plazaTranslationKey = "plaza.independencia";
  } else if (plazaId === 'plaza-espana') {
    plazaTranslationKey = "plaza.espana";
  } else if (plazaId === 'plaza-italia') {
    plazaTranslationKey = "plaza.italia";
  } else if (plazaId === 'plaza-chile') {
    plazaTranslationKey = "plaza.chile";
  }
  
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
        if (Platform.OS !== 'web') {
          const source = typeof imageAsset === 'number' ? Image.resolveAssetSource(imageAsset) : null;
          if (source) {
            const screenWidth = Dimensions.get('window').width;
            const imageAspectRatio = source.width / source.height;
            
            // Calcular dimensiones que se ajusten a la pantalla
            let displayWidth = screenWidth - 40; // Margen de 20px a cada lado
            let displayHeight = displayWidth / imageAspectRatio;
            
            // Limitar altura máxima
            const maxHeight = Dimensions.get('window').height * 0.6;
            if (displayHeight > maxHeight) {
              displayHeight = maxHeight;
              displayWidth = displayHeight * imageAspectRatio;
            }
            
            setMapImageDimensions({
              width: source.width,
              height: source.height,
              displayWidth: displayWidth,
              displayHeight: displayHeight
            });
            console.log('DEBUG: Native image dimensions set:', {
              original: { width: source.width, height: source.height },
              display: { width: displayWidth, height: displayHeight }
            });
          }
        } else {
          // Para React Native Web, usar dimensiones conocidas de las imágenes
          // TODO: Estas dimensiones deberían venir de un archivo de configuración
          const knownImageDimensions: Record<string, { width: number; height: number }> = {
            'plaza-san-martin': { width: 2500, height: 2500 },
            'plaza-independencia': { width: 2500, height: 2500 },
            'plaza-espana': { width: 2500, height: 2500 },
            'plaza-italia': { width: 2500, height: 2500 },
            'plaza-chile': { width: 2500, height: 2500 }
          };
          
          const imageDims = knownImageDimensions[plaza.id] || { width: 2500, height: 2500 };
          const screenWidth = Dimensions.get('window').width;
          const imageAspectRatio = imageDims.width / imageDims.height;
          
          // Calcular dimensiones que se ajusten a la pantalla
          let displayWidth = screenWidth - 40; // Margen de 20px a cada lado
          let displayHeight = displayWidth / imageAspectRatio;
          
          // Limitar altura máxima
          const maxHeight = Dimensions.get('window').height * 0.6;
          if (displayHeight > maxHeight) {
            displayHeight = maxHeight;
            displayWidth = displayHeight * imageAspectRatio;
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
    
    // Dimensiones del contenedor (imagen con style width/height 100%)
    const containerWidth = mapImageDimensions.displayWidth;
    const containerHeight = mapImageDimensions.displayHeight;
    
    // Dimensiones originales de la imagen
    const originalWidth = mapImageDimensions.width;
    const originalHeight = mapImageDimensions.height;
    
    // Calcular la escala que usa resizeMode="contain"
    // Se usa la menor escala para que la imagen quepa completamente
    const scaleX = containerWidth / originalWidth;
    const scaleY = containerHeight / originalHeight;
    const scale = Math.min(scaleX, scaleY);
    
    // Dimensiones reales de la imagen renderizada
    const renderedWidth = originalWidth * scale;
    const renderedHeight = originalHeight * scale;
    
    // Offset de centrado (espacios vacíos)
    const offsetX = (containerWidth - renderedWidth) / 2;
    const offsetY = (containerHeight - renderedHeight) / 2;
    
    // Posición final = posición escalada + offset de centrado
    const result = {
      left: (originalX * scale) + offsetX,
      top: (originalY * scale) + offsetY
    };
    
    console.log('DEBUG PIN POSITION:', {
      originalX, originalY,
      containerDims: { width: containerWidth, height: containerHeight },
      originalDims: { width: originalWidth, height: originalHeight },
      scale, renderedDims: { width: renderedWidth, height: renderedHeight },
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
          {/* Imagen del modelo 3D */}
          <Image
            style={[
              styles.imagenPlaza,
              mapImageDimensions.displayWidth > 0 && {
                width: mapImageDimensions.displayWidth,
                height: mapImageDimensions.displayHeight
              }
            ]}
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
      <NavBar />
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
    paddingHorizontal: Padding.p_36,
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
    height: 450, // Altura aumentada
    marginVertical: 30, // Mayor margen vertical
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 10,
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
