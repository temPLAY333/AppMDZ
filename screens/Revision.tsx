import React, { useEffect, useState } from "react";
import { ScrollView, Text, StyleSheet, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute, useNavigation } from "@react-navigation/native";
import TopBar from "../components/TopBar";
import Opcion from "../components/Opcion";
import NavBar from "../components/NavBar";
import Klipartz from "../assets/Klipartz.svg";
import { Color, FontSize, FontFamily } from "../GlobalStyles";
import { Pregunta } from "../data/types";

// Define los tipos para los parámetros de la ruta
type RouteParamList = {
  Revision: { 
    plazaId: string;
    respuestas: { [key: string]: string };
    preguntas: Pregunta[];
  };
};

import { RouteProp } from "@react-navigation/native";
type RevisionScreenRouteProp = RouteProp<RouteParamList, 'Revision'>;

const Revision = () => {
  const route = useRoute<RevisionScreenRouteProp>();
  const navigation = useNavigation<any>();
  const { plazaId, respuestas, preguntas } = route.params || { 
    plazaId: '', 
    respuestas: {}, 
    preguntas: [] 
  };
  
  // Calcular puntuación
  const calcularPuntuacion = () => {
    let puntos = 0;
    preguntas.forEach(pregunta => {
      const respuestaUsuario = respuestas[pregunta.id];
      const opcionCorrecta = pregunta.opciones.find(opcion => opcion.esCorrecta);
      
      if (respuestaUsuario && opcionCorrecta && respuestaUsuario === opcionCorrecta.texto) {
        puntos++;
      }
    });
    return puntos;
  };
  
  const puntuacion = calcularPuntuacion();
  const porcentajeAciertos = (puntuacion / preguntas.length) * 100;
  
  // Volver al menú de la plaza
  const volverAlMenu = () => {
    navigation.navigate("MenuPlaza", { plazaId });
  };

  return (
    <SafeAreaView style={styles.viewBg}>
      <View style={[styles.view, styles.viewBg]}>
        <TopBar text="Resultados" textoWidth={142} />
        
        <View style={styles.puntuacionContainer}>
          <Text style={styles.puntuacionText}>
            Tu puntuación: {puntuacion} de {preguntas.length} ({porcentajeAciertos.toFixed(0)}%)
          </Text>
        </View>
        
        <ScrollView
          style={styles.respuestas}
          contentContainerStyle={styles.respuestasContainerContent}
        >
          {preguntas.map((pregunta, index) => {
            const respuestaUsuario = respuestas[pregunta.id];
            const opcionCorrecta = pregunta.opciones.find(opcion => opcion.esCorrecta)?.texto || '';
            const esCorrecta = respuestaUsuario === opcionCorrecta;
            
            return (
              <View key={index} style={styles.preguntaContainer}>
                <Text style={styles.preguntaNumero}>{index + 1}) {pregunta.texto}</Text>
                
                <View style={styles.respuestaContainer}>
                  <Text style={styles.respuestaLabel}>Tu respuesta:</Text>
                  <Text style={[
                    styles.respuestaText, 
                    esCorrecta ? styles.respuestaCorrecta : styles.respuestaIncorrecta
                  ]}>
                    {respuestaUsuario || 'Sin respuesta'}
                  </Text>
                </View>
                
                {!esCorrecta && (
                  <View style={styles.respuestaContainer}>
                    <Text style={styles.respuestaLabel}>Respuesta correcta:</Text>
                    <Text style={[styles.respuestaText, styles.respuestaCorrecta]}>
                      {opcionCorrecta}
                    </Text>
                  </View>
                )}
                
                <Text style={styles.explicacionText}>{pregunta.explicacion}</Text>
              </View>
            );
          })}
        </ScrollView>
        
        <Pressable style={styles.volverBtn} onPress={volverAlMenu}>
          <Text style={styles.volverBtnText}>Volver al Menú</Text>
        </Pressable>
        
        <NavBar klipartz={<Klipartz width={55} height={55} />} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
    marginTop: 20,
  },
  puntuacionText: {
    fontSize: FontSize.size_32,
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "center",
  },
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
  preguntaContainer: {
    width: '90%',
    maxWidth: 500,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
  },
  preguntaNumero: {
    fontSize: FontSize.size_24,
    fontFamily: FontFamily.interBold,
    color: Color.colorWhite,
    marginBottom: 15,
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
  volverBtn: {
    backgroundColor: Color.colorSteelblue,
    padding: 15,
    margin: 20,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 80,
  },
  volverBtnText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_24,
    fontFamily: FontFamily.interBold,
  },
});

export default Revision;
