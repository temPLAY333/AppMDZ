import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type EmojisType = {
  /** Variant props */
  property1?: string;
};

const Emojis = ({ property1 = "Natural" }: EmojisType) => {
  return (
    <View style={styles.emojis}>
      <Text style={styles.text}>{`🌲 `}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  emojis: {
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    alignContent: "center",
  },
  text: {
    height: 77,
    width: 67,
    fontSize: FontSize.size_64,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorWhite,
    textAlign: "left",
  },
});

export default Emojis;
