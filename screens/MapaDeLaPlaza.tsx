import * as React from "react";
import { useState } from "react";
import { ScrollView, Text, StyleSheet, View, Image, Dimensions } from "react-native";
import TopBar from "../components/TopBar";
import ModeloIcon from "../components/ModeloIcon";
import NavBar from "../components/NavBar";
import Klipartz from "../assets/Klipartz.svg";
import Pin from "../components/Pin";
import { useRoute, useNavigation, useFocusEffect } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";
import { plazasPorId } from "../data";
import { useLanguage } from "../contexts/LanguageContext";
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
  const navigation = useNavigation<any>();
  const route = useRoute<MapaModeloRouteProp>();
  const { translate } = useLanguage();
  
  // Estado para controlar qué pin está destacado (grande)
  const [highlightedPinId, setHighlightedPinId] = useState<string>('parada-1');
  
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
  
  // Efecto para actualizar el pin destacado cuando se regresa a esta pantalla
  useFocusEffect(
    React.useCallback(() => {
      // Verificar si venimos de ParadaPlanta1
      const previousRoute = navigation.getState()?.routes?.[navigation.getState().index - 1];
      
      if (previousRoute && previousRoute.name === 'ParadaPlanta1' && previousRoute.params?.paradaId) {
        const previousParadaId = previousRoute.params?.paradaId;
        const paradas = plaza?.paradas || [];
        const currentIndex = paradas.findIndex(p => p.id === previousParadaId);
        
        // Si venimos de una parada, destacar esa parada 
        setHighlightedPinId(previousParadaId);
      }
      // Ya no reseteamos a parada-1 si venimos de otra pantalla para mantener el estado
    }, [navigation, plazaId, plaza])
  );
  
  // Navegar a la pantalla de ParadaPlanta1 cuando se presiona un pin
  const handlePinPress = (paradaId: string) => {
    // Destacar el pin seleccionado
    setHighlightedPinId(paradaId);
    
    // Navegar a la pantalla de ParadaPlanta1 con los parámetros de la parada seleccionada
    navigation.navigate('ParadaPlanta1', { plazaId, paradaId });
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
                const posX = parada.modeloX !== undefined ? parada.modeloX : parada.ubicacionX;
                const posY = parada.modeloY !== undefined ? parada.modeloY : parada.ubicacionY;
                
                return (
                  <Pin
                    key={parada.id}
                    numero={parada.numero}
                    isLarge={parada.id === highlightedPinId}
                    onPress={() => handlePinPress(parada.id)}
                    style={{
                      position: 'absolute',
                      left: posX,
                      top: posY,
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
      <NavBar klipartz={<Klipartz width={55} height={55} />} />
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