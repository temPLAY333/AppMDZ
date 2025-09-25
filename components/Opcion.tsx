import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import Ellipse5 from "../assets/Ellipse-5.svg";
import { Padding, FontSize, FontFamily, Color } from "../GlobalStyles";

export type OpcionType = {
  text?: string;

  /** Variant props */
  check?: "NotSelected" | "Clicked" | "Bad" | "Good";
};

const getOpcinText1Style = (styleKey: string) => {
  switch (styleKey) {
    case "Clicked":
      return {
        width: 92,
      };
    case "Good":
      return {
        width: 167,
      };
    case "Bad":
      return {
        width: 139,
      };
  }
};
const Opcion = ({ check = "NotSelected", text = "Arbusto" }: OpcionType) => {
  const variantKey = `${check}`;

  return (
    <View style={styles.root}>
      <Ellipse5 style={styles.opcionChild} width={60} height={60} />
      <Text style={[styles.opcin, getOpcinText1Style(variantKey)]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_22,
    paddingVertical: Padding.p_10,
    gap: 17,
  },
  opcionChild: {
    width: 60,
    height: 60,
  },
  opcin: {
    height: 39,
    width: 131,
    fontSize: FontSize.size_32,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorWhite,
    textAlign: "left",
  },
});

export default Opcion;
