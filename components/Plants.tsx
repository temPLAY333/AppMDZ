import React from "react";
import { TextInput, StyleSheet, View, Image, Text } from "react-native";
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

  return (
    <View style={[styles.plants, styles.plantsFlexBox]}>
      <View style={styles.nombreContainer}>
        <TextInput
          style={[styles.nombrePlanta, styles.nombrePlantaTypo]}
          value={nombre}
          editable={false}
          multiline={true} 
          numberOfLines={2} // Permitir hasta 2 líneas
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
      
      {/* Imagen de la planta */}
      {imagenPath && (
        <Image 
          source={imagenPath} 
          style={styles.imagenPlanta}
          resizeMode="contain"
        />
      )}
      
      {/* Referencias (emojis) - ajuste automático de tamaño según cantidad */}
      {referencias && referencias.length > 0 && (
        <View style={[
          styles.referenciasContainer,
          // Si hay más de 4 referencias, activamos el scroll horizontal
          referencias.length > 4 ? { flexWrap: 'nowrap' } : {}
        ]}>
          {referencias.map((emoji, index) => {
            // Escala de tamaño según la cantidad de referencias
            let tamanoEmoji, tamanoContenedor;
            
            if (referencias.length <= 3) {
              // Para 1-3 emojis, tamaño grande
              tamanoEmoji = 56;
              tamanoContenedor = { height: 80, width: 80, borderRadius: 14 };
            } else if (referencias.length === 4) {
              // Para exactamente 4 emojis, tamaño medio
              tamanoEmoji = 46;
              tamanoContenedor = { height: 68, width: 68, borderRadius: 12 };
            } else {
              // Para 5+ emojis, tamaño pequeño
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
      
      {/* Descripción de la planta - Solo se muestra si hay descripción */}
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
    minHeight: 58, // Cambiado de height a minHeight para permitir múltiples líneas
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
  imagenPlanta: {
    width: '100%',
    height: 200, // Reducimos un poco la altura de la imagen
    marginVertical: 8,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 10,
  },
  referenciasContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Centramos horizontalmente
    alignItems: 'center', // Aseguramos que los items estén centrados verticalmente también
    flexWrap: 'wrap', // Permitimos wrap pero lo controlaremos según la cantidad de emojis
    marginVertical: 10, // Aumentamos el margen vertical para dar más espacio
    width: '100%',
    paddingHorizontal: 5, // Reducimos padding para dar más espacio a los emojis
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
    lineHeight: 32, // Ligeramente ajustado el espaciado entre líneas
  },
});

export default Plants;