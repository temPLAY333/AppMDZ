import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, Padding, FontSize, FontFamily } from "../GlobalStyles";

export type TopBarType = {
  text?: string;
};

const TopBar = ({ text = "Parada N°1" }: TopBarType) => {
  return (
    <View style={styles.topbar}>
      <Text style={styles.texto}>{text}</Text>
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
