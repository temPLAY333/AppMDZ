import * as React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { Border, Color, Padding, FontSize, FontFamily } from "../GlobalStyles";

const Variant1 = () => {
  return (
    <Pressable style={styles.idiomavariant3}>
      <Text style={styles.english}>Glosario</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  idiomavariant3: {
    width: 340,
    borderRadius: Border.br_10,
    backgroundColor: Color.colorSteelblue,
    height: 80,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_10,
  },
  english: {
    height: 44,
    width: 223,
    fontSize: FontSize.size_36,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorWhite,
    textAlign: "center",
  },
});

export default Variant1;
