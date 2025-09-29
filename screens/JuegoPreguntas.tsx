import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import { useLanguage } from "../contexts/LanguageContext";
import { Pregunta } from "../data/types";
import { getPreguntasAleatorias, getTextoLocalizado } from "../utils/preguntasUtils";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import { AppNavigationProp, AppRouteProp, ScreenProps } from "../types/navigation";
import { TopBarType, NavBarType } from "../types/components";

// Usando los tipos de React Navigation directamente
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';

type JuegoPreguntasProps = {
  route: RouteProp<RootStackParamList, 'JuegoPreguntas'>;
  navigation: StackNavigationProp<RootStackParamList, 'JuegoPreguntas'>;
};

const JuegoPreguntas: React.FC<JuegoPreguntasProps> = ({ route, navigation }) => {
  const { language, translate } = useLanguage();
  const { plazaId } = route.params || { plazaId: 'plaza-san-martin' }; // Usar San Martín por defecto
  
  const [cargando, setCargando] = useState(true);
  const [preguntasDisponibles, setPreguntasDisponibles] = useState<Pregunta[]>([]);
  const [preguntaActual, setPreguntaActual] = useState<Pregunta | null>(null);
  const [indiceActual, setIndiceActual] = useState(0);
  const [opcionSeleccionada, setOpcionSeleccionada] = useState<number | null>(null);
  const [respuestaEnviada, setRespuestaEnviada] = useState(false);
  const [puntaje, setPuntaje] = useState(0);

  // Cargar preguntas al iniciar
  useEffect(() => {
    const cargarPreguntas = () => {
      try {
        console.log("Cargando preguntas para la plaza:", plazaId);
        const preguntas = getPreguntasAleatorias(plazaId, 5); // Obtener 5 preguntas aleatorias
        console.log("Preguntas obtenidas:", preguntas.length, preguntas);
        if (preguntas.length > 0) {
          setPreguntasDisponibles(preguntas);
          setPreguntaActual(preguntas[0]);
          console.log("Primera pregunta:", preguntas[0]);
        } else {
          console.error(`No se encontraron preguntas para la plaza ${plazaId}`);
        }
      } catch (error) {
        console.error("Error al cargar preguntas:", error);
      } finally {
        setCargando(false);
      }
    };

    cargarPreguntas();
  }, [plazaId]);

  // Manejar la selección de respuesta
  const seleccionarRespuesta = (indiceOpcion: number) => {
    if (respuestaEnviada) return; // No permitir seleccionar si ya se envió una respuesta
    
    setOpcionSeleccionada(indiceOpcion);
  };

  // Verificar respuesta y pasar a la siguiente pregunta
  const verificarRespuesta = () => {
    if (opcionSeleccionada === null || !preguntaActual) return;
    
    setRespuestaEnviada(true);
    
    // Comprobar si la respuesta es correcta
    const esCorrecta = preguntaActual.opciones[opcionSeleccionada].esCorrecta;
    
    if (esCorrecta) {
      setPuntaje(puntaje + 1);
    }
    
    // Esperar 1.5 segundos antes de pasar a la siguiente pregunta
    setTimeout(() => {
      if (indiceActual < preguntasDisponibles.length - 1) {
        // Pasar a la siguiente pregunta
        const siguienteIndice = indiceActual + 1;
        setIndiceActual(siguienteIndice);
        setPreguntaActual(preguntasDisponibles[siguienteIndice]);
        setOpcionSeleccionada(null);
        setRespuestaEnviada(false);
      } else {
        // Finalizar el juego y navegar a la pantalla de resultados
        navigation.navigate({
          name: "ResultadosTrivia",
          params: {
            puntaje,
            total: preguntasDisponibles.length,
            plazaId
          }
        });
      }
    }, 1500);
  };

  // Mostrar indicador de carga mientras se cargan las preguntas
  if (cargando) {
    return (
      <View style={[styles.container, styles.centeredContainer]}>
        <TopBar title={translate("play.trivia")} showBackButton={true} />
        <ActivityIndicator size="large" color={Color.primary} />
        <NavBar activeItem="Home" />
      </View>
    );
  }

  // Si no hay preguntas disponibles, mostrar mensaje de error
  if (!preguntaActual) {
    return (
      <View style={[styles.container, styles.centeredContainer]}>
        <TopBar title={translate("play.trivia")} showBackButton={true} />
        <Text style={styles.errorText}>{translate("error.retry")}</Text>
        <TouchableOpacity 
          style={styles.botonPrimario} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.botonTexto}>{translate("back.to.menu")}</Text>
        </TouchableOpacity>
        <NavBar activeItem="Home" />
      </View>
    );
  }

  // Renderizar la pregunta actual
  return (
    <View style={styles.container}>
      <TopBar title={translate("play.trivia")} showBackButton={true} />
      
      <ScrollView style={styles.contenido} contentContainerStyle={styles.scrollContent}>
        {/* Contador de preguntas */}
        <Text style={styles.contador}>
          {indiceActual + 1} / {preguntasDisponibles.length}
        </Text>
        
        {/* Pregunta */}
        <View style={styles.preguntaContainer}>
          <Text style={styles.pregunta}>
            {getTextoLocalizado(preguntaActual.texto, language)}
          </Text>
          
          {/* Imagen de la pregunta (si existe) - temporalmente comentado hasta tener imágenes reales */}
          {/* 
          {preguntaActual.imagen && (
            <Image
              source={{ uri: preguntaActual.imagen }}
              style={styles.imagenPregunta}
              resizeMode="contain"
            />
          )}
          */}
          
          {/* Opciones de respuesta */}
          <View style={styles.opcionesContainer}>
            {preguntaActual.opciones.map((opcion, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.opcion,
                  opcionSeleccionada === index && styles.opcionSeleccionada,
                  respuestaEnviada && opcion.esCorrecta && styles.opcionCorrecta,
                  respuestaEnviada && opcionSeleccionada === index && !opcion.esCorrecta && styles.opcionIncorrecta
                ]}
                onPress={() => seleccionarRespuesta(index)}
                disabled={respuestaEnviada}
              >
                <Text style={[
                  styles.textoOpcion,
                  (opcionSeleccionada === index || 
                  (respuestaEnviada && opcion.esCorrecta)) && 
                  styles.textoOpcionSeleccionada
                ]}>
                  {getTextoLocalizado(opcion.texto, language)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          
          {/* Explicación de la respuesta correcta (mostrar solo después de responder) */}
          {respuestaEnviada && (
            <View style={styles.explicacionContainer}>
              <Text style={styles.explicacionTitulo}>
                {translate("info.title")}:
              </Text>
              <Text style={styles.explicacionTexto}>
                {getTextoLocalizado(preguntaActual.explicacion, language)}
              </Text>
            </View>
          )}
          
          {/* Botón para enviar respuesta o continuar */}
          {!respuestaEnviada ? (
            <TouchableOpacity
              style={[
                styles.botonPrimario,
                opcionSeleccionada === null && styles.botonDeshabilitado
              ]}
              onPress={verificarRespuesta}
              disabled={opcionSeleccionada === null}
            >
              <Text style={styles.botonTexto}>{language === 'en' ? 'Answer' : 'Responder'}</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.resultadoContainer}>
              <Text style={[
                styles.resultadoTexto,
                preguntaActual.opciones[opcionSeleccionada!].esCorrecta 
                  ? styles.respuestaCorrecta 
                  : styles.respuestaIncorrecta
              ]}>
                {preguntaActual.opciones[opcionSeleccionada!].esCorrecta 
                  ? (language === 'en' ? "Correct!" : "¡Correcto!") 
                  : (language === 'en' ? "Incorrect" : "Incorrecto")}
              </Text>
            </View>
          )}
        </View>
      </ScrollView>

      <NavBar activeItem="Home" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  centeredContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  contenido: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 80,
  },
  contador: {
    textAlign: 'center',
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interBold,
    marginBottom: 16,
    color: Color.primary,
  },
  preguntaContainer: {
    backgroundColor: Color.backgroundLight,
    borderRadius: Border.br_md,
    padding: 16,
    marginBottom: 16,
  },
  pregunta: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interBold,
    marginBottom: 16,
    textAlign: 'center',
    color: Color.textDark,
  },
  imagenPregunta: {
    width: '100%',
    height: 200,
    borderRadius: Border.br_sm,
    marginBottom: 16,
  },
  opcionesContainer: {
    marginBottom: 16,
  },
  opcion: {
    backgroundColor: Color.white,
    borderWidth: 1,
    borderColor: Color.borderLight,
    borderRadius: Border.br_sm,
    padding: 12,
    marginBottom: 8,
  },
  opcionSeleccionada: {
    borderColor: Color.primary,
    backgroundColor: Color.primaryLight,
  },
  opcionCorrecta: {
    backgroundColor: '#d4edda',
    borderColor: '#c3e6cb',
  },
  opcionIncorrecta: {
    backgroundColor: '#f8d7da',
    borderColor: '#f5c6cb',
  },
  textoOpcion: {
    fontSize: FontSize.size_md,
    fontFamily: FontFamily.interRegular,
    color: Color.textDark,
  },
  textoOpcionSeleccionada: {
    fontFamily: FontFamily.interBold,
  },
  explicacionContainer: {
    marginTop: 16,
    padding: 12,
    backgroundColor: Color.backgroundInfo,
    borderRadius: Border.br_sm,
  },
  explicacionTitulo: {
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_md,
    marginBottom: 8,
    color: Color.textDark,
  },
  explicacionTexto: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    color: Color.textDark,
  },
  botonPrimario: {
    backgroundColor: Color.primary,
    paddingVertical: 12,
    borderRadius: Border.br_sm,
    alignItems: 'center',
    marginTop: 16,
  },
  botonDeshabilitado: {
    backgroundColor: Color.borderLight,
  },
  botonTexto: {
    color: Color.white,
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_md,
  },
  resultadoContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  resultadoTexto: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interBold,
  },
  respuestaCorrecta: {
    color: '#28a745',
  },
  respuestaIncorrecta: {
    color: '#dc3545',
  },
  errorText: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.interRegular,
    color: Color.textDark,
    textAlign: 'center',
    marginBottom: 16,
  },
});

export default JuegoPreguntas;