/**
 * TOPBAR UNIVERSAL - EJEMPLO DE MIGRACIÓN
 * Versión migrada del TopBar usando el sistema universal
 */

import React, { useMemo, useContext } from "react";
import { Pressable } from "react-native";
import { useTranslation } from "../../localization";

// ANTES: import { useNavigation } from "@react-navigation/native";
// DESPUÉS: usar nuestro sistema universal
import { useUniversalNavigation } from "../../navigation";

// ANTES: imports de GlobalStyles
// import { Color, Padding, FontSize, FontFamily } from "../../GlobalStyles";
// DESPUÉS: usar nuestro sistema de styling
import { 
  createStyles, 
  theme, 
  LegacyColors, // Para compatibilidad temporal
} from "../../styling";
import { 
  UView as View, 
  UText as Text, 
  URow as Row 
} from "./";

export type UniversalTopBarProps = {
  text?: string;
  translationKey?: string;
  title?: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
  textoWidth?: number | string;
};

const UniversalTopBar = ({ 
  text = "", 
  translationKey, 
  textoWidth, 
  title, 
  showBackButton, 
  onBackPress 
}: UniversalTopBarProps) => {
  
  // Usar contexto de idioma
  const { t, language } = useTranslation();
  
  // MIGRACIÓN: useNavigation -> useUniversalNavigation
  const navigation = useUniversalNavigation();
  
  // Estilo dinámico para el texto
  const textoStyle = useMemo(() => {
    return textoWidth !== undefined ? { width: textoWidth as any } : {};
  }, [textoWidth]);
  
  // Manejar botón de retroceso
  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      navigation.goBack();
    }
  };
  
  // Lógica de texto (sin cambios)
  let displayText = title || text || "";
  if (translationKey && translationKey !== "") {
    displayText = t(translationKey as any, displayText);
  }
  
  return (
    <View style={styles.topbar}>
      {showBackButton && (
        <Pressable style={styles.backButton} onPress={handleBackPress}>
          <Text style={styles.backButtonText}>←</Text>
        </Pressable>
      )}
      
      <Row style={styles.textContainer}>
        <Text 
          style={[styles.texto, textoStyle]}
          numberOfLines={2}
          adjustsFontSizeToFit
        >
          {displayText}
        </Text>
      </Row>
    </View>
  );
};

// MIGRACIÓN DE ESTILOS: StyleSheet.create -> createStyles
const styles = createStyles({
  topbar: {
    backgroundColor: theme.colors.primary, // ANTES: Color.colorDarkcyan
    paddingHorizontal: theme.spacing.md,   // ANTES: Padding.p_19
    paddingVertical: theme.spacing.sm,     // ANTES: Padding.p_12  
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 60,
    // Web-specific optimizations
    cursor: 'default',
    userSelect: 'none',
  },
  
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.borderRadius.sm,
    // Hover effect para web (se ignora en native)
    ':hover': {
      backgroundColor: 'rgba(255,255,255,0.1)',
    },
  },
  
  backButtonText: {
    color: theme.colors.background,        // ANTES: Color.colorWhite
    fontSize: theme.typography.sizes.lg,   // ANTES: FontSize.size_lg
    fontWeight: theme.typography.weights.bold,
  },
  
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.sm,
  },
  
  texto: {
    color: theme.colors.background,        // ANTES: Color.colorWhite  
    fontSize: theme.typography.sizes.lg,   // ANTES: FontSize.size_lg
    fontWeight: theme.typography.weights.medium,
    textAlign: 'center',
    // Responsive text sizing para web
    '@media (max-width: 768px)': {
      fontSize: theme.typography.sizes.sm,
    },
  },
});

export { UniversalTopBar };

// Para migración gradual - mantener compatibilidad
export const TopBar = UniversalTopBar;