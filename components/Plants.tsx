import React, { useState, useEffect } from "react";
import { TextInput, StyleSheet, View, Image, Text, Dimensions, Platform, ScrollView, TouchableOpacity } from "react-native";
import PlantaDescripcion from "./PlantaDescripcion";
import { PlantaAtributos, EmojiReferencia } from "../data/types";
import Emojis from "./Emojis";

import { FontFamily, Gap, FontSize, Color, Padding } from "../GlobalStyles";

export type PlantsType = {
  nombre: string;
  nombreCientifico: string;
  descripcionesMultilingue: PlantaAtributos['descripcionesMultilingue'];
  imagenPath?: any; // Imagen única (para compatibilidad)
  imagenesPath?: string[]; // Múltiples imágenes de la planta
  referencias?: EmojiReferencia[]; // Referencias (emojis)
};

const Plants = ({
  nombre,
  nombreCientifico,
  descripcionesMultilingue,
  imagenPath,
  imagenesPath = [],
  referencias = []
}: PlantsType) => {
  // Estado para almacenar las dimensiones de la imagen
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  // Estado para el carrusel de imágenes
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // Obtenemos el ancho de la pantalla para calcular proporciones
  const screenWidth = Dimensions.get('window').width;
  // Referencia al ScrollView para control programático
  const scrollViewRef = React.useRef<ScrollView>(null);
  
  // Determinar qué imágenes usar (múltiples o única)
  const imagesToShow = imagenesPath.length > 0 ? imagenesPath : (imagenPath ? [imagenPath] : []);
  const hasMultipleImages = imagesToShow.length > 1;
  
  // Log para depurar qué imágenes está recibiendo el componente
  React.useEffect(() => {
    console.log(`🖼️ Plants component "${nombre}" recibió ${imagesToShow.length} imágenes:`);
    imagesToShow.forEach((img, index) => {
      console.log(`   ${index + 1}. ${img}`);
    });
    // Resetear el índice cuando cambien las imágenes
    setCurrentImageIndex(0);
  }, [imagesToShow, nombre]);

  // Función para navegar a una imagen específica
  const navigateToImage = (index: number) => {
    setCurrentImageIndex(index);
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: index * screenWidth * 0.8,
        animated: true
      });
    }
  };
  
  // Efecto para cargar las dimensiones de la imagen cuando cambia imagenPath
  useEffect(() => {
    if (imagenPath) {
      try {
        // En React Native, usar resolveAssetSource
        if (Platform.OS !== 'web' && Image.resolveAssetSource) {
          const source = Image.resolveAssetSource(imagenPath);
          if (source && source.width && source.height) {
            setImageDimensions({
              width: source.width,
              height: source.height
            });
            return;
          }
        }
        
        // Para React Native Web o como fallback, usar Image.getSize si está disponible
        if (typeof imagenPath === 'string' && Image.getSize) {
          Image.getSize(
            imagenPath,
            (width, height) => {
              setImageDimensions({ width, height });
            },
            (error) => {
              console.warn('Error al obtener dimensiones de imagen:', error);
              // Usar dimensiones por defecto
              setImageDimensions({ width: 300, height: 200 });
            }
          );
        } else {
          // Fallback: usar dimensiones por defecto
          setImageDimensions({ width: 300, height: 200 });
        }
      } catch (error) {
        console.warn('Error al cargar dimensiones de imagen:', error);
        // Usar dimensiones por defecto en caso de error
        setImageDimensions({ width: 300, height: 200 });
      }
    }
  }, [imagenPath]);
  
  // Calcular altura ajustada para la imagen basada en sus proporciones originales
  // pero con un m�nimo y un m�ximo para no distorsionar demasiado la UI
  const getAdjustedImageHeight = () => {
    if (imageDimensions.width === 0 || imageDimensions.height === 0) {
      return 250; // Altura por defecto si a�n no se han cargado las dimensiones
    }
    
    const ratio = imageDimensions.height / imageDimensions.width;
    const calculatedHeight = Math.min(Math.max((screenWidth - 40) * ratio, 200), 400);
    
    return calculatedHeight;
  };

  return (
    <View style={[styles.plants, styles.plantsFlexBox]}>
      <View style={styles.nombreContainer}>
        <TextInput
          style={[styles.nombrePlanta, styles.nombrePlantaTypo]}
          value={nombre}
          editable={false}
          multiline={true} 
          numberOfLines={2} // Permitir hasta 2 l�neas
          textAlignVertical="center" // Centrar verticalmente
        />
        <View style={styles.underline}></View>
      </View>
      <TextInput
        style={[styles.nombreCientifico, styles.nombreCientificoTypo]}
        value={nombreCientifico}
        editable={false}
        multiline={true}
        numberOfLines={2}
      />
      
      {/* Carrusel de imágenes de la planta */}
      {imagesToShow.length > 0 && (
        <View style={styles.imagenContainer}>
          {hasMultipleImages ? (
            <View style={styles.carouselContainer}>
              {/* Imagen actual - método simplificado */}
              <View style={styles.singleImageContainer}>
                <Image 
                  key={`${nombre}-current-${currentImageIndex}`}
                  source={typeof imagesToShow[currentImageIndex] === 'string' ? { uri: imagesToShow[currentImageIndex] } : imagesToShow[currentImageIndex]}
                  style={[
                    styles.imagenPlanta,
                    {
                      height: getAdjustedImageHeight(),
                      width: '100%'
                    }
                  ]}
                  resizeMode="contain"
                  onError={(error) => {
                    console.error(`❌ Error cargando imagen ${currentImageIndex + 1} para "${nombre}": ${imagesToShow[currentImageIndex]}`, error);
                  }}
                  onLoad={() => {
                    console.log(`✅ Imagen ${currentImageIndex + 1} cargada correctamente para "${nombre}": ${imagesToShow[currentImageIndex]}`);
                  }}
                />
              </View>
              
              {/* Indicadores de página */}
              <View style={styles.pageIndicators}>
                {imagesToShow.map((_, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.indicator,
                      index === currentImageIndex ? styles.activeIndicator : styles.inactiveIndicator
                    ]}
                    onPress={() => {
                      console.log(`🎯 Usuario presionó indicador ${index}, cambiando de ${currentImageIndex} a ${index}`);
                      setCurrentImageIndex(index);
                    }}
                  />
                ))}
              </View>
              
              {/* Contador de imágenes */}
              <View style={styles.imageCounter}>
                <Text style={styles.counterText}>
                  {currentImageIndex + 1} / {imagesToShow.length}
                </Text>
              </View>
            </View>
          ) : (
            /* Imagen única (modo compatibilidad) */
            <Image 
              source={typeof imagesToShow[0] === 'string' ? { uri: imagesToShow[0] } : imagesToShow[0]}
              style={[
                styles.imagenPlanta,
                {
                  height: getAdjustedImageHeight()
                }
              ]}
              resizeMode="contain"
            />
          )}
        </View>
      )}
      
      {/* Referencias (emojis) - ajuste autom�tico de tama�o seg�n cantidad */}
      {referencias && referencias.length > 0 && (
        <View style={[
          styles.referenciasContainer,
          // Si hay m�s de 4 referencias, activamos el scroll horizontal
          referencias.length > 4 ? { flexWrap: 'nowrap' } : {}
        ]}>
          {referencias.map((emoji, index) => {
            // Escala de tama�o seg�n la cantidad de referencias
            let tamanoEmoji, tamanoContenedor;
            
            if (referencias.length <= 3) {
              // Para 1-3 emojis, tama�o grande
              tamanoEmoji = 56;
              tamanoContenedor = { height: 80, width: 80, borderRadius: 14 };
            } else if (referencias.length === 4) {
              // Para exactamente 4 emojis, tama�o medio
              tamanoEmoji = 46;
              tamanoContenedor = { height: 68, width: 68, borderRadius: 12 };
            } else {
              // Para 5+ emojis, tama�o peque�o
              tamanoEmoji = 38;
              tamanoContenedor = { height: 60, width: 60, borderRadius: 10 };
            }
            
            return (
              <View 
                key={index} 
                style={[
                  styles.emojiContainer,
                  tamanoContenedor
                ]}
              >
                <Emojis emoji={emoji} size={tamanoEmoji} />
              </View>
            );
          })}
        </View>
      )}
      
      {/* Descripci�n de la planta - Solo se muestra si hay descripci�n */}
      {descripcionesMultilingue && Object.keys(descripcionesMultilingue).length > 0 && (
        <PlantaDescripcion 
          descripcionesMultilingue={descripcionesMultilingue}
          style={styles.descripcion}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  plantsFlexBox: {
    overflow: "hidden",
    alignSelf: "stretch",
  },
  nombrePlantaTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.colorWhite,
  },
  nombreCientificoTypo: {
    fontFamily: FontFamily.interRegular,
    fontStyle: "italic",
    color: Color.colorWhite,
  },
  plants: {
    minHeight: 400,
    gap: Gap.gap_10,
    flex: 1,
    padding: Padding.p_10,
  },
  nombreContainer: {
    width: '100%',
    position: 'relative',
    marginBottom: 5,
  },
  nombrePlanta: {
    width: '100%',
    maxWidth: 500,
    minHeight: 58, // Cambiado de height a minHeight para permitir m�ltiples l�neas
    fontSize: FontSize.size_36,
    paddingBottom: 8, // Espacio para el subrayado
    textAlign: 'center', // Centrar el texto
  },
  underline: {
    height: 3,
    backgroundColor: '#A6D451', // Color verde para subrayado
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  nombreCientifico: {
    width: '100%',
    maxWidth: 500,
    minHeight: 55, // Aumentamos la altura para que no se corte
    fontSize: FontSize.size_24,
    marginBottom: 10,
    paddingTop: 5,
  },
  imagenContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  imagenPlanta: {
    width: '100%',
    borderRadius: 10,
    // La altura se calcula dinámicamente según la proporción de la imagen
  },
  carouselContainer: {
    width: '100%',
    position: 'relative',
  },
  carousel: {
    width: '100%',
  },
  singleImageContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageIndicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 20,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeIndicator: {
    backgroundColor: '#A6D451', // Verde activo
  },
  inactiveIndicator: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Blanco transparente
  },
  imageCounter: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  counterText: {
    color: Color.colorWhite,
    fontSize: 12,
    fontFamily: FontFamily.interRegular,
  },
  referenciasContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Centramos horizontalmente
    alignItems: 'center', // Aseguramos que los items est�n centrados verticalmente tambi�n
    flexWrap: 'wrap', // Permitimos wrap pero lo controlaremos seg�n la cantidad de emojis
    marginVertical: 10, // Aumentamos el margen vertical para dar m�s espacio
    width: '100%',
    paddingHorizontal: 5, // Reducimos padding para dar m�s espacio a los emojis
  },
  emojiContainer: {
    marginHorizontal: 4, // Reducido para que quepan mejor en una fila
    height: 80,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 14,
    marginBottom: 8,
    padding: 0,
    overflow: 'visible',
  },
  descripcion: {
    fontSize: FontSize.size_24,
    color: Color.colorWhite,
    textAlign: "left",
    alignSelf: "stretch",
    fontFamily: FontFamily.interRegular,
    flexShrink: 1,
    marginTop: 5,
    marginBottom: 15,
    lineHeight: 32, // Ligeramente ajustado el espaciado entre l�neas
  },
});

export default Plants;
