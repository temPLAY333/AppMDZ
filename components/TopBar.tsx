import React, { useMemo } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Color, Padding, FontSize, FontFamily } from "../GlobalStyles";
import { useTranslation } from "../localization";
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
  // Usar el nuevo sistema de traducción
  const { t } = useTranslation();
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
  
  // Feedback háptico importado dinámicamente
  const handleBackPressWithHaptic = async () => {
    try {
      const Haptics = await import("expo-haptics");
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    } catch (e) {
      // Haptics no disponible en web
    }
    handleBackPress();
  };
  
  // Comenzamos con el texto proporcionado o el título si existe
  let displayText = title || text || "";
  
  // Si se proporciona translationKey, usar la traducción
  if (translationKey) {
    const translated = t(translationKey as any, displayText);
    console.log(`TOPBAR: translationKey="${translationKey}", fallback="${displayText}", result="${translated}"`);
    displayText = translated;
  }
  
  // Si ya tenemos un texto explícito (sin translationKey), mantenerlo tal cual está
  if (text || title) {
    // El nuevo sistema maneja las traducciones automáticamente, no necesitamos casos especiales
  }

  return (
    <View 
      style={styles.topbar}
      accessibilityRole="header"
    >
      {showBackButton && (
        <Pressable 
          style={styles.backButton} 
          onPress={handleBackPressWithHaptic}
          accessibilityRole="button"
          accessibilityLabel="Volver atrás"
          accessibilityHint="Regresa a la pantalla anterior"
        >
          <Text style={styles.backButtonText}>←</Text>
        </Pressable>
      )}
      <Text 
        style={[styles.texto, textoStyle]}
        accessibilityRole="text"
        accessibilityLabel={`Título: ${displayText}`}
      >
        {displayText}
      </Text>
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