/**
 * Guía de migración para screens usando Universal Navigation
 * 
 * ANTES (React Navigation):
 * import { useNavigation } from "@react-navigation/native";
 * const navigation = useNavigation<any>();
 * navigation.navigate("MenuPlaza", { plazaId });
 * 
 * DESPUÉS (Universal):
 * import { useUniversalNavigation, SCREENS } from "../navigation";
 * const navigation = useUniversalNavigation();
 * navigation.navigate(SCREENS.MENU_PLAZA, { plazaId });
 */

// ===== EJEMPLO DE MIGRACIÓN COMPLETA =====

// 1. IDIOMA.TSX - MIGRADO
import React, { useState, useEffect, useContext } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import TopBar from '../components/TopBar';
import Item from '../components/Item';
import { Color, Padding } from '../GlobalStyles';
import { useLanguageSelector, useTranslation } from '../localization';
import { useUniversalNavigation, SCREENS } from '../navigation';

type LanguageKey = 'es' | 'en';

const IdiomaExample = () => {
  const navigation = useUniversalNavigation(); // ← CAMBIO PRINCIPAL
  const { language } = useTranslation();
  const { setLanguage } = useLanguageSelector();
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageKey | null>(null);
  
  useEffect(() => {
    setSelectedLanguage(language as LanguageKey || null);
  }, [language]);
  
  const handleLanguageSelect = (selectedLang: LanguageKey) => {
    setSelectedLanguage(selectedLang);
    setLanguage(selectedLang);
    // ANTES: navigation.navigate("Home");
    navigation.navigate(SCREENS.HOME); // ← USO DE CONSTANTES
  };

  return (
    <ScrollView style={styles.idioma}>
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

// 2. INFORMACION ADICIONAL - MIGRADO
const InformacionAdicionalExample = () => {
  const navigation = useUniversalNavigation(); // ← CAMBIO
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const navigateToReferencias = () => {
    setSelectedOption('referencias');
    navigation.navigate(SCREENS.REFERENCIAS); // ← CONSTANTES
  };

  const navigateToGlosario = () => {
    setSelectedOption('glosario');
    navigation.navigate(SCREENS.GLOSARIO); // ← CONSTANTES
  };
  
  return (
    <ScrollView>
      <TopBar translationKey="info.title" textoWidth={260} />
      <View style={styles.list}>
        <Item 
          text="Referencias"
          onPress={navigateToReferencias}
          height={80}
          width={340}
        />
        <Item 
          text="Glosario"
          onPress={navigateToGlosario}
          height={80}
          width={340}
        />
      </View>
    </ScrollView>
  );
};

// ===== PATRÓN DE MIGRACIÓN PARA LOS DEMÁS =====

/*

SCREENS POR MIGRAR (siguiendo el mismo patrón):

1. MenuPlaza.tsx:
   - Cambiar: useNavigation → useUniversalNavigation
   - Cambiar: navigation.navigate("MapaDeLaPlaza") → SCREENS.MAPA_PLAZA
   - Cambiar: navigation.navigate("JuegosPregunta1") → SCREENS.JUEGOS_PREGUNTA

2. MapaDeLaPlaza.tsx:
   - Cambiar: useNavigation → useUniversalNavigation
   - Cambiar: navigation.navigate("ParadaPlanta1") → SCREENS.PARADA_PLANTA

3. ParadaPlanta1.tsx:
   - Cambiar: useNavigation → useUniversalNavigation
   - Cambiar: navigation.navigate("DetallePlanta") → SCREENS.DETALLE_PLANTA

4. JuegosPregunta1.tsx:
   - Cambiar: useNavigation → useUniversalNavigation
   - Cambiar: navigation.navigate("Revision") → SCREENS.REVISION

5. Referencias.tsx:
   - Solo usa NavBar (ya migrado)

6. Glosario.tsx:
   - Solo usa NavBar (ya migrado)

7. DetallePlanta.tsx:
   - Cambiar: useNavigation → useUniversalNavigation
   - Revisar navigate calls

8. Revision.tsx:
   - Cambiar: useNavigation → useUniversalNavigation
   - Cambiar: navigation.navigate("Home") → SCREENS.HOME

*/

const styles = StyleSheet.create({
  idioma: {
    width: "100%",
    backgroundColor: Color.colorGray200,
    flex: 1,
  },
  list: {
    padding: Padding.p_36,
    gap: 20,
  },
});

export { IdiomaExample, InformacionAdicionalExample };