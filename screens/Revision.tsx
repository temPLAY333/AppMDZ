import * as React from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "../components/TopBar";
import MultipleChoice from "../components/MultipleChoice";
import Opcion from "../components/Opcion";
import NavBar from "../components/NavBar";
import Klipartz from "../assets/Klipartz.svg";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Revision = () => {
  return (
    <SafeAreaView style={styles.viewBg}>
      <View style={[styles.view, styles.viewBg]}>
        <TopBar text="Respuestas" textoWidth={142} />
        <ScrollView
          style={styles.respuestas}
          contentContainerStyle={styles.respuestasContainerContent}
        >
          <MultipleChoice
            cantidad={4}
            multipleChoiceAlignSelf="unset"
            multipleChoiceWidth={412}
            opcionCheck3="None"
            opcionText3="Opción 4"
            opcionEllipse53={require("../assets/Ellipse-5.svg")}
          />
          <ScrollView
            style={styles.multiplechoice}
            contentContainerStyle={styles.multipleChoiceContainerContent}
          >
            <Text style={styles.quePlantaEs}>2) Que planta es?</Text>
            <Opcion check="Good" text="Verdadero" />
            <Opcion check="None" text="Falso" />
          </ScrollView>
          <ScrollView
            style={styles.multiplechoice}
            contentContainerStyle={styles.multipleChoiceContainer1Content}
          >
            <Text style={styles.quePlantaEs}>2) Que planta es?</Text>
            <Opcion check="Good" text="Verdadero" />
            <Opcion check="None" text="Falso" />
          </ScrollView>
        </ScrollView>
        <NavBar klipartz={<Klipartz width={55} height={55} />} />
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
    height: 309,
  },
  multipleChoiceContainer1Content: {
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 16,
    height: 309,
  },
  respuestasContainerContent: {
    flexDirection: "column",
    paddingHorizontal: 15,
    paddingVertical: 0,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  revision: {
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
  respuestas: {
    alignSelf: "stretch",
    maxWidth: "100%",
    flex: 1,
  },
  multiplechoice: {
    width: 412,
    maxWidth: 412,
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

export default Revision;
