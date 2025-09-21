import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, Border, Color, Padding, FontFamily } from "../GlobalStyles";

export type MarkType = {
  number?: string;

  /** Variant props */
  status1?: "None" | "Pinned";

  /** Style props */
  markWidth?: number | string;
  markHeight?: number | string;
};

const getMarkContainerStyle = (styleKey: string) => {
  switch (styleKey) {
    case "Pinned":
      return {
        paddingVertical: 23,
        zIndex: 1,
      };
  }
};
const getText4Style = (styleKey: string) => {
  switch (styleKey) {
    case "Pinned":
      return {
        width: 19,
        height: 39,
        fontSize: FontSize.size_32,
      };
  }
};
const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Mark = ({
  status1 = "None",
  number = "6",
  markWidth,
  markHeight,
}: MarkType) => {
  const variantKey = `${status1}`;

  const markStyle = useMemo(() => {
    return {
      ...getStyleValue("width", markWidth),
      ...getStyleValue("height", markHeight),
    };
  }, [markWidth, markHeight]);

  return (
    <View style={[styles.root, getMarkContainerStyle(variantKey), markStyle]}>
      <Text style={[styles.text, getText4Style(variantKey)]}>{number}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: 35,
    borderRadius: Border.br_100,
    backgroundColor: Color.colorYellowgreen,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 3,
    height: 35,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_15,
    paddingVertical: 0,
  },
  text: {
    width: 17,
    height: 24,
    fontSize: FontSize.size_20,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorWhite,
    textAlign: "left",
  },
});

export default Mark;
