import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import PlantaDescripcion from "./PlantaDescripcion";
import { DescripcionesPlanta } from "../data/types";
import { useLanguage } from "../contexts/LanguageContext";
import { FontFamily, Gap, FontSize, Color, Padding } from "../GlobalStyles";

export type PlantsType = {
  descripcion?: string;  // Opcional (solo para compatibilidad con versiones anteriores)
  descripcionesMultilingue: DescripcionesPlanta;  // Requerido
  // Eliminamos las propiedades de emojis ya que no se usan más
};

const Plants = ({
  descripcion, // Ya no establecemos un valor por defecto porque vamos a priorizar descripcionesMultilingue
  descripcionesMultilingue,
}: PlantsType) => {
  const { language } = useLanguage(); // Acceder al idioma seleccionado

  return (
    <View style={[styles.plants, styles.plantsFlexBox]}>
      <TextInput
        style={[styles.abeliaSp, styles.abeliaSpTypo]}
        placeholder="Arbusto Nativo"
        placeholderTextColor="#fff"
      />
      {/* Eliminamos la sección de emojis */}
      <PlantaDescripcion 
        descripcion={descripcion}
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
  abeliaSpTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  plants: {
    minHeight: 400, // Altura mínima en lugar de fija
    gap: Gap.gap_10,
    flex: 1, // Permite que crezca según el contenido
  },
  abeliaSp: {
    width: '100%', // Ancho flexible
    maxWidth: 500, // Máximo ancho para pantallas muy grandes
    height: 58,
    fontSize: FontSize.size_48,
  },
  referencia: {
    minHeight: 80, // Altura mínima
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_18,
    gap: 27,
    flexWrap: 'wrap', // Permite que los emojis se envuelvan en pantallas pequeñas
    justifyContent: 'center', // Centra los emojis
  },
  descripcion: {
    fontSize: FontSize.size_24,
    color: Color.colorWhite,
    textAlign: "left",
    alignSelf: "stretch",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    flexShrink: 1, // Permite que el texto se encoja si es necesario
  },
});

export default Plants;