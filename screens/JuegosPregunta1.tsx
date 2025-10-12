import React, { useState, useEffect } from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageBackground, View, Text, Pressable, ScrollView, ImageSourcePropType } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import { useUniversalNavigation, SCREENS } from "../navigation";
import TopBar from "../components/TopBar";
import Item from "../components/Item";
import QuestionOption from "../components/QuestionOption";
import CircleSelector from "../components/CircleSelector";
import NavBar from "../components/NavBar";
import Klipartz from "../assets/Klipartz.svg";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import { preguntasPorPlazaId } from "../data/preguntas/index";
import { Pregunta, Opcion } from "../data/types";
import { useTranslation } from "../localization";
import { getPlantaImagen } from "../data/imagenes/index";

// Función para obtener la imagen de la planta según la pregunta
const getPlantImage = (pregunta: Pregunta): ImageSourcePropType => {
  // Si la pregunta tiene un plantaId definido, usarlo para obtener la imagen
  if (pregunta.plantaId) {
    const imageUrl = getPlantaImagen(pregunta.plantaId);
    return { uri: imageUrl };
  }
  
  // Si no hay plantaId, usar una imagen predeterminada
  const fallbackUrl = getPlantaImagen('19'); // Fallback a jacarandá (ID 19)
  return { uri: fallbackUrl };
};

// Define los tipos para los parÃ¡metros de la ruta
type RouteParamList = {
  JuegosPregunta1: { plazaId: string };
};

import { RouteProp } from "@react-navigation/native";
type JuegosPregunta1ScreenRouteProp = RouteProp<RouteParamList, 'JuegosPregunta1'>;

const JuegosPregunta1 = () => {
  const route = useRoute<JuegosPregunta1ScreenRouteProp>();
  const navigation = useUniversalNavigation();
  const { language } = useTranslation();
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

  // FunciÃ³n para seleccionar preguntas aleatorias y barajar sus opciones
  const seleccionarPreguntasAleatorias = (preguntas: Pregunta[], cantidad: number): Pregunta[] => {
    const preguntasCopiadas = [...preguntas];
    const resultado: Pregunta[] = [];
    
    // Asegurarse de no seleccionar mÃ¡s preguntas de las disponibles
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
  
  // FunciÃ³n para barajar un array (algoritmo Fisher-Yates)
  const barajarOpciones = (opciones: Opcion[]): Opcion[] => {
    for (let i = opciones.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [opciones[i], opciones[j]] = [opciones[j], opciones[i]];
    }
    return opciones;
  };

  // FunciÃ³n para manejar la selecciÃ³n de respuesta
  const handleSeleccionRespuesta = (opcionIndex: number) => {
    const preguntaActual = preguntasSeleccionadas[indicePreguntaActual];
    if (preguntaActual) {
      setSelectedOption(String(opcionIndex)); // Guardamos el Ã­ndice como identificador
      setRespuestas({
        ...respuestas,
        [preguntaActual.id]: String(opcionIndex)
      });
    }
  };

  // FunciÃ³n para pasar a la siguiente pregunta
  const siguientePregunta = () => {
    if (indicePreguntaActual < preguntasSeleccionadas.length - 1) {
      setIndicePreguntaActual(indicePreguntaActual + 1);
      setSelectedOption(null); // Resetear la opciÃ³n seleccionada
    } else {
      // Si es la Ãºltima pregunta, navegar a la pantalla de revisiÃ³n
      navigation.navigate(SCREENS.REVISION, {
        plazaId,
        respuestas,
        preguntas: preguntasSeleccionadas,
        modo: "revision",
        language: language // Pasar el idioma actual a la pantalla de revisiÃ³n
      });
    }
  };

  // Si no hay preguntas seleccionadas, mostrar un mensaje de carga
  if (preguntasSeleccionadas.length === 0) {
    return (
      <View style={styles.backgroundContainer}>
        <View style={styles.container}>
          <TopBar text={`Trivia`} textoWidth={157} translationKey="" />
          <Text style={styles.loadingText}>
            {language === 'es' ? "Cargando preguntas..." : "Loading questions..."}
          </Text>
          <NavBar klipartz={<Klipartz width={55} height={55} />} />
        </View>
      </View>
    );
  }

  // Obtener la pregunta actual
  const preguntaActual = preguntasSeleccionadas[indicePreguntaActual];
  
  return (
    <View style={styles.backgroundContainer}>
      <View style={styles.container}>
        <TopBar 
          text={`${language === 'es' ? 'Pregunta' : 'Question'} ${indicePreguntaActual + 1} ${language === 'es' ? 'de' : 'of'} ${preguntasSeleccionadas.length}`} 
          textoWidth={250} 
          translationKey="" 
        />
        
        <ScrollView style={styles.scrollView}>
          <View style={styles.preguntaContainer}>
            <Text style={styles.preguntaText}>{preguntaActual.texto[language as 'es' | 'en']}</Text>
          </View>
          
          {/* Imagen de la planta */}
          <View style={styles.imageContainer}>
            <Image
              source={getPlantImage(preguntaActual)}
              style={styles.plantImage}
              contentFit="contain"
            />
          </View>
          
          <View style={styles.opcionesContainer}>
            {preguntaActual.opciones.map((opcion, index) => (
              <QuestionOption
                key={index}
                text={opcion.texto[language as 'es' | 'en']}
                state={selectedOption === String(index) ? "Seleccionado" : "SinMarcar"}
                onPress={() => handleSeleccionRespuesta(index)}
              />
            ))}
          </View>
        </ScrollView>
        
        <View style={styles.buttonContainer}>
          <Item
            text={indicePreguntaActual < preguntasSeleccionadas.length - 1 ? 
              (language === 'es' ? "Siguiente" : "Next") : 
              (language === 'es' ? "Ver Resultados" : "See Results")}
            onPress={siguientePregunta}
            width="90%"
            height={70}
            textSize={FontSize.size_24}
          />
        </View>
        
        <NavBar klipartz={<Klipartz width={55} height={55} />} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: Color.colorGray200, // Fondo azul oscuro
  },
  juegosPregunta1: {
    flex: 1,
    backgroundColor: Color.colorGray200,
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

export default JuegosPregunta1;
