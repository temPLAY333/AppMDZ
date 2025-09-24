import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  ImageBackground,
  View,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "../components/TopBar";
import Ellipse4 from "../assets/Ellipse-4.svg";
import Plants from "../components/Plants";
import NavBar from "../components/NavBar";
import Klipartz from "../assets/Klipartz.svg";
import { Color, Padding } from "../GlobalStyles";

const ParadaPlanta1 = () => {
  return (
    <SafeAreaView style={styles.viewBg}>
      <KeyboardAvoidingView
        style={styles.keyboardavoidingview}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={[styles.view, styles.viewBg]}>
          <TopBar text="Parada N°1" />
          <ScrollView
            style={styles.contenedor}
            contentContainerStyle={styles.contenedorContainerContent}
          >
            <ImageBackground
              style={styles.imagenIcon}
              resizeMode="cover"
              source={require("../assets/image-3.png")}
            >
              <Image
                style={styles.image3Icon}
                contentFit="cover"
                source={require("../assets/image-3.png")}
              />
              <Ellipse4 style={styles.imagenChild} width={171} height={207} />
            </ImageBackground>
            <View style={styles.items}>
              <Plants
                nombre="Viscote"
                nombreCientifico="Acacia visco"
                descripcionesMultilingue={{
                  es: "Se encuentra en las plazas Independencia, Chile y España. Es un árbol que llega a medir 6-12 m de altura. Hojas alternas bipinnadas. Flores amarillas pequeñas agrupadas en cabezuelas. Su fruto es una vaina glabra, delgada, de color castaño, dehiscente (se abre al madurar). Perteneciente a la familia Fabáceas",
                  en: "Found in Independence, Chile, and Spain squares. It's a tree that grows to 6-12 m tall. Alternate bipinnate leaves. Small yellow flowers clustered in heads. Its fruit is a glabrous, thin, brown pod that splits open when ripe. Belongs to the Fabaceae family."
                }}
                imagenPath={require("../assets/image-3@3x.png")}
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
  imagenIcon: {
    width: '100%', // Ancho flexible
    flexDirection: "row",
    paddingHorizontal: 45,
    paddingBottom: 69,
    aspectRatio: 1.5, // Usa relación de aspecto en lugar de altura fija
    maxHeight: 276, // Altura máxima
  },
  image3Icon: {
    width: '100%', // Ancho flexible
    display: "none",
    aspectRatio: 1.5, // Usa relación de aspecto en lugar de altura fija
  },
  imagenChild: {
    width: '42%', // Ancho relativo
    aspectRatio: 0.82, // Mantiene la relación de aspecto
    zIndex: 1,
  },
  items: {
    flex: 1, // Permite que crezca según el contenido
    padding: Padding.p_10,
    alignSelf: "stretch",
    overflow: "hidden",
  },
});

export default ParadaPlanta1;