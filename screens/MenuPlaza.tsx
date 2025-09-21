import * as React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import TopBar from "../components/TopBar";
import Item from "../components/Item";
import NavBar from "../components/NavBar";
import Klipartz from "../assets/Klipartz.svg";
import { Color, Padding, Gap } from "../GlobalStyles";

const MenuPlaza = () => {
  return (
    <ScrollView
      style={styles.menuPlaza}
      contentContainerStyle={styles.menuPlazaScrollViewContent}
    >
      <TopBar text="San Martin" textoWidth={131} />
      <View style={styles.list}>
        <Item
          clicked="Visual"
          text="Iniciar Recorrido"
          bandera="🌱"
          plazaHeight={29}
        />
        <Item
          clicked="Visual"
          text="Jugar Trivia"
          bandera="🎲"
          plazaHeight={29}
        />
      </View>
      <NavBar klipartz={<Klipartz width={55} height={55} />} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  menuPlazaScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 917,
  },
  menuPlaza: {
    width: "100%",
    backgroundColor: Color.colorGray200,
    maxWidth: "100%",
    flex: 1,
  },
  list: {
    alignSelf: "stretch",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_36,
    paddingTop: 45,
    paddingBottom: 93,
    gap: Gap.gap_22,
    flex: 1,
  },
});

export default MenuPlaza;