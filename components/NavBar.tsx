import React, { useMemo } from "react";
import { View, StyleSheet, ImageSourcePropType, Pressable } from "react-native";
import { Image } from "expo-image";
import Klipartz from "../assets/Klipartz.svg";
import Ellipse6 from "../assets/Ellipse-6.svg";
import { Color, Gap, Border } from "../GlobalStyles";
import { useNavigation, CommonActions } from "@react-navigation/native";

export type NavBarType = {
  klipartz?: React.ReactNode;

  /** Style props */
  navBarElevation?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const NavBar = ({ navBarElevation, klipartz }: NavBarType) => {
  const navigation = useNavigation<any>();
  
  const navBarStyle = useMemo(() => {
    return {
      ...getStyleValue("elevation", navBarElevation),
    };
  }, [navBarElevation]);

  // Navegación de retorno (atrás)
  const handleGoBack = () => {
    navigation.goBack();
  };
  
  // Navegación al Home
  const navigateToHome = () => {
    navigation.navigate("Home");
  };
  
  // Navegación a Información Adicional
  const navigateToInformacionAdicional = () => {
    navigation.navigate("InformacionAdicional");
  };

  return (
    <View style={[styles.navbar, navBarStyle]}>
      <Pressable onPress={handleGoBack}>
        <Klipartz
          style={[styles.klipartzIcon, styles.iconLayout]}
          width={60}
          height={60}
        />
      </Pressable>
      
      <Pressable onPress={navigateToHome}>
        <Ellipse6 style={styles.navbarChild} width={55} height={55} />
      </Pressable>
      
      <Pressable onPress={navigateToInformacionAdicional}>
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/SignoPregunta.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 60,
    width: 60,
  },
  navbar: {
    width: '100%', // Ancho flexible
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
    height: 85, // Alto aumentado a 85px
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly", // Distribuir el espacio uniformemente
    paddingHorizontal: 20, // Padding horizontal para evitar que se peguen a los bordes
    paddingVertical: 10, // Añadido padding vertical para mejorar espaciado
  },
  klipartzIcon: {
    borderRadius: Border.br_3,
  },
  navbarChild: {
    width: 55,
    height: 55,
  },
});

export default NavBar;