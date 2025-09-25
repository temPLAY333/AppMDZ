import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type EmojisType = {
  /** Emoji a mostrar */
  emoji?: string;
  /** Tamaño del emoji, si no se especifica usa el tamaño por defecto */
  size?: number;
};

const Emojis = ({ emoji = "🌲", size }: EmojisType) => {
  return (
    <View style={styles.emojis}>
      <Text 
        style={[
          styles.text, 
          size ? { fontSize: size } : null
        ]}
      >
        {emoji}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  emojis: {
    overflow: "visible",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    width: "100%",
    height: "100%", 
  },
  text: {
    fontSize: FontSize.size_64,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorWhite,
    textAlign: "center",
    includeFontPadding: false, // Elimina el padding extra que a veces añaden algunos sistemas
    textAlignVertical: 'center', // Centra verticalmente el texto (para Android)
  },
});

export default Emojis;
