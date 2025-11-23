import * as React from "react";
import { useState, useEffect } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import TopBar from "../components/TopBar";
import Item from "../components/Item";
import InfoButton from "../components/InfoButton";
import Klipartz from "../assets/Klipartz.svg";
import { Color, Padding, Gap } from "../GlobalStyles";
import { useRoute } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";
import { plazasPorId } from "../data";
import { useTranslation } from "../localization";
import { useUniversalNavigation, SCREENS } from "../navigation";

/**
 * Genera la clave de traducción para una plaza basada en su ID
 * Convierte "plaza-san-martin" → "plaza.san.martin"
 */
const getPlazaTranslationKey = (plazaId: string): string => {
  return plazaId.replace(/-/g, '.');
};

// Define el tipo para la ruta
type MenuPlazaRouteProp = RouteProp<{
  MenuPlaza: { plazaId: string };
}, 'MenuPlaza'>;

const MenuPlaza = () => {
  const navigation = useUniversalNavigation();
  const route = useRoute<MenuPlazaRouteProp>();
  const { t } = useTranslation();
  
  // Estado para trackear la última opción seleccionada
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  
  // Obtenemos el plazaId de los parámetros de la ruta
  const { plazaId = 'plaza-san-martin' } = route.params || {};
  
  // Obtenemos los datos de la plaza
  const plaza = plazasPorId[plazaId];
  
  // Generar automáticamente la clave de traducción basada en el ID
  const plazaTranslationKey = getPlazaTranslationKey(plazaId);
  
  // Resetear selección cuando la pantalla gana foco (al volver)
  useFocusEffect(
    React.useCallback(() => {
      setSelectedOption(null);
    }, [])
  );

  // Manejadores de navegación
  const handleIniciarRecorrido = () => {
    setSelectedOption('recorrido');
    navigation.navigate(SCREENS.MAPA_PLAZA, { plazaId });
  };

  const handleJugarTrivia = () => {
    setSelectedOption('trivia');
    navigation.navigate(SCREENS.JUEGOS_PREGUNTA, { plazaId });
  };

  return (
    <ScrollView
      style={styles.menuPlaza}
      contentContainerStyle={styles.menuPlazaScrollViewContent}
      accessibilityRole="scrollbar"
      accessibilityLabel={`${t(plazaTranslationKey)} - Menu`}
    >
      <TopBar translationKey={plazaTranslationKey} textoWidth="auto" showBackButton />
      <View 
        style={styles.list}
        accessibilityRole="menu"
        accessibilityLabel={t("start.tour") + " y " + t("play.trivia")}
      >
        <Item 
          text={t("start.tour")}
          emoji="🌱"
          onPress={handleIniciarRecorrido}
          width={340}
          height={80}
          isSelected={selectedOption === 'recorrido'}
          accessibilityLabel={t("start.tour")}
          accessibilityHint="Comienza un recorrido guiado por las plantas de la plaza"
        />
        
        <Item 
          text={t("play.trivia")}
          emoji="🎲"
          onPress={handleJugarTrivia}
          width={340}
          height={80}
          isSelected={selectedOption === 'trivia'}
          accessibilityLabel={t("play.trivia")}
          accessibilityHint="Responde preguntas sobre las plantas de la plaza"
        />
      </View>
      <InfoButton />
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
