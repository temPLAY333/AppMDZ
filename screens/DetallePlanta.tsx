import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "../components/TopBar";
import Plants from "../components/Plants";
import NavBar from "../components/NavBar";
import Klipartz from "../assets/Klipartz.svg";
import { Color, Padding } from "../GlobalStyles";
import { getPlantaImagen } from "../data/imagenes";
import { plantasPorId } from "../data/plantas";
import { useRoute, RouteProp } from '@react-navigation/native';

// Definimos el tipo para los parámetros de la ruta
type DetallePlantaParams = {
  plantaId?: string;
  paradaNumero?: string;
};

const DetallePlanta = () => {
  // Obtenemos los parámetros de la ruta con tipado
  const route = useRoute<RouteProp<Record<string, DetallePlantaParams>, string>>();
  const { plantaId = '1', paradaNumero = '1' } = route.params || {};
  
  // Obtenemos la planta por su ID
  const planta = plantasPorId[plantaId];
  
  // Si no se encuentra la planta, usamos la primera como fallback
  const plantaAMostrar = planta || plantasPorId['1'];
  
  return (
    <SafeAreaView style={styles.viewBg}>
      <KeyboardAvoidingView
        style={styles.keyboardavoidingview}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={[styles.view, styles.viewBg]}>
          <TopBar text={`Parada N°${paradaNumero}`} />
          <ScrollView
            style={styles.contenedor}
            contentContainerStyle={styles.contenedorContainerContent}
          >
            {/* Imagen eliminada */}
            <View style={styles.items}>
              <Plants
                nombre={plantaAMostrar.atributos.nombre}
                nombreCientifico={plantaAMostrar.atributos.nombreCientifico}
                descripcionesMultilingue={plantaAMostrar.atributos.descripcionesMultilingue}
                imagenPath={getPlantaImagen(plantaAMostrar.id)}
              />
            </View>
          </ScrollView>
          <NavBar klipartz={<Klipartz width={55} height={55} />} />
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
    height: 917,
    overflow: "hidden",
  },
  contenedor: {
    maxWidth: "100%",
    alignSelf: "stretch",
    flex: 1,
  },
  // Estilos eliminados de las imágenes que ya no se usan
  items: {
    flex: 1, // Permite que crezca según el contenido
    padding: Padding.p_10,
    alignSelf: "stretch",
    overflow: "hidden",
  },
});

export default DetallePlanta;