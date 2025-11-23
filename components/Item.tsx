import React, { useRef, useEffect } from "react";
import { Pressable, Text, StyleSheet, View, ViewStyle, Animated, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Haptics from "expo-haptics";
import UniversalEmoji from "./UniversalEmoji";
import {
  Color,
  FontFamily,
  Border,
  Padding,
  Gap,
  FontSize,
} from "../GlobalStyles";

export type ItemType = {
  /** Texto principal a mostrar */
  text: string;
  
  /** Emoji o icono a mostrar (opcional) */
  emoji?: string;
  
  /** Indica si el elemento está seleccionado/activo */
  isSelected?: boolean;
  
  /** Función a ejecutar al presionar el elemento */
  onPress?: () => void;
  
  /** Tamaño de la fuente del texto principal (opcional) */
  textSize?: number;
  
  /** Tamaño de la fuente del emoji (opcional) */
  emojiSize?: number;
  
  /** Altura personalizada para el item (opcional) */
  height?: number;
  
  /** Ancho personalizado para el item (opcional) */
  width?: number | string;
  
  /** Estilo adicional para el contenedor (opcional) */
  style?: ViewStyle;
  
  /** Deshabilitar el botón (opcional) */
  disabled?: boolean;
  
  /** Variante visual del botón (opcional) */
  variant?: 'primary' | 'gradient' | 'secondary';
  
  /** Label de accesibilidad (opcional, usa text si no se proporciona) */
  accessibilityLabel?: string;
  
  /** Hint de accesibilidad para describir la acción (opcional) */
  accessibilityHint?: string;
};

const Item = ({
  text,
  emoji,
  isSelected = false,
  onPress,
  textSize = FontSize.size_24,
  emojiSize = FontSize.size_48,
  height = 80,
  width = 340,
  style,
  disabled = false,
  variant = 'primary',
  accessibilityLabel,
  accessibilityHint,
}: ItemType) => {
  // Valores animados para escala y opacidad del gradiente
  const scale = useRef(new Animated.Value(1)).current;
  const gradientOpacity = useRef(new Animated.Value(isSelected ? 1 : 0)).current;
  const shadowElevation = useRef(new Animated.Value(2)).current;
  
  // Sincronizar animación de gradiente con isSelected
  useEffect(() => {
    Animated.timing(gradientOpacity, {
      toValue: isSelected ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [isSelected]);

  // Animaciones de entrada (press in)
  const animateIn = () => {
    // Feedback háptico en dispositivos móviles
    if (Platform.OS !== 'web' && !disabled) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    
    const animations = [
      Animated.spring(scale, {
        toValue: 0.96,
        useNativeDriver: true,
        speed: 50,
        bounciness: 4,
      }),
      Animated.timing(shadowElevation, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false,
      }),
    ];
    
    // Solo animar gradiente si no está permanentemente seleccionado
    if (!isSelected) {
      animations.push(
        Animated.timing(gradientOpacity, {
          toValue: 0.7,
          duration: 100,
          useNativeDriver: true,
        })
      );
    }
    
    Animated.parallel(animations).start();
  };

  // Animaciones de salida (press out)
  const animateOut = () => {
    const animations = [
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
        speed: 50,
        bounciness: 4,
      }),
      Animated.timing(shadowElevation, {
        toValue: 2,
        duration: 150,
        useNativeDriver: false,
      }),
    ];
    
    // Volver al estado original si no está permanentemente seleccionado
    if (!isSelected) {
      animations.push(
        Animated.timing(gradientOpacity, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        })
      );
    }
    
    Animated.parallel(animations).start();
  };

  // Función para manejar el press
  const handlePress = () => {
    if (disabled || !onPress) return;
    
    // Feedback háptico más fuerte al confirmar la acción
    if (Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    }
    
    onPress();
  };

  // Contenido interno del componente (con o sin emoji)
  const ItemContent = () => (
    <View style={styles.contentContainer}>
      <Text 
        style={[
          styles.textMain, 
          styles.textTypo, 
          { fontSize: textSize },
          !emoji && styles.textFullWidth,
          disabled && styles.textDisabled,
        ]}
      >
        {text}
      </Text>
      
      {emoji && (
        <View style={styles.emojiContainer}>
          <UniversalEmoji 
            emoji={emoji} 
            size={emojiSize} 
            isFlag={/[\u{1F1E0}-\u{1F1FF}]/gu.test(emoji)}
          />
        </View>
      )}
    </View>
  );
  
  // Determinar colores según variante
  const getBackgroundColor = () => {
    if (disabled) return '#0A4A5E';
    switch (variant) {
      case 'gradient':
        return 'transparent';
      case 'secondary':
        return '#018B9F';
      case 'primary':
      default:
        return '#10668A';
    }
  };
  
  // Crear estilos del contenedor con dimensiones dinámicas
  const containerStyle: ViewStyle = {
    ...styles.item,
    height: height,
    width: width as any,
    backgroundColor: getBackgroundColor(),
    ...(style || {}),
  };

  // Estilo animado para la sombra
  const animatedShadowStyle = {
    shadowOpacity: shadowElevation.interpolate({
      inputRange: [0, 2],
      outputRange: [0, 0.15],
    }),
    elevation: shadowElevation,
  };

  return (
    <Animated.View 
      style={[
        containerStyle, 
        animatedShadowStyle,
        { transform: [{ scale }] }
      ]}
    >
      {/* Capa de gradiente animada */}
      <Animated.View 
        style={[
          StyleSheet.absoluteFill,
          { opacity: gradientOpacity }
        ]}
        pointerEvents="none"
      >
        <LinearGradient
          style={StyleSheet.absoluteFill}
          locations={[0, 1]}
          colors={["#19A4DF", "rgba(25, 164, 223, 0)"]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
        />
      </Animated.View>
      
      {/* Botón presionable */}
      <Pressable
        style={styles.pressable}
        android_ripple={{ color: 'rgba(255,255,255,0.15)', borderless: false }}
        onPress={handlePress}
        onPressIn={animateIn}
        onPressOut={animateOut}
        disabled={disabled}
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel || text}
        accessibilityHint={accessibilityHint}
        accessibilityState={{
          disabled: disabled,
          selected: isSelected,
        }}
      >
        <ItemContent />
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  item: {
    borderRadius: Border.br_10,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 340,
    // Sombra base
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_10,
    gap: Gap.gap_30,
    width: "100%",
    height: "100%",
  },
  textMain: {
    flex: 1,
    fontSize: FontSize.size_24,
    textAlign: "center",
  },
  textFullWidth: {
    width: "100%",
  },
  textDisabled: {
    opacity: 0.5,
  },
  emojiContainer: {
    minHeight: 60,
    minWidth: 60,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  pressable: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Item;
