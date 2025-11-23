const Stack = createNativeStackNavigator();
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
// Importaciones directas para evitar flashes de Suspense al navegar
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
import InfoButton from "./components/InfoButton";
// Los componentes UI no se importan aquí porque no son pantallas navegables
import { OptimizedLocalizationProvider } from "./localization";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform, View, Text, Pressable } from "react-native";
import { setupTwemojiStyles } from "./utils/twemojiSetup";
import { prefetchCommonEmojis } from "./utils/emojiPrefetch"; // Prefetch emojis
import { prefetchInitialPlantImages } from "./utils/prefetchImages"; // Prefetch imágenes iniciales
// Quitamos animaciones para evitar flash blanco entre navegaciones

// Simple error boundary to evitar pantalla totalmente en blanco por errores silenciosos
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean; error?: any; info?: any }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: any) {
    return { hasError: true, error, info: null };
  }
  componentDidCatch(error: any, info: any) {
    console.error('APP ERROR BOUNDARY CAUGHT:', error, info);
    this.setState({ info });
  }
  render() {
    if (this.state.hasError) {
      const { error, info } = this.state;
      const message = error ? (error.message || String(error)) : 'Error desconocido';
      return (
        <View style={{ flex: 1, backgroundColor: '#021317', padding: 32, justifyContent: 'center', gap: 16 }}>
          <View style={{ alignItems: 'center' }}>
            <InfoButton />
          </View>
          <View style={{ backgroundColor: '#06232E', padding: 24, borderRadius: 12, gap: 12 }}>
            <Text accessibilityRole="header" style={{ color: '#fff', fontSize: 20, fontWeight: '700' }}>Se produjo un error</Text>
            <Text style={{ color: '#A7C8D6', fontSize: 14 }}>
              Revisa la consola para el stack completo. Este mensaje se muestra para evitar la pantalla en blanco.
            </Text>
            <View style={{ backgroundColor: '#01151C', padding: 12, borderRadius: 8 }}>
              <Text selectable style={{ color: '#E6F4F9', fontFamily: 'monospace', fontSize: 13 }}>{message}</Text>
              {info?.componentStack && (
                <Text selectable style={{ marginTop: 8, color: '#6FBAD6', fontFamily: 'monospace', fontSize: 11 }}>{info.componentStack}</Text>
              )}
            </View>
            <Pressable
              onPress={() => (typeof window !== 'undefined' ? window.location.reload() : null)}
              style={{ backgroundColor: '#19A4DF', paddingVertical: 10, paddingHorizontal: 16, borderRadius: 6, alignSelf: 'flex-start' }}>
              <Text style={{ color: '#021317', fontWeight: '600' }}>Reintentar</Text>
            </Pressable>
          </View>
        </View>
      );
    }
    return this.props.children;
  }
}

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false); // Comienza mostrando la pantalla de carga

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
  });

  // Inicializar traducciones y simular una pantalla de carga
  React.useEffect(() => {
    setupTwemojiStyles();
    prefetchCommonEmojis();
    prefetchInitialPlantImages(); // no afecta duración fija
    const timer = setTimeout(() => setHideSplashScreen(true), 2000); // splash fijo 2s
    return () => clearTimeout(timer);
  }, []);

  if (!fontsLoaded && !error) {
    // Mostrar la pantalla de carga mientras las fuentes se cargan, en lugar de null
    return <LoadScreen />;
  }

  // Linking sólo en web para evitar problemas en nativo y controlar window
  const linking = Platform.OS === 'web' ? {
    prefixes: [typeof window !== 'undefined' ? window.location.origin : ''],
    config: {
      screens: {
        Idioma: '',
        Home: 'home',
        DetallePlanta: 'planta',
        ParadaPlanta1: 'parada',
        MapaDeLaPlaza: 'mapa',
        InformacionAdicional: 'info',
        Referencias: 'referencias',
        Glosario: 'glosario',
        Revision: 'revision',
        MenuPlaza: 'menu-plaza',
        JuegosPregunta1: 'juego'
      }
    }
  } : undefined;

  return (
    <ErrorBoundary>
      <OptimizedLocalizationProvider>
        <NavigationContainer linking={linking}>
          {!hideSplashScreen ? (
            <LoadScreen />
          ) : (
            <Stack.Navigator
              initialRouteName="Idioma"
              screenOptions={{ headerShown: false }}
            >
            <Stack.Screen name="DetallePlanta" component={DetallePlanta} options={{ headerShown: false, animation: 'none' }} />
            <Stack.Screen name="JuegosPregunta1" component={JuegosPregunta1} options={{ headerShown: false, animation: 'none' }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false, animation: 'none' }} />
            <Stack.Screen name="MenuPlaza" component={MenuPlaza} options={{ headerShown: false, animation: 'none' }} />
            <Stack.Screen name="LoadScreen" component={LoadScreen} options={{ headerShown: false, animation: 'none' }} />
            <Stack.Screen name="Revision" component={Revision} options={{ headerShown: false, animation: 'none' }} />
            <Stack.Screen name="Idioma" component={Idioma} options={{ headerShown: false, animation: 'none' }} />
            <Stack.Screen name="MapaDeLaPlaza" component={MapaDeLaPlaza} options={{ headerShown: false, animation: 'none' }} />
            <Stack.Screen name="InformacionAdicional" component={InformacionAdicional} options={{ headerShown: false, animation: 'none' }} />
            <Stack.Screen name="Referencias" component={Referencias} options={{ headerShown: false, animation: 'none' }} />
            <Stack.Screen name="Glosario" component={Glosario} options={{ headerShown: false, animation: 'none' }} />
            <Stack.Screen name="ParadaPlanta1" component={ParadaPlanta1} options={{ headerShown: false, animation: 'none' }} />
            {/* Componentes que no son pantallas no deben ser registrados aquí */}
          </Stack.Navigator>
          )}
          {/* Botón global de información */}
          {hideSplashScreen && <InfoButton />}
        </NavigationContainer>
      </OptimizedLocalizationProvider>
    </ErrorBoundary>
  );
};
export default App;

