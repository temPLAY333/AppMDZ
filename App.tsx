const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import JuegosPregunta2 from "./screens/JuegosPregunta2";
import ParadaPlanta1 from "./screens/ParadaPlanta1";
import JuegosPregunta1 from "./screens/JuegosPregunta1";
import Home from "./screens/Home";
import MenuPlaza from "./screens/MenuPlaza";
import LoadScreen from "./screens/LoadScreen";
import Revision from "./screens/Revision";
import Idioma from "./screens/Idioma";
import MapaDeLaPlazaModelo from "./screens/MapaDeLaPlazaModelo";
import MapaDeLaPlazaMapa from "./screens/MapaDeLaPlazaMapa";
import InformacionAdicional from "./screens/InformacionAdicional";
import Referencias from "./screens/Referencias";
import Glosario from "./screens/Glosario";
import Item from "./components/Item";
import Variant from "./components/Variant";
import Mark from "./components/Mark";
import ModeloIcon from "./components/ModeloIcon";
import MapaIcon from "./components/MapaIcon";
import Variant1 from "./components/Variant1";
import TerminoEspecifico from "./components/TerminoEspecifico";
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
    
    // Mostrar pantalla de carga por 2.5 segundos
    const timer = setTimeout(() => {
      setHideSplashScreen(true);
    }, 2500);
    
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
              name="Emojis"
              component={ParadaPlanta1}
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
              name="MapaDeLaPlazaModelo"
              component={MapaDeLaPlazaModelo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MapaDeLaPlazaMapa"
              component={MapaDeLaPlazaMapa}
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
              name="Item"
              component={Item}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Variant"
              component={Variant}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Mark"
              component={Mark}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ModeloIcon"
              component={ModeloIcon}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MapaIcon"
              component={MapaIcon}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Variant1"
              component={Variant1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TerminoEspecifico"
              component={TerminoEspecifico}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
          )}
        </NavigationContainer>
      </LanguageProvider>
    </>
  );
};
export default App;
