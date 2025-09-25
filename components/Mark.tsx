import React, { useMemo } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Border, Color, Padding, FontFamily } from "../GlobalStyles";

export type MarkType = {
  number?: string;

  /** Variant props */
  status1?: "NotSelected" | "Pinned";

  /** Style props */
  markWidth?: number | string;
  markHeight?: number | string;
  
  /** Navigation props */
  plantaId?: string;
};

const getMarkContainerStyle = (styleKey: string) => {
  switch (styleKey) {
    case "Pinned":
      return {
        paddingVertical: 23,
        zIndex: 1,
      };
  }
};
const getText4Style = (styleKey: string) => {
  switch (styleKey) {
    case "Pinned":
      return {
        width: 19,
        height: 39,
        fontSize: FontSize.size_32,
      };
  }
};
const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Mark = ({
  status1 = "NotSelected",
  number = "6",
  markWidth,
  markHeight,
  plantaId,
}: MarkType) => {
  const navigation = useNavigation<any>();
  const variantKey = `${status1}`;

  const markStyle = useMemo(() => {
    return {
      ...getStyleValue("width", markWidth),
      ...getStyleValue("height", markHeight),
    };
  }, [markWidth, markHeight]);
  
  // Función para navegar a la pantalla de detalle de planta
  const handlePress = () => {
    // El ID de la planta será el número del marcador si no se proporciona plantaId
    const idPlanta = plantaId || number;
    navigation.navigate("DetallePlanta", { 
      plantaId: idPlanta,
      paradaNumero: number
    });
  };

  return (
    <TouchableOpacity 
      style={[styles.root, getMarkContainerStyle(variantKey), markStyle]}
      onPress={handlePress}
    >
      <Text style={[styles.text, getText4Style(variantKey)]}>{number}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    width: 35,
    borderRadius: Border.br_100,
    backgroundColor: Color.colorYellowgreen,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 3,
    height: 35,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_15,
    paddingVertical: 0,
  },
  text: {
    width: 17,
    height: 24,
    fontSize: FontSize.size_20,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorWhite,
    textAlign: "left",
  },
});

export default Mark;
