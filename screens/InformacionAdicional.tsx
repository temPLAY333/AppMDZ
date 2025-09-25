import * as React from "react";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import Item from "../components/Item";
import Klipartz from "../assets/Klipartz.svg";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding } from "../GlobalStyles";
import { useLanguage } from "../contexts/LanguageContext";

const InformacionAdicional = () => {
  const navigation = useNavigation<any>();
  const { translate } = useLanguage();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // Navegación a Referencias
  const navigateToReferencias = () => {
    setSelectedOption('referencias');
    navigation.navigate("Referencias");
  };

  // Navegación a Glosario
  const navigateToGlosario = () => {
    setSelectedOption('glosario');
    navigation.navigate("Glosario");
  };
  
  return (
    <ScrollView
      style={styles.informacionAdicional}
      contentContainerStyle={styles.informacionAdicionalScrollViewContent}
    >
      <TopBar translationKey="info.title" textoWidth={260} />
      <View style={styles.list}>
        <Item 
          text={translate("references.title")}
          isSelected={selectedOption === 'referencias'}
          onPress={navigateToReferencias}
          height={80}
          width={340}
          textSize={36}
        />
        
        <Item 
          text={translate("glossary.title")}
          isSelected={selectedOption === 'glosario'}
          onPress={navigateToGlosario}
          height={80}
          width={340}
          textSize={36}
        />
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
    paddingBottom: 105, // Aumentado para compensar la NavBar más alta
    gap: 25,
    flex: 1,
    alignItems: "center",
  },
});

export default InformacionAdicional;