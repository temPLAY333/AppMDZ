import React, { useState, useEffect } from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageBackground, View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute, useNavigation } from "@react-navigation/native";
import TopBar from "../components/TopBar";
import Ellipse4 from "../assets/Ellipse-4.svg";
import MultipleChoice from "../components/MultipleChoice";
import NavBar from "../components/NavBar";
import Klipartz from "../assets/Klipartz.svg";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import { preguntasPorPlazaId } from "../data/preguntas";
import { Pregunta, Opcion } from "../data/types";

// Define los tipos para los parámetros de la ruta
type RouteParamList = {
  JuegosPregunta1: { plazaId: string };
};

import { RouteProp } from "@react-navigation/native";
type JuegosPregunta1ScreenRouteProp = RouteProp<RouteParamList, 'JuegosPregunta1'>;

const JuegosPregunta1 = () => {
  const route = useRoute<JuegosPregunta1ScreenRouteProp>();
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
      setSelectedOption(preguntaActual.opciones[opcionIndex].texto);
      setRespuestas({
        ...respuestas,
        [preguntaActual.id]: preguntaActual.opciones[opcionIndex].texto
      });
    }
  };

  // Función para pasar a la siguiente pregunta
  const siguientePregunta = () => {
    // Verificar si se ha seleccionado una opción
    if (!selectedOption) {
      return; // No hacer nada si no hay una opción seleccionada
    }
    
    if (indicePreguntaActual < preguntasSeleccionadas.length - 1) {
      setIndicePreguntaActual(indicePreguntaActual + 1);
      setSelectedOption(null); // Resetear la opción seleccionada
    } else {
      // Si es la última pregunta, navegar a la pantalla de revisión
      navigation.navigate("Revision", {
        plazaId,
        respuestas,
        preguntas: preguntasSeleccionadas
      });
    }
  };

  // Si no hay preguntas seleccionadas, mostrar un mensaje de carga
  if (preguntasSeleccionadas.length === 0) {
    return (
      <View style={styles.container}>
        <TopBar text={`Trivia`} textoWidth={157} translationKey="" />
        <Text style={styles.loadingText}>Cargando preguntas...</Text>
        <NavBar klipartz={<Klipartz width={55} height={55} />} />
      </View>
    );
  }

  // Obtener la pregunta actual
  const preguntaActual = preguntasSeleccionadas[indicePreguntaActual];
  
  return (
    <View style={styles.container}>
      <TopBar text={`Pregunta ${indicePreguntaActual + 1} de ${preguntasSeleccionadas.length}`} textoWidth={250} translationKey="" />
      
      <View style={styles.preguntaContainer}>
        <Text style={styles.preguntaText}>{preguntaActual.texto}</Text>
      </View>
      
      <View style={styles.opcionesContainer}>
        {preguntaActual.opciones.map((opcion, index) => (
          <Pressable 
            key={index}
            style={[
              styles.opcionBtn,
              selectedOption === opcion.texto && styles.opcionSeleccionada
            ]}
            onPress={() => handleSeleccionRespuesta(index)}
          >
            <Text style={styles.opcionText}>{opcion.texto}</Text>
          </Pressable>
        ))}
      </View>
      
      <Pressable 
        style={[
          styles.siguienteBtn,
          !selectedOption && styles.siguienteBtnDisabled
        ]}
        onPress={siguientePregunta}
        disabled={!selectedOption}
      >
        <Text style={styles.siguienteBtnText}>
          {indicePreguntaActual < preguntasSeleccionadas.length - 1 
            ? "Siguiente" 
            : "Ver Resultados"}
        </Text>
      </Pressable>
      
      <NavBar klipartz={<Klipartz width={55} height={55} />} />
    </View>
  );
};

const styles = StyleSheet.create({
  juegosPregunta1: {
    flex: 1,
    backgroundColor: "#05181f",
  },
  container: {
    flex: 1,
    backgroundColor: Color.colorGray200,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  },
  viewBg: {
    backgroundColor: Color.colorGray200,
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
    marginTop: 20,
    alignItems: "center",
  },
  preguntaText: {
    fontSize: FontSize.size_32,
    fontWeight: "700",
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.interBold,
  },
  opcionesContainer: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  opcionBtn: {
    width: '90%',
    maxWidth: 400,
    padding: 15,
    backgroundColor: Color.colorSteelblue,
    borderRadius: 10,
    alignItems: "center",
  },
  opcionSeleccionada: {
    backgroundColor: '#19a4df',
    borderWidth: 2,
    borderColor: Color.colorWhite,
  },
  opcionText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_24,
    fontFamily: FontFamily.interBold,
    textAlign: "center",
  },
  siguienteBtn: {
    backgroundColor: Color.colorSteelblue,
    padding: 15,
    margin: 20,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 80,
  },
  siguienteBtnDisabled: {
    backgroundColor: '#445b6a',  // Un color más apagado cuando está deshabilitado
    opacity: 0.7,
  },
  siguienteBtnText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_24,
    fontFamily: FontFamily.interBold,
  },
  imagenIcon: {
    width: 412,
    flexDirection: "row",
    paddingHorizontal: 45,
    paddingBottom: 69,
    height: 276,
  },
  image3Icon: {
    width: 414,
    display: "none",
    height: 276,
  },
  imagenChild: {
    width: 171,
    height: 207,
    zIndex: 1,
  },
});

export default JuegosPregunta1;
