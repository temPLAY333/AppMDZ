import React, { useMemo, useContext } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, Padding, FontSize, FontFamily } from "../GlobalStyles";
import { LanguageContext } from "../contexts/LanguageContext";

export type TopBarType = {
  text?: string;
  translationKey?: string;

  /** Style props */
  textoWidth?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TopBar = ({ text = "Parada N°1", translationKey, textoWidth }: TopBarType) => {
  // Usar el contexto de idioma si está disponible
  const languageContext = useContext(LanguageContext);
  
  const textoStyle = useMemo(() => {
    return {
      ...getStyleValue("width", textoWidth),
    };
  }, [textoWidth]);
  
  // Si hay una clave de traducción y el contexto está disponible, usar la traducción
  const displayText = translationKey && languageContext?.translate ? 
    languageContext.translate(translationKey as any) : 
    text;

  return (
    <View style={styles.topbar}>
      <Text style={[styles.texto, textoStyle]}>{displayText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  topbar: {
    width: '100%', // Ancho flexible que cubre toda la pantalla
    backgroundColor: Color.colorGray100,
    height: 70, // Alto aumentado en 10px
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 27,
    paddingVertical: Padding.p_10, // Ajustado para centrar mejor el texto
  },
  texto: {
    // El ancho ahora se pasa como prop (textoWidth) en lugar de fijarlo aquí
    minHeight: 40, // Altura mínima para textos largos
    fontSize: FontSize.size_24,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorWhite,
    textAlign: "center", // Centrar horizontalmente el texto
    alignSelf: "center", // Centrar el componente de texto
    flexShrink: 1, // Permite que el texto se encoja si es necesario
    textAlignVertical: 'center', // Centrar verticalmente el texto
  },
});

export default TopBar;