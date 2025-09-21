import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import Klipartz from "../assets/Klipartz.svg";
import Ellipse6 from "../assets/Ellipse-6.svg";
import { Color, Gap, Border } from "../GlobalStyles";

const NavBar = () => {
  return (
    <View style={styles.navbar}>
      <Klipartz
        style={[styles.klipartzIcon, styles.iconLayout]}
        width={55}
        height={55}
      />
      <Ellipse6 style={styles.navbarChild} width={50} height={50} />
      <Image
        style={styles.iconLayout}
        contentFit="cover"
        source={require("../assets/klipartz-com-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 55,
    width: 55,
  },
  navbar: {
    width: 412,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    shadowColor: Color.colorGray300,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    backgroundColor: Color.colorGray100,
    height: 60,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: Gap.gap_60,
  },
  klipartzIcon: {
    borderRadius: Border.br_3,
  },
  navbarChild: {
    width: 50,
    height: 50,
  },
});

export default NavBar;
