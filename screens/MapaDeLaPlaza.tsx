import * as React from "react";
import { useState } from "react";
import { ScrollView, Text, StyleSheet, View, Image } from "react-native";
import TopBar from "../components/TopBar";
import MapaIcon from "../components/MapaIcon";
import ModeloIcon from "../components/ModeloIcon";
import NavBar from "../components/NavBar";
import DobleButton, { DobleBtnSeleccionado } from "../components/DobleButton";
import Klipartz from "../assets/Klipartz.svg";
import { useRoute, useNavigation } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/native";
import { plazasPorId } from "../data";
import { useLanguage } from "../contexts/LanguageContext";
import {
  Color,
  FontSize,
  Padding,
  Gap,
  FontFamily,
  Border,
} from "../GlobalStyles";

// Define el tipo para la ruta
type MapaModeloRouteProp = RouteProp<{
  MapaDeLaPlaza: { plazaId: string };
}, 'MapaDeLaPlaza'>;

enum ModoVisualizacion {
  MAPA = 'mapa',
  MODELO = 'modelo'
}

const MapaDeLaPlaza = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<MapaModeloRouteProp>();
  const { translate } = useLanguage();
  
  // Estado para controlar qué imagen se muestra (mapa o modelo)
  const [modo, setModo] = useState<ModoVisualizacion>(ModoVisualizacion.MAPA);
  
  // Obtenemos el plazaId de los parámetros de la ruta
  const { plazaId = 'plaza-san-martin' } = route.params || {};
  
  // Obtenemos los datos de la plaza
  const plaza = plazasPorId[plazaId];
  const plazaNombre = plaza?.nombre || "Plaza San Martín";
  
  // Cambiar entre mapa y modelo
  const mostrarMapa = () => {
    setModo(ModoVisualizacion.MAPA);
  };
  
  const mostrarModelo = () => {
    setModo(ModoVisualizacion.MODELO);
  };

  // Determinar el estado del botón dual
  const estadoBoton = modo === ModoVisualizacion.MAPA 
    ? DobleBtnSeleccionado.Izquierdo 
    : DobleBtnSeleccionado.Derecho;
  
  return (
    <ScrollView
      style={styles.mapaDeLaPlaza}
      contentContainerStyle={styles.mapaDeLaPlazaContent}
    >
      <TopBar translationKey="plaza.title" textoWidth="auto" />
      <View style={[styles.list, styles.listFlexBox]}>
        <Text style={[styles.plazaSanMartin, styles.mapaTypo]}>
          {plazaNombre}
        </Text>
        
        {/* Mostrar ícono según el modo */}
        {modo === ModoVisualizacion.MAPA ? (
          <MapaIcon />
        ) : (
          <ModeloIcon />
        )}
        
        {/* Imagen del mapa o modelo según el modo seleccionado */}
        <Image
          style={styles.imagenPlaza}
          resizeMode="contain"
          source={
            modo === ModoVisualizacion.MAPA 
            ? (plaza?.mapaImagenPath || require("../assets/PSanMartin-Aerea-Normal1-1@3x.png"))
            : (plaza?.modeloImagenPath || require("../assets/Modelo-PSanMartin-1@3x.png"))
          }
        />
        
        {/* Botón para alternar entre mapa y modelo */}
        <DobleButton
          textoIzquierdo={translate("button.map")}
          textoDerecho={translate("button.model")}
          seleccionado={estadoBoton}
          onIzquierdoPress={mostrarMapa}
          onDerechoPress={mostrarModelo}
          width={344}
          height={80}
        />
      </View>
      <NavBar klipartz={<Klipartz width={55} height={55} />} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mapaDeLaPlazaContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    minHeight: "100%",
  },
  listFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  mapaTypo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontSize: FontSize.size_32,
  },
  mapaDeLaPlaza: {
    backgroundColor: Color.colorGray200,
    maxWidth: "100%",
    flex: 1,
    width: "100%",
  },
  list: {
    overflow: "hidden",
    paddingHorizontal: Padding.p_36,
    paddingTop: 45,
    paddingBottom: 93,
    gap: Gap.gap_19,
    alignSelf: "stretch",
    flex: 1,
  },
  plazaSanMartin: {
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    alignSelf: "stretch",
  },
  imagenPlaza: {
    width: "100%",
    height: 350,
    marginVertical: 20,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: 10,
  },
});

export default MapaDeLaPlaza;