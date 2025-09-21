import React, { useState } from "react";
import { ScrollView, Pressable, Text, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import TopBar from "../components/TopBar";
import Item from "../components/Item";
import NavBar from "../components/NavBar";
import {
  Color,
  FontFamily,
  Padding,
  Border,
  Gap,
  FontSize,
} from "../GlobalStyles";

const Home = () => {
  const [itemItems] = useState([
    { clicked: "Visual", text: "Plaza Chile", bandera: "🇨🇱", plazaHeight: 29 },
    { clicked: "Visual", text: "Plaza España", bandera: "🇪🇸", plazaHeight: "" },
    {
      clicked: "Visual",
      text: "Plaza Independencia",
      bandera: "🇦🇷",
      plazaHeight: 58,
    },
    { clicked: "Visual", text: "Plaza Italia", bandera: "🇪🇸", plazaHeight: "" },
  ]);

  return (
    <ScrollView
      style={styles.home}
      contentContainerStyle={styles.homeScrollViewContent}
    >
      <TopBar text="Menu Principal" textoWidth={178} />
      <View style={[styles.list, styles.listFlexBox]}>
        {itemItems.map((item, index) => (
          <Item
            key={index}
            clicked={item.clicked}
            text={item.text}
            bandera={item.bandera}
            plazaHeight={item.plazaHeight}
          />
        ))}
        <LinearGradient
          style={styles.item}
          locations={[0, 1]}
          colors={["rgba(25, 164, 223, 0)", "#19a4df"]}
        >
          <Pressable style={[styles.pressable, styles.listFlexBox]}>
            <Text style={[styles.plaza, styles.textTypo]}>
              Plaza San Martin
            </Text>
            <Text style={[styles.text, styles.textTypo]}>🎖️</Text>
          </Pressable>
        </LinearGradient>
      </View>
      <NavBar />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  homeScrollViewContent: {
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
  textTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  home: {
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
  item: {
    width: 340,
    height: 80,
  },
  pressable: {
    borderRadius: Border.br_5,
    backgroundColor: "transparent",
    height: "100%",
    flexDirection: "row",
    padding: Padding.p_10,
    gap: Gap.gap_30,
    width: "100%",
  },
  plaza: {
    height: 29,
    width: 223,
    fontSize: FontSize.size_24,
    textAlign: "center",
  },
  text: {
    height: 64,
    width: 69,
    fontSize: FontSize.size_64,
    textAlign: "left",
  },
});

export default Home;
