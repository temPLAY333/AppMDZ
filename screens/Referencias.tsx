import * as React from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import Klipartz from "../assets/Klipartz.svg";
import { Gap, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Referencias = () => {
  return (
    <ScrollView
      style={styles.referencias}
      contentContainerStyle={styles.referenciasScrollViewContent}
    >
      <TopBar text="Referencia" textoWidth={130} />
      <View style={styles.referencia}>
        <View style={[styles.parent, styles.parentFlexBox]}>
          <Text style={[styles.text, styles.textTypo]}>{`🌲 `}</Text>
          <Text style={styles.separatorElements}>{`: `}</Text>
          <Text style={[styles.naturalizada, styles.usoEconmicoTypo]}>
            Naturalizada
          </Text>
        </View>
        <View style={[styles.parent, styles.parentFlexBox]}>
          <Text style={[styles.referenciasText, styles.textTypo]}>{`🪵 `}</Text>
          <Text style={styles.separatorElements}>{`: `}</Text>
          <Text style={[styles.usoEconmico, styles.usoEconmicoTypo]}>
            Uso Económico
          </Text>
        </View>
        <View style={styles.parentFlexBox}>
          <Text style={[styles.text, styles.textTypo]}>{`💧 `}</Text>
          <Text style={styles.separatorElements}>{`: `}</Text>
          <Text style={[styles.usoEconmico, styles.usoEconmicoTypo]}>
            Resistente a sequía
          </Text>
        </View>
        <View style={[styles.parent, styles.parentFlexBox]}>
          <Text style={[styles.text, styles.textTypo]}>{`🌳 `}</Text>
          <Text style={styles.separatorElements}>{`: `}</Text>
          <Text style={[styles.naturalizada, styles.usoEconmicoTypo]}>
            Exótica
          </Text>
        </View>
        <View style={[styles.parent, styles.parentFlexBox]}>
          <Text style={[styles.text, styles.textTypo]}>{`❄️ `}</Text>
          <Text style={styles.separatorElements}>{`: `}</Text>
          <Text style={[styles.usoEconmico, styles.usoEconmicoTypo]}>
            Resistente al frío
          </Text>
        </View>
        <View style={[styles.parent, styles.parentFlexBox]}>
          <Text style={[styles.text, styles.textTypo]}>{`🌱 `}</Text>
          <Text style={styles.separatorElements}>{`: `}</Text>
          <Text style={[styles.usoEconmico, styles.usoEconmicoTypo]}>
            Resistente a suelo salino
          </Text>
        </View>
      </View>
      <NavBar klipartz={<Klipartz width={55} height={55} />} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  referenciasScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 917,
  },
  parentFlexBox: {
    gap: Gap.gap_10,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  textTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontSize: FontSize.size_64,
    width: 67,
    height: 77,
  },
  usoEconmicoTypo: {
    textAlign: "center",
    width: 289,
    fontSize: FontSize.size_40,
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  referencias: {
    width: "100%",
    backgroundColor: Color.colorGray200,
    maxWidth: "100%",
    flex: 1,
  },
  referencia: {
    justifyContent: "center",
    paddingHorizontal: Padding.p_10,
    paddingVertical: 20,
    gap: 15,
    alignItems: "center",
    overflow: "hidden",
    alignSelf: "stretch",
    flex: 1,
  },
  parent: {
    height: 90,
    flexWrap: "wrap",
    alignContent: "center",
  },
  text: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorWhite,
    fontSize: FontSize.size_64,
    width: 67,
    height: 77,
  },
  separatorElements: {
    width: 15,
    fontSize: FontSize.size_40,
    height: 48,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  naturalizada: {
    height: 48,
    width: 289,
  },
  referenciasText: {
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.colorWhite,
    fontSize: FontSize.size_64,
    width: 67,
    height: 77,
  },
  usoEconmico: {
    height: 96,
  },
});

export default Referencias;