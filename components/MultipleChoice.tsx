import React, { useState, useMemo } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import Opcion from "./Opcion";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type MultipleChoiceType = {
  opcionCheck3?: "None" | "Clicked" | "Bad" | "Good";
  opcionText3?: string;
  opcionEllipse53?: ImageSourcePropType;

  /** Variant props */
  cantidad?: 2 | 4;

  /** Style props */
  multipleChoiceAlignSelf?: string;
  multipleChoiceWidth?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const MultipleChoice = ({
  cantidad = 2,
  multipleChoiceAlignSelf,
  multipleChoiceWidth,
  opcionCheck3 = "None",
  opcionText3,
  opcionEllipse53,
}: MultipleChoiceType) => {
  const multipleChoiceStyle = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", multipleChoiceAlignSelf),
      ...getStyleValue("width", multipleChoiceWidth),
    };
  }, [multipleChoiceAlignSelf, multipleChoiceWidth]);

  const [opcionItems] = useState([
    { check: "Clicked" as const, text: "Pasto" },
    { check: "None" as const, text: "Arbusto" },
    { check: "None" as const, text: "Arbol" },
    { check: "None" as const, text: "Ninguna" },
  ]);

  return (
    <ScrollView
      style={[styles.multiplechoice, multipleChoiceStyle]}
      contentContainerStyle={styles.multipleChoiceContainerContent}
    >
      <Text style={styles.quePlantaEs}>1) Que planta es?</Text>
      {opcionItems.map((item, index) => (
        <Opcion key={index} check={item.check} text={item.text} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  multipleChoiceContainerContent: {
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 18,
  },
  multiplechoice: {
    alignSelf: "stretch",
    flex: 1,
    maxWidth: "100%",
  },
  quePlantaEs: {
    width: 359,
    height: 49,
    fontSize: FontSize.size_40,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorWhite,
    textAlign: "left",
  },
});

export default MultipleChoice;
