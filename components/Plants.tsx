import React, { useState, useEffect } from "react";
import { TextInput, StyleSheet, View, Image, Text, Dimensions } from "react-native";
import PlantaDescripcion from "./PlantaDescripcion";
import { PlantaAtributos, EmojiReferencia } from "../data/types";
import Emojis from "./Emojis";

import { FontFamily, Gap, FontSize, Color, Padding } from "../GlobalStyles";

export type PlantsType = {
  nombre: string;
  nombreCientifico: string;
  descripcionesMultilingue: PlantaAtributos['descripcionesMultilingue'];
  imagenPath: any; // Imagen de la planta
  referencias?: EmojiReferencia[]; // Referencias (emojis)
};

const Plants = ({
  nombre,
  nombreCientifico,
  descripcionesMultilingue,
  imagenPath,
  referencias = []
}: PlantsType) => {
  // Estado para almacenar las dimensiones de la imagen
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  // Obtenemos el ancho de la pantalla para calcular proporciones
  const screenWidth = Dimensions.get('window').width;
  
  // Efecto para cargar las dimensiones de la imagen cuando cambia imagenPath
  useEffect(() => {
    if (imagenPath) {
      try {
        const source = Image.resolveAssetSource(imagenPath);
        if (source && source.width && source.height) {
          setImageDimensions({
            width: source.width,
            height: source.height
          });
        }
      } catch (error) {
        console.warn('Error al cargar dimensiones de imagen:', error);
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
      
      {/* Imagen de la planta con contenedor adaptativo */}
      {imagenPath && (
        <View style={styles.imagenContainer}>
          <Image 
            source={imagenPath}
            style={[
              styles.imagenPlanta,
              {
                height: getAdjustedImageHeight()
              }
            ]}
            resizeMode="contain"
          />
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
    // La altura se calcula din�micamente seg�n la proporci�n de la imagen
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
