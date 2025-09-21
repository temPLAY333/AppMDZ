import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "../components/TopBar";
import TerminoEspecifico from "../components/TerminoEspecifico";
import NavBar from "../components/NavBar";
import Klipartz from "../assets/Klipartz.svg";
import { Color, Padding } from "../GlobalStyles";

const Glosario = () => {
  const [terminoEspecificoItems] = useState([
    {
      texto:
        "Filodio: es una modificación de la hoja, donde el “tallo” de la hoja (llamado pecíolo) se encuentra ensanchado y aplanado para sustituir a la lámina de la hoja en sus funciones.",
      nombre: "Adaptaciones",
    },
    {
      texto:
        "Simples: es aquella compuesta por una sola lámina, sin subdivisiones.  \nPinnadas o compuestas: se denomina así cuando la lámina foliar se encuentra subdividida en partes más pequeñas llamadas foliolos, alineados a lo largo de un eje central. \nBipinnadas o dos veces compuesta: al igual que en el caso anterior, sólo que también los folíolos presentan subdivisiones. \nDigitadas: es una hoja compuesta donde todos los folíolos salen de un mismo punto en vez de disponerse a lo largo de un eje.  \nCordiformes: es una hoja simple donde la lámina presenta forma de corazón.",
      nombre: "Tipos de Hojas",
    },
    {
      texto:
        " Alterna: las hojas se insertan una por una a lo largo de la rama, alternando los lados \nOpuesta: las hojas se insertan una frente a la otra, al mismo nivel. \nVerticilada: tres o más hojas salen de un mismo punto.funciones.",
      nombre: "Disposición de las Hojas",
    },
    {
      texto:
        "En racimo: las flores crecen sobre un eje y se disponen lateralmente en forma alterna.",
      nombre: "Disposición de Flores",
    },
    {
      texto:
        "Baya: fruto carnoso, sin carozo o hueso, con semillas en su interior.  \nCápsula: fruto seco que se abre al madurar, expulsando las semillas. Puede presentar distintas formas. \nVaina o legumbre: fruto seco, alargado, que contiene varias semillas. Puede abrirse por los costados o no. \nSámara: fruto seco, con alas para facilitar su dispersión por el viento, contiene una única semilla",
      nombre: "Tipos de Fruto",
    },
  ]);

  return (
    <SafeAreaView style={styles.viewBg}>
      <View style={[styles.view, styles.viewBg]}>
        <TopBar text="Glosario" textoWidth={101} />
        <ScrollView
          style={styles.list}
          contentContainerStyle={styles.listContainerContent}
        >
          {terminoEspecificoItems.map((item, index) => (
            <TerminoEspecifico
              key={index}
              texto={item.texto}
              nombre={item.nombre}
            />
          ))}
        </ScrollView>
        <NavBar klipartz={<Klipartz width={55} height={55} />} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listContainerContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 10,
  },
  glosario: {
    flex: 1,
    backgroundColor: "#05181f",
  },
  viewBg: {
    backgroundColor: Color.colorGray200,
    flex: 1,
  },
  view: {
    width: "100%",
    height: 917,
    overflow: "hidden",
  },
  list: {
    width: 412,
    padding: Padding.p_10,
    maxWidth: 412,
    flex: 1,
  },
});

export default Glosario;