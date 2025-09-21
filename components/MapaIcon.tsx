import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ImageBackground } from "react-native";
import Mark from "./Mark";
import { Padding, Gap } from "../GlobalStyles";

const MapaIcon = () => {
  return (
    <ImageBackground
      style={styles.mapaIcon}
      resizeMode="cover"
      source={require("../assets/PSanMartin-Aerea-Normal1-1.png")}
    >
      <Image
        style={styles.psanmartinAereaNormal11Icon}
        contentFit="cover"
        source={require("../assets/PSanMartin-Aerea-Normal1-1.png")}
      />
      <View style={styles.markParent}>
        <Mark status1="None" number="6" markWidth={35} markHeight={35} />
        <View style={styles.markGroup}>
          <Mark status1="None" number="5" markWidth={35} markHeight={35} />
          <View style={styles.markWrapper}>
            <Mark status1="None" number="4" markWidth={35} markHeight={35} />
          </View>
        </View>
      </View>
      <View style={styles.frameParent}>
        <View style={styles.markContainer}>
          <Mark status1="Pinned" number="1" markWidth={63} markHeight={63} />
        </View>
        <View style={styles.frameView}>
          <Mark status1="None" number="2" markWidth={35} markHeight={35} />
          <Mark status1="None" number="3" markWidth={35} markHeight={35} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mapaIcon: {
    alignSelf: "stretch",
    height: 339,
    overflow: "hidden",
    alignItems: "flex-end",
    paddingLeft: 27,
    paddingTop: Padding.p_10,
    paddingRight: 13,
    paddingBottom: 107,
    gap: 73,
    flexDirection: "row",
  },
  psanmartinAereaNormal11Icon: {
    width: 340,
    height: 340,
    display: "none",
  },
  markParent: {
    marginLeft: -15,
    height: 214,
    zIndex: 2,
    gap: 87,
    width: 114,
  },
  markGroup: {
    height: 92,
    gap: Gap.gap_22,
    width: 114,
  },
  markWrapper: {
    height: 35,
    paddingLeft: 79,
    width: 114,
    flexDirection: "row",
  },
  frameParent: {
    height: 222,
    width: 128,
    zIndex: null,
    paddingLeft: Padding.p_15,
    gap: 38,
  },
  markContainer: {
    width: 113,
    height: 63,
    paddingLeft: 50,
    flexDirection: "row",
  },
  frameView: {
    width: 35,
    height: 121,
    gap: 51,
  },
});

export default MapaIcon;
