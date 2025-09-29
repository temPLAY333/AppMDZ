import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import { useLanguage } from "../contexts/LanguageContext";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import { AppNavigationProp, AppRouteProp, ScreenProps } from "../types/navigation";
import { TopBarType, NavBarType } from "../types/components";

// Usando los tipos de React Navigation directamente
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';

type ResultadosTriviaProps = {
  route: RouteProp<RootStackParamList, 'ResultadosTrivia'>;
  navigation: StackNavigationProp<RootStackParamList, 'ResultadosTrivia'>;
};

const ResultadosTrivia: React.FC<ResultadosTriviaProps> = ({ route, navigation }) => {
  const { language, translate } = useLanguage();
  const { puntaje, total, plazaId } = route.params || { puntaje: 0, total: 0, plazaId: 'plaza-san-martin' };
  
  // Calcular porcentaje de aciertos
  const porcentaje = total > 0 ? (puntaje / total) * 100 : 0;
  
  // Determinar mensaje según el porcentaje
  const getMensaje = () => {
    if (porcentaje >= 80) {
      return {
        es: "¡Excelente! Eres un experto en flora urbana.",
        en: "Excellent! You are an expert in urban flora."
      };
    } else if (porcentaje >= 60) {
      return {
        es: "¡Muy bien! Tienes buenos conocimientos sobre plantas.",
        en: "Very good! You have good knowledge about plants."
      };
    } else if (porcentaje >= 40) {
      return {
        es: "¡Bien! Has aprendido algunas cosas sobre las plantas de la plaza.",
        en: "Good! You have learned some things about the plants in the square."
      };
    } else {
      return {
        es: "¡Sigue aprendiendo! Explora más sobre las plantas de la plaza.",
        en: "Keep learning! Explore more about the plants in the square."
      };
    }
  };
  
  const mensaje = getMensaje();
  
  return (
    <View style={styles.container}>
      <TopBar title={translate("results.title")} showBackButton={true} />
      
      <View style={styles.contenido}>
        {/* Resultado principal */}
        <View style={styles.resultadoContainer}>
          <Text style={styles.tituloResultado}>
            {language === 'en' ? 'Your Score' : 'Tu Puntaje'}
          </Text>
          
          <View style={styles.scoreContainer}>
            <Text style={styles.score}>{puntaje}/{total}</Text>
            <Text style={styles.porcentaje}>
              {porcentaje.toFixed(0)}%
            </Text>
          </View>
          
          <Text style={styles.mensaje}>
            {language === 'en' ? mensaje.en : mensaje.es}
          </Text>
          
          {/* Comentamos la imagen decorativa temporalmente hasta tener imágenes reales */}
          {/* 
          <Image
            source={
              porcentaje >= 60
                ? require('../assets/resultados-bueno.png')  // Imagen para buen resultado
                : require('../assets/resultados-regular.png')  // Imagen para resultado regular
            }
            style={styles.imagenResultado}
            resizeMode="contain"
          />
          */}
        </View>
        
        {/* Botones de acción */}
        <View style={styles.botonesContainer}>
          <TouchableOpacity
            style={styles.botonPrimario}
            onPress={() => navigation.navigate({
              name: "JuegoPreguntas",
              params: { plazaId }
            })}
          >
            <Text style={styles.botonTexto}>
              {language === 'en' ? 'Play Again' : 'Jugar de Nuevo'}
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.botonSecundario}
            onPress={() => navigation.navigate({
              name: "MenuPlaza",
              params: { plazaId }
            })}
          >
            <Text style={styles.botonTextoSecundario}>
              {translate("back.to.menu")}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <NavBar activeItem="JuegosPregunta1" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  contenido: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultadoContainer: {
    backgroundColor: "#F8F9FA",
    borderRadius: 12,
    padding: 24,
    width: '100%',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tituloResultado: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#343A40",
  },
  scoreContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  score: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#28A745",
  },
  porcentaje: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6C757D",
    marginTop: 4,
  },
  mensaje: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
    color: "#495057",
    paddingHorizontal: 16,
  },
  imagenResultado: {
    width: 200,
    height: 150,
    marginBottom: 16,
  },
  botonesContainer: {
    width: '100%',
    marginTop: 24,
  },
  botonPrimario: {
    backgroundColor: "#28A745",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  botonSecundario: {
    backgroundColor: "#F8F9FA",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: "#DEE2E6",
  },
  botonTexto: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  botonTextoSecundario: {
    color: "#495057",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ResultadosTrivia;