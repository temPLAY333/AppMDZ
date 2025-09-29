import React, { useState, useEffect } from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageBackground, View, Text, Pressable, ScrollView, ImageSourcePropType } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute, useNavigation } from "@react-navigation/native";
import TopBar from "../components/TopBar";
import Item from "../components/Item";
import QuestionOption from "../components/QuestionOption";
import CircleSelector from "../components/CircleSelector";
import NavBar from "../components/NavBar";
import Klipartz from "../assets/Klipartz.svg";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import { preguntasPorPlazaId } from "../data/preguntas/index";
import { Pregunta, Opcion } from "../data/types";

// Mapeo de imágenes de plantas
const plantImages: { [key: number]: ImageSourcePropType } = {
  0: require("../assets/plants/jacaranda-19.png"),
  1: require("../assets/plants/aguaribay-36.png"),
  2: require("../assets/plants/algarrobo-26.png"),
  3: require("../assets/plants/magnollia-23.png"),
  4: require("../assets/plants/paraiso-24.png"),
};

// Función para obtener la imagen de la planta según el índice
const getPlantImage = (index: number): ImageSourcePropType => {
  return plantImages[index] || plantImages[0]; // Usar la primera imagen como respaldo
};

// Define los tipos para los parámetros de la ruta
type RouteParamList = {
  JuegosPregunta2: { plazaId: string };
};

import { RouteProp } from "@react-navigation/native";
type JuegosPregunta2ScreenRouteProp = RouteProp<RouteParamList, 'JuegosPregunta2'>;

const JuegosPregunta2 = () => {
  const route = useRoute<JuegosPregunta2ScreenRouteProp>();
  const navigation = useNavigation<any>();
  const { plazaId } = route.params || { plazaId: 'plaza-san-martin' }; // Valor por defecto
  
  const [preguntasSeleccionadas, setPreguntasSeleccionadas] = useState<Pregunta[]>([]);
  const [indicePreguntaActual, setIndicePreguntaActual] = useState(0);
  const [respuestas, setRespuestas] = useState<{ [key: string]: string }>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  
  // Cargar las preguntas de la plaza seleccionada al montar el componente
  useEffect(() => {
    if (plazaId && preguntasPorPlazaId[plazaId]) {
      // Obtener todas las preguntas disponibles para la plaza
      const todasLasPreguntas = preguntasPorPlazaId[plazaId].preguntas;
      
      // Seleccionar 5 preguntas aleatorias
      const preguntasAleatorias = seleccionarPreguntasAleatorias(todasLasPreguntas, 5);
      setPreguntasSeleccionadas(preguntasAleatorias);
    }
  }, [plazaId]);

  // Función para seleccionar preguntas aleatorias y barajar sus opciones
  const seleccionarPreguntasAleatorias = (preguntas: Pregunta[], cantidad: number): Pregunta[] => {
    const preguntasCopiadas = [...preguntas];
    const resultado: Pregunta[] = [];
    
    // Asegurarse de no seleccionar más preguntas de las disponibles
    const cantidadReal = Math.min(cantidad, preguntasCopiadas.length);
    
    for (let i = 0; i < cantidadReal; i++) {
      const indiceAleatorio = Math.floor(Math.random() * preguntasCopiadas.length);
      const pregunta = { ...preguntasCopiadas[indiceAleatorio] };
      
      // Barajar las opciones de la pregunta
      pregunta.opciones = barajarOpciones([...pregunta.opciones]);
      
      resultado.push(pregunta);
      preguntasCopiadas.splice(indiceAleatorio, 1);
    }
    
    return resultado;
  };
  
  // Función para barajar un array (algoritmo Fisher-Yates)
  const barajarOpciones = (opciones: Opcion[]): Opcion[] => {
    for (let i = opciones.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [opciones[i], opciones[j]] = [opciones[j], opciones[i]];
    }
    return opciones;
  };

  // Función para manejar la selección de respuesta
  const handleSeleccionRespuesta = (opcionIndex: number) => {
    const preguntaActual = preguntasSeleccionadas[indicePreguntaActual];
    if (preguntaActual) {
      setSelectedOption(String(opcionIndex)); // Guardamos el índice como identificador
      setRespuestas({
        ...respuestas,
        [preguntaActual.id]: String(opcionIndex)
      });
    }
  };

  // Función para pasar a la siguiente pregunta
  const siguientePregunta = () => {
    if (indicePreguntaActual < preguntasSeleccionadas.length - 1) {
      setIndicePreguntaActual(indicePreguntaActual + 1);
      setSelectedOption(null); // Resetear la opción seleccionada
    } else {
      // Si es la última pregunta, navegar a la pantalla de revisión
      navigation.navigate("Revision", {
        plazaId,
        respuestas,
        preguntas: preguntasSeleccionadas,
        modo: "revision"
      });
    }
  };

  // Si no hay preguntas seleccionadas, mostrar un mensaje de carga
  if (preguntasSeleccionadas.length === 0) {
    return (
      <ImageBackground 
        source={require("../assets/CiudadDeMDZ.png")} 
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <TopBar text={`Trivia`} textoWidth={157} translationKey="" />
          <Text style={styles.loadingText}>Cargando preguntas...</Text>
          <NavBar klipartz={<Klipartz width={55} height={55} />} />
        </View>
      </ImageBackground>
    );
  }

  // Obtener la pregunta actual
  const preguntaActual = preguntasSeleccionadas[indicePreguntaActual];
  
  return (
    <ImageBackground 
      source={require("../assets/CiudadDeMDZ.png")} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <TopBar text={`Pregunta ${indicePreguntaActual + 1} de ${preguntasSeleccionadas.length}`} textoWidth={250} translationKey="" />
        
        <ScrollView style={styles.scrollView}>
          <View style={styles.preguntaContainer}>
            <Text style={styles.preguntaText}>{preguntaActual.texto.es}</Text>
          </View>
          
          {/* Imagen de la planta */}
          <View style={styles.imageContainer}>
            <Image
              source={getPlantImage(indicePreguntaActual)}
              style={styles.plantImage}
              contentFit="contain"
            />
          </View>
          
          <View style={styles.opcionesContainer}>
            {preguntaActual.opciones.map((opcion, index) => (
              <QuestionOption
                key={index}
                text={opcion.texto.es}
                state={selectedOption === String(index) ? "Seleccionado" : "SinMarcar"}
                onPress={() => handleSeleccionRespuesta(index)}
              />
            ))}
          </View>
        </ScrollView>
        
        <View style={styles.buttonContainer}>
          <Item
            text={indicePreguntaActual < preguntasSeleccionadas.length - 1 ? "Siguiente" : "Ver Resultados"}
            onPress={siguientePregunta}
            width="90%"
            height={70}
            textSize={FontSize.size_24}
          />
        </View>
        
        <NavBar klipartz={<Klipartz width={55} height={55} />} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  juegosPregunta2: {
    flex: 1,
    backgroundColor: "transparent", // Cambiado para usar la imagen de fondo
  },
  container: {
    flex: 1,
    backgroundColor: "transparent", // Cambiado para usar la imagen de fondo
    width: "100%",
    height: "100%",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },
  viewBg: {
    backgroundColor: "transparent",
    flex: 1,
  },
  view: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  },
  loadingText: {
    fontSize: FontSize.size_32,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    flex: 1,
    marginTop: 50,
  },
  preguntaContainer: {
    padding: 20,
    marginTop: 10,
    alignItems: "center",
  },
  preguntaText: {
    fontSize: FontSize.size_32,
    fontWeight: "700",
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.interBold,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
    height: 200,
  },
  plantImage: {
    width: "90%",
    height: "100%",
    borderRadius: 10,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  opcionesContainer: {
    padding: 20,
    width: "100%",
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 20,
    marginBottom: 60,
  }
});

export default JuegosPregunta2;