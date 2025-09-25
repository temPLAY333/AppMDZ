const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import JuegosPregunta2 from "./screens/JuegosPregunta2";
import DetallePlanta from "./screens/DetallePlanta";
import JuegosPregunta1 from "./screens/JuegosPregunta1";
import Home from "./screens/Home";
import MenuPlaza from "./screens/MenuPlaza";
import LoadScreen from "./screens/LoadScreen";
import Revision from "./screens/Revision";
import Idioma from "./screens/Idioma";
import MapaDeLaPlaza from "./screens/MapaDeLaPlaza";
import InformacionAdicional from "./screens/InformacionAdicional";
import Referencias from "./screens/Referencias";
import Glosario from "./screens/Glosario";
import ParadaPlanta1 from "./screens/ParadaPlanta1";
// Los componentes UI no se importan aquí porque no son pantallas navegables
import { LanguageProvider } from "./contexts/LanguageContext";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { actualizarDescripcionesPlantasMultilingues } from "./utils/plantasTranslations";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false); // Comienza mostrando la pantalla de carga

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
  });

  // Inicializar traducciones y simular una pantalla de carga
  React.useEffect(() => {
    // Inicializar traducciones de plantas
    actualizarDescripcionesPlantasMultilingues();
    
    // Mostrar pantalla de carga por 4 segundos
    const timer = setTimeout(() => {
      setHideSplashScreen(true);
    }, 4000);
    
    return () => clearTimeout(timer);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <LanguageProvider>
        <NavigationContainer>
          {!hideSplashScreen ? (
            <LoadScreen />
          ) : (
            <Stack.Navigator
              initialRouteName="Idioma"
              screenOptions={{ headerShown: false }}
            >
            <Stack.Screen
              name="JuegosPregunta2"
              component={JuegosPregunta2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DetallePlanta"
              component={DetallePlanta}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="JuegosPregunta1"
              component={JuegosPregunta1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MenuPlaza"
              component={MenuPlaza}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoadScreen"
              component={LoadScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Revision"
              component={Revision}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Idioma"
              component={Idioma}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MapaDeLaPlaza"
              component={MapaDeLaPlaza}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="InformacionAdicional"
              component={InformacionAdicional}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Referencias"
              component={Referencias}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Glosario"
              component={Glosario}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ParadaPlanta1"
              component={ParadaPlanta1}
              options={{ headerShown: false }}
            />
            {/* Componentes que no son pantallas no deben ser registrados aquí */}
          </Stack.Navigator>
          )}
        </NavigationContainer>
      </LanguageProvider>
    </>
  );
};
export default App;
