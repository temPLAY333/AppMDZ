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
  // Ajuste vertical para el emoji
  // Si necesitas subirlo: usa valores negativos (ej: -2, -5)
  // Si necesitas bajarlo: usa valores positivos (ej: 2, 5)
  const ajusteVertical = 2; // <-- MODIFICA ESTE VALOR para ajustar la posición

  return (
    <View style={styles.emojis}>
      <Text 
        style={[
          styles.text, 
          size ? { 
            fontSize: size,
          } : null,
          { marginTop: ajusteVertical } // Aplicamos el ajuste vertical
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
    height: "100%", // Aseguramos que ocupe todo el alto disponible
  },
  text: {
    fontSize: 72, // Tamaño personalizado mucho más grande que el predefinido
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorWhite,
    textAlign: "center",
    includeFontPadding: false, // Elimina el padding extra que a veces añaden algunos sistemas
    textAlignVertical: 'center', // Centra verticalmente el texto (para Android)
    // No incluimos marginTop aquí para controlarlo desde la variable ajusteVertical
  },
});

export default Emojis;
