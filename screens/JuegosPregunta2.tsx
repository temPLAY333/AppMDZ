import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "../components/TopBar";
import Component from "../assets/";
import Opcion from "../components/Opcion";
import NavBar from "../components/NavBar";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const JuegosPregunta2 = () => {
  return (
    <SafeAreaView style={styles.viewBg}>
      <View style={[styles.view, styles.viewBg]}>
        <TopBar text="Pregunta N°2" textoWidth={160} />
        <ImageBackground style={styles.imagenIcon} resizeMode="cover">
          <Image style={styles.image3Icon} contentFit="cover" />
          <Component style={styles.imagenChild} width={171} height={207} />
        </ImageBackground>
        <ScrollView
          style={styles.multiplechoice}
          contentContainerStyle={styles.multipleChoiceContainerContent}
        >
          <Text style={styles.quePlantaEs}>2) Es una planta?</Text>
          <Opcion check="Clicked" text="Verdadero" />
          <Opcion check="None" text="Falso" />
        </ScrollView>
        <NavBar />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  multipleChoiceContainerContent: {
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 16,
  },
  juegosPregunta2: {
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
    justifyContent: "flex-end",
    paddingHorizontal: 47,
    paddingTop: 27,
    paddingBottom: 42,
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
  multiplechoice: {
    alignSelf: "stretch",
    maxWidth: "100%",
    flex: 1,
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

export default JuegosPregunta2;
