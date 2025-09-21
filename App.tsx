const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Idioma from "./screens/Idioma";
import ParadaPlanta1 from "./screens/ParadaPlanta1";
import Home from "./components/Home";
import MenuPlaza from "./components/MenuPlaza";
import LoadScreen from "./components/LoadScreen";
import MapaDeLaPlazaModelo from "./components/MapaDeLaPlazaModelo";
import Item from "./components/Item";
import Mark from "./components/Mark";
import ModeloIcon from "./components/ModeloIcon";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
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
              name="Idioma"
              component={Idioma}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Emojis"
              component={ParadaPlanta1}
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
              name="MapaDeLaPlazaModelo"
              component={MapaDeLaPlazaModelo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Item}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MapaDeLaPlazaModelo"
              component={Mark}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MapaDeLaPlazaModelo"
              component={ModeloIcon}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
