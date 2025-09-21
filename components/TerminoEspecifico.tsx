import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, Padding, FontSize } from "../GlobalStyles";

export type TerminoEspecificoType = {
  texto?: string;
  nombre?: string;
};

const TerminoEspecifico = ({
  texto = "Filodio: es una modificación de la hoja, donde el “tallo” de la hoja (llamado pecíolo) se encuentra ensanchado y aplanado para sustituir a la lámina de la hoja en sus funciones.",
  nombre = "Adaptaciones",
}: TerminoEspecificoType) => {
  return (
    <View style={styles.terminoEspecifico}>
      <Text style={[styles.adaptaciones, styles.descripcionTypo]}>
        {nombre}
      </Text>
      <Text style={[styles.descripcion, styles.descripcionTypo]}>{texto}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  descripcionTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  terminoEspecifico: {
    overflow: "hidden",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_10,
    gap: 33,
    alignSelf: "stretch",
  },
  adaptaciones: {
    fontSize: FontSize.size_48,
    textDecorationLine: "underline",
  },
  descripcion: {
    fontSize: FontSize.size_24,
  },
});

export default TerminoEspecifico;
