import * as React from "react";
import { useState } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import Item from "../components/Item";
import Klipartz from "../assets/Klipartz.svg";
import { Color, Padding, Gap } from "../GlobalStyles";
import { useRoute, useNavigation } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";
import { plazasPorId } from "../data";
import { useLanguage } from "../contexts/LanguageContext";

// Define el tipo para la ruta
type MenuPlazaRouteProp = RouteProp<{
  MenuPlaza: { plazaId: string };
}, 'MenuPlaza'>;

const MenuPlaza = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<MenuPlazaRouteProp>();
  const { translate } = useLanguage();
  
  // Estado para trackear la última opción seleccionada
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  
  // Obtenemos el plazaId de los parámetros de la ruta
  const { plazaId = 'plaza-san-martin' } = route.params || {};
  
  // Obtenemos los datos de la plaza
  const plaza = plazasPorId[plazaId];
  const plazaNombre = plaza?.nombre || "Plaza San Martín";

  // Manejadores de navegación
  const handleIniciarRecorrido = () => {
    setSelectedOption('recorrido');
    navigation.navigate("MapaDeLaPlaza", { plazaId });
  };

  const handleJugarTrivia = () => {
    setSelectedOption('trivia');
    navigation.navigate("JuegosPregunta1", { plazaId });
  };

  return (
    <ScrollView
      style={styles.menuPlaza}
      contentContainerStyle={styles.menuPlazaScrollViewContent}
    >
      <TopBar translationKey="plaza.title" textoWidth="auto" />
      <Text style={styles.plazaTitle}>{plazaNombre}</Text>
      <View style={styles.list}>
        <Item 
          text={translate("start.tour")}
          emoji="🌱"
          onPress={handleIniciarRecorrido}
          width={340}
          height={80}
          isSelected={selectedOption === 'recorrido'}
        />
        
        <Item 
          text={translate("play.trivia")}
          emoji="🎲"
          onPress={handleJugarTrivia}
          width={340}
          height={80}
          isSelected={selectedOption === 'trivia'}
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
    paddingBottom: 105, // Aumentado para compensar la NavBar más alta
    gap: Gap.gap_22,
    flex: 1,
  },
  plazaTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: Color.colorWhite,
    textAlign: "center",
    marginVertical: 15,
    width: "100%",
  },
});

export default MenuPlaza;