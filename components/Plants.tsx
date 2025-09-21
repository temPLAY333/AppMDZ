import React, { useState } from "react";
import { TextInput, StyleSheet, View, Text } from "react-native";
import Emojis from "./Emojis";
import { FontFamily, Gap, FontSize, Padding, Color } from "../GlobalStyles";

export type PlantsType = {
  descripcion?: string;
  emojisProperty13?: string;
  emojisProperty11?: string;
};

const Plants = ({
  descripcion = "Se encuentra en las plazas  Independencia, Chile y España.  Es un árbol que llega a medir 6-12 m de altura. Hojas alternas bipinnadas. Flores amarillas pequeñas agrupadas en cabezuelas. Su fruto es una vaina glabra, delgada, de color castaño, dehiscente (se abre al madurar). Perteneciente a la familia Fabáceas",
  emojisProperty13,
  emojisProperty11,
}: PlantsType) => {
  const [emojisItems] = useState([
    { property1: "Natural" },
    { property1: "Natural" },
    { property1: "Natural" },
    { property1: "Natural" },
  ]);

  return (
    <View style={[styles.plants, styles.plantsFlexBox]}>
      <TextInput
        style={[styles.abeliaSp, styles.abeliaSpTypo]}
        placeholder="Arbusto Nativo"
        placeholderTextColor="#fff"
      />
      <View style={[styles.referencia, styles.plantsFlexBox]}>
        {emojisItems.map((item, index) => (
          <Emojis key={index} property1={item.property1} />
        ))}
      </View>
      <Text style={[styles.descripcion, styles.abeliaSpTypo]}>
        {descripcion}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  plantsFlexBox: {
    overflow: "hidden",
    alignSelf: "stretch",
  },
  abeliaSpTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  plants: {
    height: 921,
    gap: Gap.gap_10,
  },
  abeliaSp: {
    width: 357,
    height: 58,
    fontSize: FontSize.size_48,
  },
  referencia: {
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_18,
    gap: 27,
  },
  descripcion: {
    fontSize: FontSize.size_24,
    color: Color.colorWhite,
    textAlign: "left",
    alignSelf: "stretch",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
});

export default Plants;