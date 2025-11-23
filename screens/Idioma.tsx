import * as React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import TopBar from "../components/TopBar";
import Item from "../components/Item";
import { Color, Padding } from "../GlobalStyles";
import { useLanguageSelector, useTranslation } from "../localization";
import { useUniversalNavigation, SCREENS } from "../navigation";
import { SupportedLanguage } from "../localization/types";

const Idioma = () => {
  console.log('[Idioma] Render start');
  const navigation = useUniversalNavigation();
  const { language, t } = useTranslation();
  const { setLanguage } = useLanguageSelector();
  const [selectedLanguage, setSelectedLanguage] = React.useState<SupportedLanguage | null>(null);
  

  
  // Inicializar el idioma seleccionado con el idioma actual del contexto
  React.useEffect(() => {
    console.log('[Idioma] useEffect language changed to', language);
    setSelectedLanguage(language);
  }, [language]);
  
  const handleLanguageSelect = async (selectedLang: SupportedLanguage) => {
    try {
      console.log('[Idioma] handleLanguageSelect invoked with', selectedLang);
      // Actualizar el estado local
      setSelectedLanguage(selectedLang);
      // Cambiar el idioma en el contexto global (es async)
      await setLanguage(selectedLang);
      console.log('[Idioma] Language set, navigating to HOME');
      // Navegar a Home usando constantes
      navigation.navigate(SCREENS.HOME);
    } catch (error) {
      console.error('Error changing language:', error);
    }
  };

  return (
    <ScrollView
      style={styles.idioma}
      contentContainerStyle={styles.idiomaScrollViewContent}
    >
      <TopBar text="Idioma" translationKey="language.title" textoWidth={200} />
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