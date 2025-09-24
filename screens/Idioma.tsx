import * as React from "react";
import { ScrollView, Pressable, Text, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import Klipartz from "../assets/Klipartz.svg";
import { Color, Padding, Border, FontSize, FontFamily } from "../GlobalStyles";
import { LanguageContext } from "../contexts/LanguageContext";

type NavigationProp = {
  navigate: (screen: string) => void;
};

const Idioma = () => {
  const navigation = useNavigation<NavigationProp>();
  const { setLanguage } = React.useContext(LanguageContext);
  
  const handleLanguageSelect = (language: 'es' | 'en') => {
    // Cambiar el idioma en el contexto global
    setLanguage(language);
    // Navegar a Home
    navigation.navigate("Home");
  };

  return (
    <ScrollView
      style={styles.idioma}
      contentContainerStyle={styles.idiomaScrollViewContent}
    >
      <TopBar text="Language / Idioma" textoWidth={200} />
      <View style={[styles.list, styles.listFlexBox]}>
        <LinearGradient
          style={styles.idiomavariant3}
          locations={[0, 1]}
          colors={["rgba(25, 164, 223, 0)", "#19a4df"]}
        >
          <Pressable 
            style={[styles.pressable, styles.listFlexBox]}
            onPress={() => handleLanguageSelect("es")}
          >
            <Text style={styles.espaol}>Español</Text>
          </Pressable>
        </LinearGradient>
        
        <LinearGradient
          style={styles.idiomavariant3}
          locations={[0, 1]}
          colors={["rgba(25, 164, 223, 0)", "#19a4df"]}
        >
          <Pressable 
            style={[styles.pressable, styles.listFlexBox]}
            onPress={() => handleLanguageSelect("en")}
          >
            <Text style={styles.espaol}>English</Text>
          </Pressable>
        </LinearGradient>
      </View>
      <NavBar klipartz={<Klipartz width={55} height={55} />} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  idiomaScrollViewContent: {
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
  idioma: {
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
    gap: 40,
    flex: 1,
  },
  idiomavariant3: {
    width: 340,
    height: 80,
    marginVertical: 10,
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

export default Idioma;