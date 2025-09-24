# Configuración del entorno de desarrollo para AppMDZ

## Problemas detectados

1. **Paquetes desactualizados**: Los paquetes de Expo no están en las versiones compatibles con la versión de Expo instalada.
2. **SDK de Android no encontrado**: No se pudo encontrar el SDK de Android en la ruta predeterminada.

## Solución para los paquetes desactualizados

### Opción 1: Ejecutar el script batch
Haz doble clic en `update-expo.bat` que se encuentra en la raíz del proyecto. Este archivo actualizará todos los paquetes necesarios.

### Opción 2: Ejecutar manualmente
Si prefieres hacerlo manualmente, ejecuta el siguiente comando en una terminal CMD (no PowerShell):

```bash
npm install @expo/vector-icons@^15.0.2 @types/react@~19.1.10 expo-constants@~18.0.9 expo-font@~14.0.8 expo-image@~3.0.8 expo-status-bar@~3.0.8 expo-system-ui@~6.0.7 react@19.1.0 react-dom@19.1.0 react-native@0.81.4 react-native-gesture-handler@~2.28.0 react-native-pager-view@6.9.1 react-native-reanimated@~4.1.0 react-native-safe-area-context@~5.6.0 react-native-screens@~4.16.0 react-native-svg@15.12.1
```

## Solución para el SDK de Android

### Paso 1: Instala Android Studio
Descarga e instala [Android Studio](https://developer.android.com/studio)

### Paso 2: Configura la variable de entorno ANDROID_HOME

#### Configuración permanente (recomendado)
1. Abre el Panel de Control
2. Busca "Variables de entorno"
3. Haz clic en "Variables de entorno..."
4. En "Variables de sistema", haz clic en "Nueva..."
5. Nombre de variable: `ANDROID_HOME`
6. Valor de variable: La ruta donde instalaste el SDK de Android (típicamente `C:\Users\[tu-usuario]\AppData\Local\Android\Sdk`)
7. Haz clic en "Aceptar" en todas las ventanas para cerrarlas

#### Configuración temporal
Ejecuta el archivo `start-expo.bat` que te pedirá la ruta del SDK y configurará temporalmente la variable de entorno para esa sesión.

### Paso 3: Verifica la instalación del SDK
1. Abre Android Studio
2. Ve a Settings/Preferences > Appearance & Behavior > System Settings > Android SDK
3. Anota la ruta del "Android SDK Location"

## Iniciar la aplicación

### Opción 1: Usar el script de inicio
Haz doble clic en `start-expo.bat` que configurará la variable de entorno ANDROID_HOME y ejecutará la aplicación.

### Opción 2: Iniciar manualmente (después de configurar ANDROID_HOME)
Abre una terminal CMD (no PowerShell) y ejecuta:

```bash
npx expo start --android
```

Para resolver el problema de PowerShell con la ejecución de scripts, utiliza CMD en lugar de PowerShell, o ejecuta PowerShell como administrador y ejecuta:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

Esto permitirá la ejecución de scripts firmados remotamente para tu usuario.