import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ImageBackground } from "react-native";
import Mark from "./Mark";
import { Border, Padding } from "../GlobalStyles";

const ModeloIcon = () => {
  return (
    <ImageBackground
      style={[styles.modeloIcon, styles.modeloIconLayout]}
      resizeMode="cover"
      source={require("../assets/Modelo-PSanMartin-1.png")}
    >
      <Image
        style={[styles.modeloPsanmartin1Icon, styles.modeloIconLayout]}
        contentFit="cover"
        source={require("../assets/Modelo-PSanMartin-1.png")}
      />
      <View style={styles.markerContainerOneParent}>
        <View style={styles.markerContainerOne}>
          <Mark status1="None" number="6" />
        </View>
        <Mark status1="Pinned" number="1" markWidth={63} markHeight={63} />
      </View>
      <View style={styles.markerContainerThreeParent}>
        <View style={styles.markerContainerThree}>
          <Mark status1="None" number="5" markWidth={35} markHeight={35} />
        </View>
        <View style={styles.markerContainerFour}>
          <Mark status1="None" number="4" markWidth={35} markHeight={35} />
        </View>
        <View style={styles.markParent}>
          <Mark status1="None" number="2" markWidth={35} markHeight={35} />
          <Mark status1="None" number="3" markWidth={35} markHeight={35} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  modeloIconLayout: {
    height: 339,
    borderRadius: Border.br_4,
    width: 340,
  },
  modeloIcon: {
    overflow: "hidden",
    paddingHorizontal: Padding.p_12,
    paddingTop: Padding.p_10,
    paddingBottom: 107,
    gap: 38,
  },
  modeloPsanmartin1Icon: {
    display: "none",
  },
  markerContainerOneParent: {
    width: 315,
    height: 63,
    zIndex: 1,
    gap: 217,
    flexDirection: "row",
  },
  markerContainerOne: {
    height: 43,
    paddingTop: Padding.p_8,
    width: 35,
  },
  markerContainerThreeParent: {
    width: 222,
    zIndex: null,
    alignItems: "flex-end",
    gap: 44,
    height: 121,
    flexDirection: "row",
  },
  markerContainerThree: {
    height: 92,
    justifyContent: "flex-end",
    paddingBottom: 57,
    width: 35,
  },
  markerContainerFour: {
    width: 64,
    height: 35,
    paddingRight: 29,
  },
  markParent: {
    gap: 51,
    height: 121,
    width: 35,
  },
});

export default ModeloIcon;
