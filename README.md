# AppMDZ - App de Parques Mendoza

## Descripción
Esta aplicación móvil desarrollada con React Native y Expo ofrece información sobre las plazas de Mendoza, incluyendo características de flora, mapas, modelos 3D y juegos interactivos educativos.

## Requisitos
- Node.js 18 o superior
- npm 9 o superior
- Expo CLI

## Dependencias
La aplicación utiliza las siguientes dependencias principales:
- React Native 0.76.9
- Expo 52.0.46
- React Navigation 6.x
- Expo Image
- React Native SVG
- Expo Linear Gradient

## Instalación

### 1. Resolución de dependencias
Ejecuta el archivo batch incluido:
```
install_dependencies.bat
```

O instala manualmente con:
```bash
npm install
npm install --save expo-linear-gradient@^12.8.2
```

### 2. Verificar que todas las dependencias estén instaladas
```bash
npm list --depth=0
```

## Ejecución

### Para preview y ejecución en tu dispositivo:

1. Abre la carpeta del proyecto en <u>Visual Studio Code</u>
2. Ejecuta `npm install` en la terminal
3. Ejecuta `npx expo start` en la terminal
4. Para dispositivo iOS (solo en MacOS)
   1. Presiona `i` para ver en el simulador iOS o sigue las instrucciones [aquí](https://docs.expo.dev/workflow/run-on-device/) para ejecutar en un dispositivo físico.
5. Para dispositivo Android
   1. Presiona `a` para ver en Android Virtual Device o sigue las instrucciones [aquí](https://docs.expo.dev/workflow/run-on-device/) para ejecutar en un dispositivo físico.

## Estructura del proyecto

### Carpetas principales
- `/assets`: Contiene imágenes, SVGs y fuentes utilizadas en la aplicación
- `/components`: Componentes reutilizables
- `/screens`: Pantallas de la aplicación
- `/scripts`: Scripts de utilidad

### Componentes principales
- `TopBar`: Barra superior de navegación
- `NavBar`: Barra inferior de navegación
- `Emojis`: Componente para mostrar emojis
- `Item`: Elemento para listas
- `MapaIcon`: Icono de mapa
- `ModeloIcon`: Icono de modelo 3D
- `MultipleChoice`: Componente para preguntas de opción múltiple

### Pantallas
- `Home`: Pantalla principal
- `MapaDeLaPlazaModelo`: Vista de modelo 3D de plazas
- `ParadaPlanta1`: Información sobre plantas
- `Glosario`: Glosario de términos
- `JuegosPregunta1` y `JuegosPregunta2`: Juegos interactivos

## Solución de problemas

Si encuentras problemas con los permisos de ejecución de scripts en PowerShell, puedes usar:
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

Para problemas con SVG:
- Ejecuta el script de validación: `node scripts/validate-svgs.js`

### Nota:

1. Asegúrate de haber instalado las dependencias de código nativo [aquí](https://reactnative.dev/docs/environment-setup#installing-dependencies)
2. Asegúrate de que tu `versión de node` sea mínimo `18`.
