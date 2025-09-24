import React, { useState, useEffect } from "react";
import { ScrollView, Pressable, Text, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import Klipartz from "../assets/Klipartz.svg";
import { plazas } from "../data";  // Importamos los datos de plazas
import { useNavigation } from "@react-navigation/native";
import {
  Color,
  FontFamily,
  Padding,
  Border,
  Gap,
  FontSize,
} from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation<any>();
  
  // Definimos el tipo para los items
  type ItemType = {
    id: string;
    clicked: string;
    text: string;
    bandera: string;
    plazaHeight: number | string;
  };

  // Usamos los datos importados con el tipo correcto
  const [itemItems, setItemItems] = useState<ItemType[]>([]);
  
  // Cargamos los datos de las plazas
  useEffect(() => {
    // Filtramos la Plaza San Martín que se renderiza aparte
    const plazaItems = plazas
      .filter(plaza => plaza.id !== 'plaza-san-martin')
      .map(plaza => ({
        id: plaza.id,
        clicked: "Visual",
        text: plaza.nombre,
        bandera: plaza.bandera,
        plazaHeight: plaza.nombre.length > 15 ? 58 : 29,
      }));
    
    setItemItems(plazaItems);
  }, []);
  
  // Buscamos la Plaza San Martín para mostrarla destacada
  const plazaSanMartin = plazas.find(plaza => plaza.id === 'plaza-san-martin');

  // Función para navegar a la plaza seleccionada
  const navigateToPlaza = (plazaId: string) => {
    navigation.navigate("MenuPlaza", { plazaId });
  };

  return (
    <ScrollView
      style={styles.home}
      contentContainerStyle={styles.homeScrollViewContent}
    >
      <TopBar text="Menu Principal" textoWidth={178} />
      <View style={[styles.list, styles.listFlexBox]}>
        {itemItems.map((item, index) => (
          <Pressable
            key={index}
            style={styles.item}
            onPress={() => navigateToPlaza(item.id)}
          >
            <Text style={[styles.plaza, styles.textTypo]}>{item.text}</Text>
            <Text style={[styles.text, styles.textTypo]}>{item.bandera}</Text>
          </Pressable>
        ))}
        <LinearGradient
          style={styles.item}
          locations={[0, 1]}
          colors={["rgba(25, 164, 223, 0)", "#19a4df"]}
        >
          <Pressable 
            style={[styles.pressable, styles.listFlexBox]}
            onPress={() => navigateToPlaza('plaza-san-martin')}
          >
            <Text style={[styles.plaza, styles.textTypo]}>
              {plazaSanMartin?.nombre || "Plaza San Martin"}
            </Text>
            <Text style={[styles.text, styles.textTypo]}>
              {plazaSanMartin?.bandera || "🎖️"}
            </Text>
          </Pressable>
        </LinearGradient>
      </View>
      <NavBar klipartz={<Klipartz width={55} height={55} />} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  homeScrollViewContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    minHeight: 917, // Altura mínima en lugar de fija
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
    paddingHorizontal: '5%', // Padding relativo
    paddingTop: 45,
    paddingBottom: 93,
    gap: 25,
    flex: 1,
  },
  item: {
    width: '100%', // Ancho relativo
    maxWidth: 500, // Máximo ancho para pantallas grandes
    minHeight: 80, // Altura mínima
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
    minHeight: 29,
    flex: 1, // Permite crecer según el contenido
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