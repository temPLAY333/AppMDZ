import React, { useRef } from "react";
import { Pressable, StyleSheet, ViewStyle, Animated, Platform } from "react-native";
import * as Haptics from "expo-haptics";
import SinMarcarSVG from "../assets/SinMarcar.svg";
import SeleccionadoSVG from "../assets/Seleccionado.svg";
import CorrectoSVG from "../assets/Correcto.svg";
import IncorrectoSVG from "../assets/Incorrecto.svg";

export type CircleSelectorState = "SinMarcar" | "Seleccionado" | "Correcto" | "Incorrecto";

type CircleSelectorProps = {
  state: CircleSelectorState;
  onPress?: () => void;
  disabled?: boolean;
  size?: number;
  style?: ViewStyle;
  accessibilityLabel?: string;
  accessibilityHint?: string;
};

const CircleSelector: React.FC<CircleSelectorProps> = ({
  state,
  onPress,
  disabled = false,
  size = 40,
  style,
  accessibilityLabel,
  accessibilityHint,
}) => {
  const scale = useRef(new Animated.Value(1)).current;
  
  // Función para renderizar el SVG correspondiente según el estado
  const renderIcon = () => {
    try {
      switch (state) {
        case "SinMarcar":
          return <SinMarcarSVG width={size} height={size} />;
        case "Seleccionado":
          return <SeleccionadoSVG width={size} height={size} />;
        case "Correcto":
          return <CorrectoSVG width={size} height={size} />;
        case "Incorrecto":
          return <IncorrectoSVG width={size} height={size} />;
        default:
          return <SinMarcarSVG width={size} height={size} />;
      }
    } catch (error) {
      console.error("Error rendering circle icon:", error);
      return null; // Renderizar nada en caso de error
    }
  };
  
  const animateIn = () => {
    if (Platform.OS !== 'web' && !disabled) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    Animated.spring(scale, {
      toValue: 0.9,
      useNativeDriver: true,
      speed: 50,
      bounciness: 8,
    }).start();
  };
  
  const animateOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 50,
      bounciness: 8,
    }).start();
  };
  
  const handlePress = () => {
    if (disabled || !onPress) return;
    if (Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    }
    onPress();
  };
  
  const getAccessibilityLabel = () => {
    if (accessibilityLabel) return accessibilityLabel;
    switch (state) {
      case "SinMarcar":
        return "No seleccionado";
      case "Seleccionado":
        return "Seleccionado";
      case "Correcto":
        return "Correcto";
      case "Incorrecto":
        return "Incorrecto";
      default:
        return "Selector";
    }
  };

  return (
    <Animated.View style={{ transform: [{ scale }] }}>
      <Pressable
        style={[
          styles.container,
          { width: size, height: size },
          disabled && styles.disabled,
          style
        ]}
        onPress={handlePress}
        onPressIn={animateIn}
        onPressOut={animateOut}
        disabled={disabled}
        accessibilityRole="button"
        accessibilityLabel={getAccessibilityLabel()}
        accessibilityHint={accessibilityHint || "Toca para cambiar la selección"}
        accessibilityState={{
          disabled: disabled,
          selected: state === "Seleccionado",
          checked: state === "Correcto" || state === "Seleccionado",
        }}
      >
        {renderIcon()}
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  disabled: {
    opacity: 0.7
  }
});

export default CircleSelector;