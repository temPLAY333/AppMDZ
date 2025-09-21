import * as React from "react";
import { ScrollView, Pressable, Text, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import TopBar from "../components/TopBar";
import Variant1 from "../components/Variant1";
import NavBar from "../components/NavBar";
import Klipartz from "../assets/Klipartz.svg";
import { Color, Padding, Border, FontSize, FontFamily } from "../GlobalStyles";

const InformacionAdicional = () => {
  return (
    <ScrollView
      style={styles.informacionAdicional}
      contentContainerStyle={styles.informacionAdicionalScrollViewContent}
    >
      <TopBar text="Informacion Adicional" textoWidth={260} />
      <View style={[styles.list, styles.listFlexBox]}>
        <LinearGradient
          style={styles.idiomavariant3}
          locations={[0, 1]}
          colors={["rgba(25, 164, 223, 0)", "#19a4df"]}
        >
          <Pressable style={[styles.pressable, styles.listFlexBox]}>
            <Text style={styles.espaol}>Referencia</Text>
          </Pressable>
        </LinearGradient>
        <Variant1 />
      </View>
      <NavBar klipartz={<Klipartz width={55} height={55} />} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  informacionAdicionalScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 917,
  },
  listFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  informacionAdicional: {
    backgroundColor: Color.colorGray200,
    maxWidth: "100%",
    flex: 1,
    width: "100%",
  },
  list: {
    alignSelf: "stretch",
    paddingHorizontal: Padding.p_36,
    paddingTop: 45,
    paddingBottom: 93,
    gap: 25,
    flex: 1,
  },
  idiomavariant3: {
    width: 340,
    height: 80,
  },
  pressable: {
    borderRadius: Border.br_5,
    backgroundColor: "transparent",
    height: "100%",
    flexDirection: "row",
    padding: Padding.p_10,
    width: "100%",
  },
  espaol: {
    height: 44,
    width: 223,
    fontSize: FontSize.size_36,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorWhite,
    textAlign: "center",
  },
});

export default InformacionAdicional;