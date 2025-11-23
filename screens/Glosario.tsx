import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "../components/TopBar";
import TerminoEspecifico from "../components/TerminoEspecifico";
import Klipartz from "../assets/Klipartz.svg";
import { Color, Padding } from "../GlobalStyles";
import { useTranslation } from "../localization";

const Glosario = () => {
  const { language, t } = useTranslation();
  
  // Definición de términos en español
  const terminosEspanol = [
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
  ];
  
  // Definición de términos en inglés
  const terminosIngles = [
    {
      texto:
        "Phyllode: a modification of the leaf, where the leaf 'stem' (called petiole) is widened and flattened to substitute the leaf blade in its functions.",
      nombre: "Adaptations",
    },
    {
      texto:
        "Simple: composed of a single blade, without subdivisions.  \nPinnate or compound: when the leaf blade is subdivided into smaller parts called leaflets, aligned along a central axis. \nBipinnate or twice compound: similar to the previous case, but the leaflets also present subdivisions. \nDigitate: a compound leaf where all leaflets emerge from the same point instead of being arranged along an axis.  \nCordiform: a simple leaf where the blade has a heart shape.",
      nombre: "Leaf Types",
    },
    {
      texto:
        "Alternate: leaves are inserted one by one along the branch, alternating sides. \nOpposite: leaves are inserted facing each other, at the same level. \nWhorled: three or more leaves emerge from the same point.",
      nombre: "Leaf Arrangement",
    },
    {
      texto:
        "Raceme: flowers grow on an axis and are arranged laterally in an alternate pattern.",
      nombre: "Flower Arrangement",
    },
    {
      texto:
        "Berry: fleshy fruit, without stone or pit, with seeds inside.  \nCapsule: dry fruit that opens when ripe, ejecting seeds. It can have different shapes. \nPod or legume: dry, elongated fruit that contains several seeds. It may open on the sides or not. \nSamara: dry fruit with wings to facilitate wind dispersal, contains a single seed.",
      nombre: "Fruit Types",
    },
  ];
  
  // Estado para almacenar los términos según el idioma actual
  const [terminoEspecificoItems, setTerminoEspecificoItems] = useState<{texto: string; nombre: string}[]>(
    language === 'es' ? terminosEspanol : terminosIngles
  );
  
  // Actualizar los términos cuando cambia el idioma
  useEffect(() => {
    setTerminoEspecificoItems(language === 'es' ? terminosEspanol : terminosIngles);
  }, [language]);

  return (
    <SafeAreaView style={styles.viewBg}>
      <View style={[styles.view, styles.viewBg]}>
        <TopBar translationKey="glossary.title" textoWidth={180} />
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