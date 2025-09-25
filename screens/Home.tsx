import * as React from "react";
import { useState } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import Item from "../components/Item";
import Klipartz from "../assets/Klipartz.svg";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, Gap, FontSize, FontFamily } from "../GlobalStyles";
import plazas from "../data/plazas";
import { useLanguage } from "../contexts/LanguageContext";

const Home = () => {
  const navigation = useNavigation<any>();
  const { language, translate } = useLanguage();
  const [selectedPlaza, setSelectedPlaza] = useState<string | null>(null);

  // Manejador de navegación a la plaza seleccionada
  const handlePlazaPress = (plazaId: string) => {
    // Actualizamos el estado para mostrar cuál fue la última plaza seleccionada
    setSelectedPlaza(plazaId);
    // Navegamos a la pantalla de menú de la plaza
    navigation.navigate("MenuPlaza", { plazaId });
  };

  return (
    <ScrollView
      style={styles.home}
      contentContainerStyle={styles.homeScrollViewContent}
    >
      <TopBar 
        translationKey="main.menu" 
        textoWidth={200} 
      />
      <View style={styles.list}>
        {/* Plaza San Martín */}
        <Item 
          text={translate("plaza.san.martin")}
          emoji="🎖️"
          onPress={() => handlePlazaPress('plaza-san-martin')}
          width={340}
          height={80}
          isSelected={selectedPlaza === 'plaza-san-martin'}
        />
        
        {/* Plaza Independencia */}
        <Item 
          text={translate("plaza.independencia")}
          emoji="🏛️"
          onPress={() => handlePlazaPress('plaza-independencia')}
          width={340}
          height={80}
          isSelected={selectedPlaza === 'plaza-independencia'}
        />
        
        {/* Plaza España */}
        <Item 
          text={translate("plaza.espana")}
          emoji="🇪🇸"
          onPress={() => handlePlazaPress('plaza-espana')}
          width={340}
          height={80}
          isSelected={selectedPlaza === 'plaza-espana'}
        />
        
        {/* Plaza Italia */}
        <Item 
          text={translate("plaza.italia")}
          emoji="🇮🇹"
          onPress={() => handlePlazaPress('plaza-italia')}
          width={340}
          height={80}
          isSelected={selectedPlaza === 'plaza-italia'}
        />
        
        {/* Plaza Chile */}
        <Item 
          text={translate("plaza.chile")}
          emoji="🇨🇱"
          onPress={() => handlePlazaPress('plaza-chile')}
          width={340}
          height={80}
          isSelected={selectedPlaza === 'plaza-chile'}
        />
      </View>
      <NavBar klipartz={<Klipartz width={55} height={55} />} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  home: {
    width: "100%",
    backgroundColor: Color.colorGray200,
    maxWidth: "100%",
    flex: 1,
  },
  homeScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    minHeight: "100%",
  },
  // Estilos eliminados para el título
  list: {
    alignSelf: "stretch",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_36,
    paddingTop: 20,
    paddingBottom: 105, // Aumentado para compensar la NavBar más alta
    gap: Gap.gap_22,
    flex: 1,
  },
});

export default Home;