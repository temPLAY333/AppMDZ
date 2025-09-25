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
      
      {/* Referencias (emojis) */}
      {referencias.length > 0 && (
        <View style={styles.referenciasContainer}>
          {referencias.map((emoji, index) => (
            <View key={index} style={styles.emojiContainer}>
              <Emojis emoji={emoji} size={32} />
            </View>
          ))}
        </View>
      )}
      
      {/* Descripción de la planta */}
      <PlantaDescripcion 
        descripcionesMultilingue={descripcionesMultilingue}
        style={styles.descripcion}
      />
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
    height: 58,
    fontSize: FontSize.size_36,
    paddingBottom: 8, // Espacio para el subrayado
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
    height: 250, // Aumentamos la altura de la imagen
    marginVertical: 10,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 10,
  },
  referenciasContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginVertical: 10,
    width: '100%',
    paddingHorizontal: 10,
  },
  emojiContainer: {
    marginHorizontal: 5,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 20,
    marginBottom: 5,
  },
  descripcion: {
    fontSize: FontSize.size_24,
    color: Color.colorWhite,
    textAlign: "left",
    alignSelf: "stretch",
    fontFamily: FontFamily.interRegular,
    flexShrink: 1,
    marginTop: 10,
    lineHeight: 34, // Aumentado el espaciado entre líneas
  },
});

export default Plants;