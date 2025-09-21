import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageBackground, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "../components/TopBar";
import Ellipse4 from "../assets/Ellipse-4.svg";
import MultipleChoice from "../components/MultipleChoice";
import NavBar from "../components/NavBar";
import Klipartz from "../assets/Klipartz.svg";
import { Color } from "../GlobalStyles";

const JuegosPregunta1 = () => {
  return (
    <SafeAreaView style={styles.viewBg}>
      <View style={[styles.view, styles.viewBg]}>
        <TopBar text="Pregunta N°1" textoWidth={157} />
        <ImageBackground
          style={styles.imagenIcon}
          resizeMode="cover"
          source={require("../assets/image-3.png")}
        >
          <Image
            style={styles.image3Icon}
            contentFit="cover"
            source={require("../assets/image-3.png")}
          />
          <Ellipse4 style={styles.imagenChild} width={171} height={207} />
        </ImageBackground>
        <MultipleChoice
          cantidad={4}
          opcionCheck3="None"
          opcionText3="Ninguna"
          opcionEllipse53={require("../assets/Ellipse-5.svg")}
        />
        <NavBar klipartz={<Klipartz width={55} height={55} />} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  juegosPregunta1: {
    flex: 1,
    backgroundColor: "#05181f",
  },
  viewBg: {
    backgroundColor: Color.colorGray200,
    flex: 1,
  },
  view: {
    width: "100%",
    height: 917,
    overflow: "hidden",
  },
  imagenIcon: {
    width: 412,
    flexDirection: "row",
    paddingHorizontal: 45,
    paddingBottom: 69,
    height: 276,
  },
  image3Icon: {
    width: 414,
    display: "none",
    height: 276,
  },
  imagenChild: {
    width: 171,
    height: 207,
    zIndex: 1,
  },
});

export default JuegosPregunta1;
