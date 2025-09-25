import React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
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
};

const DobleButton = ({
  textoIzquierdo,
  textoDerecho,
  seleccionado,
  onIzquierdoPress,
  onDerechoPress,
  width = 344,
  height = 80,
}: DobleButtonProps) => {
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
        <Pressable 
          style={[styles.boton, { width: width / 2 - 10 }]} 
          onPress={onIzquierdoPress}
        >
          <LinearGradient
            style={styles.botonGradient}
            locations={[0, 1]}
            colors={getGradientIzquierdo()}
          >
            <Text style={styles.textoBoton}>{textoIzquierdo}</Text>
          </LinearGradient>
        </Pressable>

        {/* Divisor */}
        <View style={styles.divisor} />

        {/* Botón Derecho */}
        <Pressable 
          style={[styles.boton, { width: width / 2 - 10 }]} 
          onPress={onDerechoPress}
        >
          <LinearGradient
            style={styles.botonGradient}
            locations={[0, 1]}
            colors={getGradientDerecho()}
          >
            <Text style={styles.textoBoton}>{textoDerecho}</Text>
          </LinearGradient>
        </Pressable>
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