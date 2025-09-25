import * as React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TopBar from "../components/TopBar";
import Item from "../components/Item";
import { Color, Padding } from "../GlobalStyles";
import { LanguageContext } from "../contexts/LanguageContext";

type NavigationProp = {
  navigate: (screen: string) => void;
};

const Idioma = () => {
  const navigation = useNavigation<NavigationProp>();
  const { setLanguage, language } = React.useContext(LanguageContext);
  const [selectedLanguage, setSelectedLanguage] = React.useState<'es' | 'en' | null>(null);
  
  // Inicializar el idioma seleccionado con el idioma actual del contexto
  React.useEffect(() => {
    setSelectedLanguage(language as 'es' | 'en' || null);
  }, [language]);
  
  const handleLanguageSelect = (language: 'es' | 'en') => {
    // Actualizar el estado local
    setSelectedLanguage(language);
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
      <TopBar translationKey="language.title" textoWidth={200} />
      <View style={styles.list}>
        <Item
          text="Español"
          isSelected={selectedLanguage === "es"}
          onPress={() => handleLanguageSelect("es")}
          height={80}
          width={340}
          textSize={36}
        />
        
        <Item
          text="English"
          isSelected={selectedLanguage === "en"}
          onPress={() => handleLanguageSelect("en")}
          height={80}
          width={340}
          textSize={36}
        />
      </View>
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
    paddingBottom: 50, // Reducido porque ya no hay NavBar
    gap: 40,
    flex: 1,
    alignItems: "center",
  },
});

export default Idioma;