import React, { useEffect, useState } from "react";
import { ScrollView, Text, StyleSheet, View, Pressable, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import { useUniversalNavigation, SCREENS } from "../navigation";
import TopBar from "../components/TopBar";
import QuestionOption from "../components/QuestionOption";
import Item from "../components/Item";
import InfoButton from "../components/InfoButton";
import Klipartz from "../assets/Klipartz.svg";
import { Color, FontSize, FontFamily } from "../GlobalStyles";
import { Pregunta } from "../data/types";
import { useTranslation } from "../localization";

// Define los tipos para los parámetros de la ruta
type RouteParamList = {
  Revision: { 
    plazaId: string;
    respuestas: { [key: string]: string };
    preguntas: Pregunta[];
    modo: string;
    language?: string; // El idioma elegido en la pantalla anterior (opcional)
  };
};

import { RouteProp } from "@react-navigation/native";
type RevisionScreenRouteProp = RouteProp<RouteParamList, 'Revision'>;

const Revision = () => {
  const route = useRoute<RevisionScreenRouteProp>();
  const navigation = useUniversalNavigation();
  const { language: contextLanguage, t } = useTranslation();
  const { plazaId, respuestas, preguntas, modo, language: routeLanguage } = route.params || { 
    plazaId: '', 
    respuestas: {}, 
    preguntas: [],
    modo: 'revision'
  };
  
  // Si se pasó un idioma en la ruta, lo usamos, de lo contrario usamos el del contexto
  const language = routeLanguage || contextLanguage;
  
  // Calcular puntuación
  const calcularPuntuacion = () => {
    let puntos = 0;
    preguntas.forEach(pregunta => {
      const respuestaUsuarioIndex = respuestas[pregunta.id];
      
      if (respuestaUsuarioIndex && pregunta.opciones[Number(respuestaUsuarioIndex)]?.esCorrecta) {
        puntos++;
      }
    });
    return puntos;
  };
  
  const puntuacion = calcularPuntuacion();
  const porcentajeAciertos = (puntuacion / preguntas.length) * 100;
  
  // Volver al menú de la plaza
  const volverAlMenu = () => {
    navigation.navigate(SCREENS.MENU_PLAZA, { plazaId });
  };

  return (
    <View 
      style={styles.backgroundContainer}
      accessibilityRole="none"
    >
      <View style={styles.container}>
        <TopBar text="Resultados" textoWidth={142} translationKey="results.title" showBackButton />
        
        <View 
          style={styles.puntuacionContainer}
          accessibilityRole="summary"
        >
          <Text 
            style={styles.puntuacionText}
            accessibilityRole="text"
            accessibilityLabel={language === 'es' 
              ? `Obtuviste ${puntuacion} respuestas correctas de ${preguntas.length} preguntas, equivalente al ${porcentajeAciertos.toFixed(0)} por ciento`
              : `You got ${puntuacion} correct answers out of ${preguntas.length} questions, equivalent to ${porcentajeAciertos.toFixed(0)} percent`
            }
            accessibilityLiveRegion="polite"
          >
            {language === 'es' 
              ? `Tu puntuación: ${puntuacion} de ${preguntas.length} (${porcentajeAciertos.toFixed(0)}%)`
              : `Your score: ${puntuacion} of ${preguntas.length} (${porcentajeAciertos.toFixed(0)}%)`
            }
          </Text>
        </View>
        
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}
          accessibilityRole="scrollbar"
          accessibilityLabel={language === 'es' ? "Revisión de respuestas" : "Answer review"}
        >
          {preguntas.map((pregunta, preguntaIndex) => {
            const esRespuestaCorrecta = respuestas[pregunta.id] && pregunta.opciones[Number(respuestas[pregunta.id])]?.esCorrecta;
            return (
              <View 
                key={preguntaIndex} 
                style={styles.preguntaContainer}
                accessibilityRole="article"
                accessibilityLabel={language === 'es' 
                  ? `Pregunta ${preguntaIndex + 1} de ${preguntas.length}. ${esRespuestaCorrecta ? 'Respuesta correcta' : 'Respuesta incorrecta'}`
                  : `Question ${preguntaIndex + 1} of ${preguntas.length}. ${esRespuestaCorrecta ? 'Correct answer' : 'Incorrect answer'}`
                }
              >
                <Text 
                  style={styles.preguntaText}
                  accessibilityRole="header"
                  accessibilityLevel={2}
                >
                  {preguntaIndex + 1}. {pregunta.texto[language as keyof typeof pregunta.texto]}
                </Text>
                
                <View 
                  style={styles.opcionesContainer}
                  accessibilityRole="radiogroup"
                  accessibilityLabel={language === 'es' ? "Opciones de respuesta" : "Answer options"}
                >
                  {pregunta.opciones.map((opcion, opcionIndex) => {
                    // Determinar el estado del círculo para cada opción
                    let estado: "SinMarcar" | "Seleccionado" | "Correcto" | "Incorrecto" = "SinMarcar";
                    
                    const esRespuestaUsuario = respuestas[pregunta.id] === String(opcionIndex);
                    const esCorrecta = opcion.esCorrecta;
                    
                    if (modo === 'revision') {
                      // En modo revisión
                      if (esRespuestaUsuario && esCorrecta) {
                        estado = "Correcto";
                      } else if (esRespuestaUsuario && !esCorrecta) {
                        estado = "Incorrecto";
                      } else if (esCorrecta) {
                        estado = "Correcto"; // Mostrar la correcta aunque no la haya elegido
                      }
                    } else {
                      // En modo normal de preguntas
                      if (esRespuestaUsuario) {
                        estado = "Seleccionado";
                      }
                    }
                    
                    return (
                      <QuestionOption
                        key={opcionIndex}
                        text={opcion.texto[language as keyof typeof opcion.texto]}
                        state={estado}
                        onPress={() => {}} // No hacer nada en modo revisión
                        disabled={modo === 'revision'}
                        explanation={estado === "Correcto" && pregunta.explicacion ? pregunta.explicacion[language as keyof typeof pregunta.explicacion] : ""}
                        showExplanation={modo === 'revision' && estado === "Correcto"}
                      />
                    );
                  })}
                </View>
              </View>
            );
          })}
        </ScrollView>
        
        <View 
          style={styles.buttonContainer}
          accessibilityRole="toolbar"
        >
          <Item 
            text={t("back.to.menu")}
            onPress={volverAlMenu}
            width="90%"
            height={70}
            textSize={24}
            accessibilityLabel={t("back.to.menu")}
            accessibilityHint={language === 'es' ? "Regresa al menú de la plaza" : "Go back to plaza menu"}
          />
        </View>
        <InfoButton />
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
  container: {
    flex: 1,
    backgroundColor: Color.colorGray200,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  viewBg: {
    backgroundColor: Color.colorGray200,
    flex: 1,
  },
  view: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  puntuacionContainer: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  puntuacionText: {
    fontSize: FontSize.size_32,
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "center",
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },
  scrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: 20,
  },
  preguntaContainer: {
    width: '90%',
    maxWidth: 500,
    backgroundColor: 'rgba(16, 102, 138, 0.3)', // Color.colorSteelblue con transparencia
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
  },
  preguntaText: {
    fontSize: FontSize.size_24,
    fontFamily: FontFamily.interBold,
    color: Color.colorWhite,
    marginBottom: 15,
  },
  opcionesContainer: {
    width: "100%",
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 20,
    marginBottom: 120, // Aumentado de 80 a 120 para mover el botón más abajo
  },
  // Mantenemos algunos estilos por compatibilidad
  respuestas: {
    alignSelf: "stretch",
    maxWidth: "100%",
    flex: 1,
  },
  respuestasContainerContent: {
    flexDirection: "column",
    paddingHorizontal: 15,
    paddingVertical: 0,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: 20,
  },
  respuestaContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  respuestaLabel: {
    fontSize: FontSize.size_20,
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhite,
    marginRight: 10,
    minWidth: 150,
  },
  respuestaText: {
    fontSize: FontSize.size_20,
    fontFamily: FontFamily.interBold,
    flex: 1,
  },
  respuestaCorrecta: {
    color: '#4CAF50',
  },
  respuestaIncorrecta: {
    color: '#F44336',
  },
  explicacionText: {
    fontSize: FontSize.size_20,
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhite,
    marginTop: 10,
    fontStyle: 'italic',
  },
  volverBtnContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    marginBottom: 95,
  },
});

export default Revision;
