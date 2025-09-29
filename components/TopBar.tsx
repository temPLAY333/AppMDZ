import React, { useMemo, useContext } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Color, Padding, FontSize, FontFamily } from "../GlobalStyles";
import { LanguageContext } from "../contexts/LanguageContext";
import { useNavigation } from "@react-navigation/native";

export type TopBarType = {
  text?: string;
  translationKey?: string;
  title?: string;
  showBackButton?: boolean;
  onBackPress?: () => void;

  /** Style props */
  textoWidth?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TopBar = ({ text = "", translationKey, textoWidth, title, showBackButton, onBackPress }: TopBarType) => {
  // Usar el contexto de idioma si está disponible
  const languageContext = useContext(LanguageContext);
  const { language } = languageContext || { language: 'es' };
  const navigation = useNavigation();
  
  const textoStyle = useMemo(() => {
    return {
      ...getStyleValue("width", textoWidth),
    };
  }, [textoWidth]);
  
  // Manejar el botón de retroceso
  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      navigation.goBack();
    }
  };
  
  // Comenzamos con el texto proporcionado o el título si existe
  let displayText = title || text || "";
  
  // Si se proporciona translationKey (y no está vacía), usar la traducción
  if (translationKey && languageContext?.translate && translationKey !== "") {
    displayText = languageContext.translate(translationKey as any);
    return (
      <View style={styles.topbar}>
        {showBackButton && (
          <Pressable style={styles.backButton} onPress={handleBackPress}>
            <Text style={styles.backButtonText}>←</Text>
          </Pressable>
        )}
        <Text style={[styles.texto, textoStyle]}>{displayText}</Text>
      </View>
    );
  }
  
  // Si ya tenemos un texto explícito (sin translationKey), mantenerlo tal cual está
  if (text || title) {
    // Caso especial para Parada: traduce "Parada" a "Stop" en inglés si estamos en inglés
    if ((displayText.includes("Parada")) && language === 'en') {
      displayText = displayText.replace("Parada", "Stop");
    }
  }

  return (
    <View style={styles.topbar}>
      {showBackButton && (
        <Pressable style={styles.backButton} onPress={handleBackPress}>
          <Text style={styles.backButtonText}>←</Text>
        </Pressable>
      )}
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
    flexDirection: 'row', // Para poder colocar el botón de retroceso
    position: 'relative', // Para posicionamiento absoluto del botón
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
    flex: 1, // Tomar el espacio disponible
  },
  backButton: {
    position: 'absolute',
    left: 10,
    padding: 8,
    zIndex: 10,
  },
  backButtonText: {
    fontSize: 24,
    color: Color.colorWhite,
    fontWeight: 'bold',
  },
});

export default TopBar;