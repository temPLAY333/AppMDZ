import React, { useMemo } from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import {
  Color,
  FontFamily,
  Border,
  Padding,
  Gap,
  FontSize,
} from "../GlobalStyles";

export type ItemType = {
  text?: string;
  bandera?: string;

  /** Variant props */
  clicked?: string;

  /** Style props */
  plazaHeight?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Item = ({
  clicked = "Visual",
  text = "Plaza Chile",
  bandera = "🇨🇱",
  plazaHeight,
}: ItemType) => {
  const plazaStyle = useMemo(() => {
    return {
      ...getStyleValue("height", plazaHeight),
    };
  }, [plazaHeight]);

  return (
    <Pressable style={styles.item}>
      <Text style={[styles.plaza, styles.textTypo, plazaStyle]}>{text}</Text>
      <Text style={[styles.text, styles.textTypo]}>{bandera}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  item: {
    width: 340,
    borderRadius: Border.br_10,
    backgroundColor: Color.colorSteelblue,
    height: 80,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_10,
    gap: Gap.gap_30,
  },
  plaza: {
    height: 29,
    width: 223,
    fontSize: FontSize.size_24,
    textAlign: "center",
  },
  text: {
    height: 64,
    width: 69,
    fontSize: FontSize.size_64,
    textAlign: "left",
  },
});

export default Item;
