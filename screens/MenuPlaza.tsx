import * as React from "react";
import { ScrollView, StyleSheet, View, Pressable, Text } from "react-native";
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import Klipartz from "../assets/Klipartz.svg";
import { Color, Padding, Gap, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useRoute, useNavigation } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";
import { plazasPorId } from "../data";

// Define el tipo para la ruta
type MenuPlazaRouteProp = RouteProp<{
  MenuPlaza: { plazaId: string };
}, 'MenuPlaza'>;

const MenuPlaza = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<MenuPlazaRouteProp>();
  
  // Obtenemos el plazaId de los parámetros de la ruta
  const { plazaId = 'plaza-san-martin' } = route.params || {};
  
  // Obtenemos los datos de la plaza
  const plaza = plazasPorId[plazaId];
  const plazaNombre = plaza?.nombre || "Plaza San Martín";

  // Manejadores de navegación
  const handleIniciarRecorrido = () => {
    navigation.navigate("MapaDeLaPlazaModelo", { plazaId });
  };

  const handleJugarTrivia = () => {
    navigation.navigate("JuegosPregunta1", { plazaId });
  };

  return (
    <ScrollView
      style={styles.menuPlaza}
      contentContainerStyle={styles.menuPlazaScrollViewContent}
    >
      <TopBar text={plazaNombre} textoWidth={131} />
      <View style={styles.list}>
        <Pressable style={styles.item} onPress={handleIniciarRecorrido}>
          <Text style={[styles.plaza, styles.textTypo]}>Iniciar Recorrido</Text>
          <Text style={[styles.text, styles.textTypo]}>🌱</Text>
        </Pressable>
        
        <Pressable style={styles.item} onPress={handleJugarTrivia}>
          <Text style={[styles.plaza, styles.textTypo]}>Jugar Trivia</Text>
          <Text style={[styles.text, styles.textTypo]}>🎲</Text>
        </Pressable>
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
  textTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  item: {
    width: 340,
    borderRadius: Border.br_10,
    backgroundColor: Color.colorSteelblue,
    height: 80,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_10,
    gap: Gap.gap_30,
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

export default MenuPlaza;