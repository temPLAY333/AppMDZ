import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, Padding, FontSize, FontFamily } from "../GlobalStyles";

export type TopBarType = {
  text?: string;

  /** Style props */
  textoWidth?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TopBar = ({ text = "Parada N°1", textoWidth }: TopBarType) => {
  const textoStyle = useMemo(() => {
    return {
      ...getStyleValue("width", textoWidth),
    };
  }, [textoWidth]);

  return (
    <View style={styles.topbar}>
      <Text style={[styles.texto, textoStyle]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  topbar: {
    width: 412,
    backgroundColor: Color.colorGray100,
    height: 60,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 27,
    paddingVertical: Padding.p_19,
  },
  texto: {
    width: 131,
    height: 29,
    fontSize: FontSize.size_24,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorWhite,
    textAlign: "left",
  },
});

export default TopBar;