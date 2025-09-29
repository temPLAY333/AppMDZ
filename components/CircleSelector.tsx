import React from "react";
import { Pressable, StyleSheet, ViewStyle } from "react-native";
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
};

const CircleSelector: React.FC<CircleSelectorProps> = ({
  state,
  onPress,
  disabled = false,
  size = 40,
  style
}) => {
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

  return (
    <Pressable
      style={[
        styles.container,
        { width: size, height: size },
        disabled && styles.disabled,
        style
      ]}
      onPress={disabled ? undefined : onPress}
      disabled={disabled}
    >
      {renderIcon()}
    </Pressable>
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