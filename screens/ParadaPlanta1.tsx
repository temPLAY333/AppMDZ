import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "../components/TopBar";
import Plants from "../components/Plants";
import { Color, Padding, FontFamily } from "../GlobalStyles";
import { plantasPorId, plazasPorId, obtenerPlantasEnParada } from "../data";
import { useRoute, RouteProp } from '@react-navigation/native';
import { useTranslation } from "../localization";
import { Planta } from "../data/types";
import { getPlantaImagen, getPlantaImagenesPrueba } from "../data/imagenes";

// Definimos el tipo para los parámetros de la ruta
type ParadaPlantaParams = {
  paradaId?: string;
  plazaId?: string;
};

const ParadaPlanta1 = () => {
  // Obtenemos el contexto de idioma
  const { t } = useTranslation();
  
  // Obtenemos los parámetros de la ruta con tipado
  const route = useRoute<RouteProp<Record<string, ParadaPlantaParams>, string>>();
  const { paradaId = 'parada-1', plazaId = 'plaza-san-martin' } = route.params || {};
  
  // Estado para almacenar las plantas
  const [plantas, setPlantas] = React.useState<Planta[]>([]);
  
  // Estado para indicar si hay un error al cargar los datos
  const [errorCarga, setErrorCarga] = React.useState<string | null>(null);
  
  // Estado para almacenar las imágenes generadas (para evitar regeneración aleatoria)
  const [imagenesPlanta1, setImagenesPlanta1] = React.useState<string[]>([]);
  const [imagenesPlanta2, setImagenesPlanta2] = React.useState<string[]>([]);

  // Cargar plantas al inicio o cuando cambian los parámetros
  React.useEffect(() => {
    // Reseteamos el error al iniciar una nueva carga
    setErrorCarga(null);
    
    try {
      // 1. Obtener el diccionario de la plaza
      const plaza = plazasPorId[plazaId];
      if (!plaza) {
        const errorMsg = `Plaza no encontrada: ${plazaId}`;
        console.error(errorMsg);
        setErrorCarga(errorMsg);
        return;
      }
      
      // 2. Entrar en el diccionario de la parada correspondiente
      const parada = plaza.paradas.find(p => p.id === paradaId);
      if (!parada) {
        const errorMsg = `Parada no encontrada: ${paradaId} en plaza ${plazaId}`;
        console.error(errorMsg);
        setErrorCarga(errorMsg);
        return;
      }
      
      // 3. Obtener los datos de las plantas
      const plantasEnParada = obtenerPlantasEnParada(parada);
      console.log(`Encontradas ${plantasEnParada.length} plantas en parada ${parada.id}`);
      
      // Verificar si se encontraron plantas
      if (plantasEnParada.length === 0) {
        const errorMsg = `No se encontraron plantas en la parada ${paradaId}`;
        console.warn(errorMsg);
        setErrorCarga(errorMsg);
      }
      
      // Establecer las plantas en el estado
      setPlantas(plantasEnParada);
      
      // Generar las imágenes una sola vez para evitar regeneración aleatoria
      if (plantasEnParada.length > 0) {
        setImagenesPlanta1(getPlantaImagenesPrueba(plantasEnParada[0].id, 5));
      }
      if (plantasEnParada.length > 1) {
        setImagenesPlanta2(getPlantaImagenesPrueba(plantasEnParada[1].id, 5));
      }
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : 'Error desconocido al obtener plantas';
      console.error('Error al obtener plantas:', error);
      setErrorCarga(errorMsg);
      
      // Fallback a plantas por defecto si ocurre un error
      const plantasDefault = [plantasPorId['1'], plantasPorId['2']].filter(Boolean);
      if (plantasDefault.length > 0) {
        setPlantas(plantasDefault);
      }
    }
  }, [paradaId, plazaId]);
  
  // Obtenemos la información de la plaza y parada para los títulos
  const plaza = plazasPorId[plazaId];
  const parada = plaza?.paradas.find(p => p.id === paradaId);
  const paradaNumero = parada?.numero || 1;
  
  // Títulos para mostrar
  const paradaTitle = `${t("stop.title")} ${paradaNumero}`;
  const floraTitle = `${t("flora.title")} ${paradaNumero}`;
    
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.keyboardavoidingview}>
        <View style={[styles.view, styles.viewBg]}>
          <TopBar text={paradaTitle} textoWidth="auto" />
            <ScrollView
              style={styles.contenedor}
              contentContainerStyle={styles.contenedorContainerContent}
            >
            <View style={styles.items}>
              {/* Mensaje de error si existe */}
              {errorCarga && (
                <View style={styles.errorContainer}>
                  <Text style={styles.errorText}>{errorCarga}</Text>
                  <Text style={styles.errorHelp}>{t("error.retry")}</Text>
                </View>
              )}
              
              {/* Primera planta */}
              {plantas.length > 0 && imagenesPlanta1.length > 0 && (
                <View style={styles.plantContainer}>
                  <Plants
                    nombre={plantas[0].atributos?.nombre || t("unknown.plant")}
                    nombreCientifico={plantas[0].atributos?.nombreCientifico || ""}
                    descripcionesMultilingue={plantas[0].atributos?.descripcionesMultilingue || {}}
                    imagenesPath={imagenesPlanta1}
                    referencias={plantas[0].atributos?.referencias || []}
                  />
                </View>
              )}
              
              {/* Espacio entre plantas */}
              {plantas.length > 1 && <View style={{height: 20}} />}
              
              {/* Segunda planta */}
              {plantas.length > 1 && imagenesPlanta2.length > 0 && (
                <View style={styles.plantContainer}>
                  <Plants
                    nombre={plantas[1].atributos?.nombre || t("unknown.plant")}
                    nombreCientifico={plantas[1].atributos?.nombreCientifico || ""}
                    descripcionesMultilingue={plantas[1].atributos?.descripcionesMultilingue || {}}
                    imagenesPath={imagenesPlanta2}
                    referencias={plantas[1].atributos?.referencias || []}
                  />
                </View>
              )}
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedorContainerContent: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingBottom: 20, // Añadido espacio en la parte inferior
  },
  paradaPlanta1: {
    flex: 1,
    backgroundColor: "#05181f",
  },
  viewBg: {
    backgroundColor: Color.colorGray200,
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Color.colorGray200, // Color de fondo para toda la pantalla
  },
  keyboardavoidingview: {
    flex: 1,
  },
  view: {
    width: "100%",
    height: "100%", // Cambiado a altura flexible
    overflow: "hidden",
  },
  contenedor: {
    maxWidth: "100%",
    alignSelf: "stretch",
    flex: 1,
  },
  items: {
    flex: 1, // Permite que crezca según el contenido
    padding: Padding.p_15, // Aumentamos el padding para dar más espacio
    alignSelf: "stretch",
    overflow: "hidden",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: Color.colorWhite,
    textAlign: "center",
    marginVertical: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: 10,
    borderRadius: 10,
    width: '100%',
  },
  plantContainer: {
    width: '100%',
    marginBottom: 15,
  },
  separator: {
    height: 2,
    backgroundColor: '#A6D451',
    width: '100%',
    marginVertical: 25,
    opacity: 0.7,
  },
  errorContainer: {
    backgroundColor: 'rgba(255, 0, 0, 0.1)',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  errorText: {
    color: '#FF6B6B',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  errorHelp: {
    color: Color.colorWhite,
    fontSize: 14,
    textAlign: 'center',
  }
});

export default ParadaPlanta1;
