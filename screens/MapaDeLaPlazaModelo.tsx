import * as React from "react";
import { ScrollView, Text, StyleSheet, Pressable, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import TopBar from "../components/TopBar";
import ModeloIcon from "../components/ModeloIcon";
import NavBar from "../components/NavBar";
import Klipartz from "../assets/Klipartz.svg";
import {
  Color,
  FontSize,
  Padding,
  Gap,
  FontFamily,
  Border,
} from "../GlobalStyles";

const MapaDeLaPlazaModelo = () => {
  return (
    <ScrollView
      style={styles.mapaDeLaPlazaModelo}
      contentContainerStyle={styles.mapaDeLaPlazaModeloContent}
    >
      <TopBar text="San Martin" textoWidth={131} />
      <View style={[styles.list, styles.listFlexBox]}>
        <Text style={[styles.plazaSanMartin, styles.mapaTypo]}>
          Plaza San Martin
        </Text>
        <ModeloIcon />
        <LinearGradient
          style={styles.doblebutton}
          locations={[0, 1]}
          colors={["rgba(25, 164, 223, 0)", "#19a4df"]}
        >
          <Pressable style={[styles.pressable, styles.listFlexBox]}>
            <Text style={[styles.mapa, styles.mapaTypo]}>Mapa</Text>
            <View style={styles.divisor} />
            <Text style={[styles.mapa, styles.mapaTypo]}>Modelo</Text>
          </Pressable>
        </LinearGradient>
      </View>
      <NavBar klipartz={<Klipartz width={55} height={55} />} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mapaDeLaPlazaModeloContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 917,
  },
  listFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  mapaTypo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontSize: FontSize.size_32,
  },
  mapaDeLaPlazaModelo: {
    backgroundColor: Color.colorGray200,
    maxWidth: "100%",
    flex: 1,
    width: "100%",
  },
  list: {
    overflow: "hidden",
    paddingHorizontal: Padding.p_36,
    paddingTop: 45,
    paddingBottom: 93,
    gap: Gap.gap_19,
    alignSelf: "stretch",
    flex: 1,
  },
  plazaSanMartin: {
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    alignSelf: "stretch",
  },
  doblebutton: {
    width: 344,
    height: 80,
  },
  pressable: {
    borderRadius: Border.br_40,
    backgroundColor: "transparent",
    height: "100%",
    flexDirection: "row",
    padding: Padding.p_10,
    gap: Gap.gap_10,
    width: "100%",
  },
  mapa: {
    height: 40,
    width: 153,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  divisor: {
    width: 4,
    backgroundColor: Color.colorBlack,
    height: 70,
  },
});

export default MapaDeLaPlazaModelo;