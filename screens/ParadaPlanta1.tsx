import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Platform,
  KeyboardAvoidingView,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "../components/TopBar";
import Plants from "../components/Plants";
import NavBar from "../components/NavBar";
import Klipartz from "../assets/Klipartz.svg";
import { Color, Padding, FontFamily } from "../GlobalStyles";
import { plantasPorId, plazasPorId, obtenerPlantasConUbicacion } from "../data";
import { useRoute, RouteProp } from '@react-navigation/native';
import { useLanguage } from "../contexts/LanguageContext";
import { PlantaConUbicacion } from "../data";

// Definimos el tipo para los parámetros de la ruta
type ParadaPlantaParams = {
  paradaId?: string;
  plazaId?: string;
};

const ParadaPlanta1 = () => {
  // Obtenemos el contexto de idioma
  const { language, translate } = useLanguage();
  
  // Obtenemos los parámetros de la ruta con tipado
  const route = useRoute<RouteProp<Record<string, ParadaPlantaParams>, string>>();
  const { paradaId = 'parada-1', plazaId = 'plaza-san-martin' } = route.params || {};
  
  // Obtenemos la plaza y la parada correspondiente
  const plaza = plazasPorId[plazaId];
  const parada = plaza?.paradas.find(p => p.id === paradaId) || plaza?.paradas[0];
  
  // Si no hay paradas, mostramos un fallback
  if (!parada || !parada.plantas || parada.plantas.length === 0) {
    console.warn('No se encontraron plantas para esta parada');
  }
  
  // Obtenemos las plantas con su información de ubicación usando la función de utilidad
  let plantasConUbicacion: PlantaConUbicacion[] = [];
  try {
    if (parada) {
      plantasConUbicacion = obtenerPlantasConUbicacion(parada);
    }
  } catch (error) {
    console.error('Error al obtener plantas de la parada:', error);
  }
  
  // Obtenemos las dos primeras plantas o usamos fallbacks si es necesario
  const planta1 = plantasConUbicacion[0] || plantasPorId['1']; // Fallback a planta con ID 1
  const planta2 = plantasConUbicacion[1] || plantasPorId['2']; // Fallback a planta con ID 2
  
  // Obtenemos el número de la parada (si está disponible)
  const paradaNumero = parada?.numero || '1';
  
  // Título de la parada según el idioma
  const paradaTitle = `${translate("stop.title")} ${paradaNumero}`;
  
  // Texto de sección según el idioma
  const floraTitle = `${translate("flora.title")} ${paradaNumero}`;
    
  return (
    <SafeAreaView style={styles.viewBg}>
      <KeyboardAvoidingView
        style={styles.keyboardavoidingview}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={[styles.view, styles.viewBg]}>
          <TopBar text={paradaTitle} textoWidth="auto" />
          <ScrollView
            style={styles.contenedor}
            contentContainerStyle={styles.contenedorContainerContent}
          >
            <View style={styles.items}>
              <Text style={styles.sectionTitle}>{floraTitle}</Text>
              {/* Primera planta */}
              {planta1 && (
                <View style={styles.plantContainer}>
                  {'ubicacionEspecifica' in planta1 && planta1.ubicacionEspecifica && (
                    <Text style={styles.ubicacionText}>
                      {`${translate("reference")}: ${planta1.ubicacionEspecifica}`}
                    </Text>
                  )}
                  <Plants
                    nombre={planta1.atributos.nombre}
                    nombreCientifico={planta1.atributos.nombreCientifico}
                    descripcionesMultilingue={planta1.atributos.descripcionesMultilingue}
                    imagenPath={planta1.atributos.imagenPath}
                    referencias={planta1.atributos.referencias}
                  />
                </View>
              )}
              
              <View style={styles.separator} />
              
              {/* Segunda planta */}
              {planta2 && (
                <View style={styles.plantContainer}>
                  {'ubicacionEspecifica' in planta2 && planta2.ubicacionEspecifica && (
                    <Text style={styles.ubicacionText}>
                      {`${translate("reference")}: ${planta2.ubicacionEspecifica}`}
                    </Text>
                  )}
                  <Plants
                    nombre={planta2.atributos.nombre}
                    nombreCientifico={planta2.atributos.nombreCientifico}
                    descripcionesMultilingue={planta2.atributos.descripcionesMultilingue}
                    imagenPath={planta2.atributos.imagenPath}
                    referencias={planta2.atributos.referencias}
                  />
                </View>
              )}
            </View>
          </ScrollView>
          <NavBar klipartz={<Klipartz width={60} height={60} />} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contenedorContainerContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingBottom: 20, // Añadido espacio en la parte inferior
  },
  paradaPlanta1: {
    flex: 1,
    backgroundColor: "#05181f",
  },
  viewBg: {
    backgroundColor: Color.colorGray200,
    flex: 1,
  },
  keyboardavoidingview: {
    flex: 1,
  },
  view: {
    width: "100%",
    height: "100%", // Cambiado a altura flexible
    overflow: "hidden",
  },
  contenedor: {
    maxWidth: "100%",
    alignSelf: "stretch",
    flex: 1,
  },
  items: {
    flex: 1, // Permite que crezca según el contenido
    padding: Padding.p_15, // Aumentamos el padding para dar más espacio
    alignSelf: "stretch",
    overflow: "hidden",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: Color.colorWhite,
    textAlign: "center",
    marginVertical: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: 10,
    borderRadius: 10,
    width: '100%',
  },
  plantContainer: {
    width: '100%',
    marginBottom: 15,
  },
  ubicacionText: {
    fontSize: 16,
    fontFamily: FontFamily.interRegular,
    color: '#A6D451',
    marginBottom: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: 8,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  separator: {
    height: 2,
    backgroundColor: '#A6D451',
    width: '100%',
    marginVertical: 25,
    opacity: 0.7,
  }
});

export default ParadaPlanta1;