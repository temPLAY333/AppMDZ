@echo off
echo Actualizando paquetes de Expo...
call npm install @expo/vector-icons@^15.0.2 @types/react@~19.1.10 expo-constants@~18.0.9 expo-font@~14.0.8 expo-image@~3.0.8 expo-status-bar@~3.0.8 expo-system-ui@~6.0.7 react@19.1.0 react-dom@19.1.0 react-native@0.81.4 react-native-gesture-handler@~2.28.0 react-native-pager-view@6.9.1 react-native-reanimated@~4.1.0 react-native-safe-area-context@~5.6.0 react-native-screens@~4.16.0 react-native-svg@15.12.1
echo.
echo Configuración del SDK de Android
echo.
echo Por favor, instala Android Studio desde https://developer.android.com/studio
echo Después de instalar, configura la variable de entorno ANDROID_HOME:
echo 1. Abre el Panel de Control
echo 2. Busca "Variables de entorno"
echo 3. Haz clic en "Variables de entorno..."
echo 4. En "Variables de sistema", haz clic en "Nueva..."
echo 5. Nombre de variable: ANDROID_HOME
echo 6. Valor de variable: C:\Users\totob\AppData\Local\Android\Sdk (o la ruta donde hayas instalado el SDK)
echo 7. Haz clic en "Aceptar" en todas las ventanas para cerrarlas
echo.
echo Después de configurar la variable de entorno, abre una nueva terminal y ejecuta:
echo expo start --android
echo.
pause