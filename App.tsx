const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import MapaDeLaPlazaMapa from "./screens/MapaDeLaPlazaMapa";
import ParadaPlanta1 from "./screens/ParadaPlanta1";
import MapaDeLaPlazaModelo from "./screens/MapaDeLaPlazaModelo";
import Home from "./screens/Home";
import MenuPlaza from "./screens/MenuPlaza";
import LoadScreen from "./screens/LoadScreen";
import Idioma from "./screens/Idioma";
import InformacionAdicional from "./components/InformacionAdicional";
import Referencias from "./components/Referencias";
import Glosario from "./components/Glosario";
import Item from "./components/Item";
import Variant from "./components/Variant";
import Variant1 from "./components/Variant1";
import TerminoEspecifico from "./components/TerminoEspecifico";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="Emojis"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="MapaDeLaPlazaMapa"
              component={MapaDeLaPlazaMapa}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Emojis"
              component={ParadaPlanta1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MapaDeLaPlazaModelo"
              component={MapaDeLaPlazaModelo}
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
              name="Idioma"
              component={Idioma}
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
              name="Home"
              component={Item}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Idioma"
              component={Variant}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InformacionAdicional"
              component={Variant1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Glosario"
              component={TerminoEspecifico}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
