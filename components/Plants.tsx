import React from "react";
import { TextInput, StyleSheet, View, Image } from "react-native";
import PlantaDescripcion from "./PlantaDescripcion";
import { PlantaAtributos } from "../data/types";

import { FontFamily, Gap, FontSize, Color, Padding } from "../GlobalStyles";

export type PlantsType = {
  nombre: string;
  nombreCientifico: string;
  descripcionesMultilingue: PlantaAtributos['descripcionesMultilingue'];
  imagenPath: any; // Imagen de la planta
  // Las referencias (emojis) ahora se manejan a través de otro componente
};

const Plants = ({
  nombre,
  nombreCientifico,
  descripcionesMultilingue,
  imagenPath,
}: PlantsType) => {

  return (
    <View style={[styles.plants, styles.plantsFlexBox]}>
      <TextInput
        style={[styles.nombrePlanta, styles.nombrePlantaTypo]}
        value={nombre}
        editable={false}
      />
      <TextInput
        style={[styles.nombreCientifico, styles.nombreCientificoTypo]}
        value={nombreCientifico}
        editable={false}
      />
      
      {/* Imagen de la planta */}
      {imagenPath && (
        <Image 
          source={imagenPath} 
          style={styles.imagenPlanta}
          resizeMode="contain"
        />
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
  nombrePlanta: {
    width: '100%',
    maxWidth: 500,
    height: 58,
    fontSize: FontSize.size_36,
    marginBottom: 5,
  },
  nombreCientifico: {
    width: '100%',
    maxWidth: 500,
    height: 35,
    fontSize: FontSize.size_24,
    marginBottom: 10,
  },
  imagenPlanta: {
    width: '100%',
    height: 200,
    marginVertical: 10,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 10,
  },
  descripcion: {
    fontSize: FontSize.size_24,
    color: Color.colorWhite,
    textAlign: "left",
    alignSelf: "stretch",
    fontFamily: FontFamily.interRegular,
    flexShrink: 1,
    marginTop: 10,
  },
});

export default Plants;