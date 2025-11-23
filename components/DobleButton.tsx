import React, { useRef } from "react";
import { Pressable, Text, StyleSheet, View, Animated, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Haptics from "expo-haptics";
import {
  Color,
  FontFamily,
  FontSize,
  Padding,
  Border,
  Gap,
} from "../GlobalStyles";

export enum DobleBtnSeleccionado {
  Ninguno = 'ninguno',
  Izquierdo = 'izquierdo',
  Derecho = 'derecho'
}

type DobleButtonProps = {
  textoIzquierdo: string;
  textoDerecho: string;
  seleccionado: DobleBtnSeleccionado;
  onIzquierdoPress: () => void;
  onDerechoPress: () => void;
  width?: number;
  height?: number;
  accessibilityLabelLeft?: string;
  accessibilityLabelRight?: string;
  accessibilityHintLeft?: string;
  accessibilityHintRight?: string;
};

const DobleButton = ({
  textoIzquierdo,
  textoDerecho,
  seleccionado,
  onIzquierdoPress,
  onDerechoPress,
  width = 344,
  height = 80,
  accessibilityLabelLeft,
  accessibilityLabelRight,
  accessibilityHintLeft,
  accessibilityHintRight,
}: DobleButtonProps) => {
  const scaleLeft = useRef(new Animated.Value(1)).current;
  const scaleRight = useRef(new Animated.Value(1)).current;
  // Determinar el gradiente para cada botón según el estado de selección
  const getGradientIzquierdo = () => {
    if (seleccionado === DobleBtnSeleccionado.Izquierdo) {
      return ["#19a4df", "#19a4df"] as const; // Gradiente sólido cuando está seleccionado
    } else {
      return ["rgba(25, 164, 223, 0)", "rgba(25, 164, 223, 0)"] as const; // Transparente cuando no está seleccionado
    }
  };

  const getGradientDerecho = () => {
    if (seleccionado === DobleBtnSeleccionado.Derecho) {
      return ["#19a4df", "#19a4df"] as const; // Gradiente sólido cuando está seleccionado
    } else {
      return ["rgba(25, 164, 223, 0)", "rgba(25, 164, 223, 0)"] as const; // Transparente cuando no está seleccionado
    }
  };
  
  const animateInLeft = () => {
    if (Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    Animated.spring(scaleLeft, {
      toValue: 0.95,
      useNativeDriver: true,
      speed: 50,
      bounciness: 4,
    }).start();
  };
  
  const animateOutLeft = () => {
    Animated.spring(scaleLeft, {
      toValue: 1,
      useNativeDriver: true,
      speed: 50,
      bounciness: 4,
    }).start();
  };
  
  const animateInRight = () => {
    if (Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    Animated.spring(scaleRight, {
      toValue: 0.95,
      useNativeDriver: true,
      speed: 50,
      bounciness: 4,
    }).start();
  };
  
  const animateOutRight = () => {
    Animated.spring(scaleRight, {
      toValue: 1,
      useNativeDriver: true,
      speed: 50,
      bounciness: 4,
    }).start();
  };
  
  const handleLeftPress = () => {
    if (Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    }
    onIzquierdoPress();
  };
  
  const handleRightPress = () => {
    if (Platform.OS !== 'web') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    }
    onDerechoPress();
  };
  
  return (
    <LinearGradient
      style={[styles.dobleButton, { width, height }]}
      locations={[0, 1]}
      colors={seleccionado === DobleBtnSeleccionado.Ninguno ? 
        ["rgba(25, 164, 223, 0)", "#19a4df"] as const : // Gradiente normal solo cuando ningún botón está seleccionado
        ["rgba(25, 164, 223, 0.3)", "rgba(25, 164, 223, 0.3)"] as const} // Fondo semi-transparente cuando hay un botón seleccionado
    >
      <View style={[styles.contenedor, { height: "100%" }]}>
        {/* Botón Izquierdo */}
        <Animated.View style={{ transform: [{ scale: scaleLeft }] }}>
          <Pressable 
            style={[styles.boton, { width: width / 2 - 10 }]} 
            onPress={handleLeftPress}
            onPressIn={animateInLeft}
            onPressOut={animateOutLeft}
            accessibilityRole="button"
            accessibilityLabel={accessibilityLabelLeft || textoIzquierdo}
            accessibilityHint={accessibilityHintLeft}
            accessibilityState={{
              selected: seleccionado === DobleBtnSeleccionado.Izquierdo,
            }}
          >
            <LinearGradient
              style={styles.botonGradient}
              locations={[0, 1]}
              colors={getGradientIzquierdo()}
            >
              <Text style={styles.textoBoton}>{textoIzquierdo}</Text>
            </LinearGradient>
          </Pressable>
        </Animated.View>

        {/* Divisor */}
        <View style={styles.divisor} />

        {/* Botón Derecho */}
        <Animated.View style={{ transform: [{ scale: scaleRight }] }}>
          <Pressable 
            style={[styles.boton, { width: width / 2 - 10 }]} 
            onPress={handleRightPress}
            onPressIn={animateInRight}
            onPressOut={animateOutRight}
            accessibilityRole="button"
            accessibilityLabel={accessibilityLabelRight || textoDerecho}
            accessibilityHint={accessibilityHintRight}
            accessibilityState={{
              selected: seleccionado === DobleBtnSeleccionado.Derecho,
            }}
          >
            <LinearGradient
              style={styles.botonGradient}
              locations={[0, 1]}
              colors={getGradientDerecho()}
            >
              <Text style={styles.textoBoton}>{textoDerecho}</Text>
            </LinearGradient>
          </Pressable>
        </Animated.View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  dobleButton: {
    borderRadius: Border.br_40,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  contenedor: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_10,
  },
  boton: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  botonGradient: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_10,
  },
  textoBoton: {
    textAlign: "center",
    color: Color.colorWhite,
    fontSize: FontSize.size_32,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
  },
  divisor: {
    width: 4,
    backgroundColor: Color.colorBlack,
    height: "100%",
    marginHorizontal: 8,
  },
});

export default DobleButton;