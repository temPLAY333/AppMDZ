# AppMDZ (Versión Web)

Aplicación web interactiva para explorar plazas y flora urbana de Mendoza, Argentina. Migrada para funcionar exclusivamente en navegadores web (desktop y mobile) utilizando Expo Web + React Native Web.

## Características principales
* 🌳 **49 especies de plantas** con imágenes, descripciones y características
* 🗺️ **5 plazas históricas**: Independencia, San Martín, Chile, España e Italia
* 🎯 **Paradas interactivas** con información de flora por ubicación
* 🌍 **Multilingüe**: Español e Inglés
* 📱 **Responsive**: Optimizado para desktop y mobile web
* 🎮 **Sistema de trivia** para aprender sobre las especies

## Requisitos
* Node.js 18+
* npm 9+
* (Opcional) `serve` para previsualizar builds estáticos

## Dependencias clave
* React 19 / React Native Web
* Expo SDK 54 (modo web)
* React Navigation 6 (navegación declarativa)
* `react-native-svg` + transformer para SVG
* `@expo/vector-icons` para iconografía
* Sistema de localización optimizado con cache

## Scripts disponibles
```bash
npm run start        # Dev server (Expo Web)
npm run dev          # Alias para start
npm run build:web    # Build de producción a ./dist
npm run preview:web  # Previsualizar build localmente
```

## Scripts de mantenimiento
```bash
# Verificar cobertura de plantas en plazas
node scripts/check-plantas-coverage.js

# Actualizar conteo de imágenes automáticamente
node scripts/update-images-count.js

# Verificar orientación de imágenes
.\scripts\check-image-orientation.ps1

# Migrar imágenes de plantas desde backup
node scripts/migrate-plant-images.js
```

## Instalación
```bash
npm install
npm run start
```

## Build de producción
```bash
npm run build:web
npm run preview:web
```
Publica la carpeta `dist/` en servicios como Netlify, Vercel, GitHub Pages o Cloudflare Pages.

## Estructura del proyecto
```
assets/
  fonts/           Tipografías Inter
  plazas/          Imágenes de plazas
components/        Componentes reutilizables
  Plants.tsx       Visualización de plantas con galería
  PlantaDescripcion.tsx  Descripciones multilingües
  ImageWithFallback.tsx  Fallback .jpeg/.jpg automático
screens/           Pantallas principales
  Home.tsx         Pantalla de inicio
  MenuPlaza.tsx    Menú de plazas
  ParadaPlanta1.tsx  Detalle de paradas
  Trivia.tsx       Sistema de preguntas
data/
  plantas/         Catálogo de 49 especies
  plazas/          Definición de 5 plazas y paradas
  preguntas/       Base de preguntas para trivia
  imagenes/        Sistema de carga de imágenes
localization/      i18n con cache optimizado
styling/           Tema y estilos globales
utils/             Helpers (emojis, imágenes)
public/
  images/plantas/  Imágenes organizadas por ID (1-49)
scripts/           Scripts de mantenimiento
```

## Sistema de imágenes
Las imágenes de plantas están organizadas en `public/images/plantas/{ID}/`:
- Formato de archivo: `{ID}-{slug}-{número}.{jpeg|jpg}`
- Ejemplo: `02-acacianegra-1.jpeg`, `02-acacianegra-2.jpg`
- Sistema de fallback automático: prueba `.jpeg` primero, luego `.jpg`
- Conteo automático con `update-images-count.js`
- Respeta EXIF Orientation para imágenes rotadas

## Estado de las plantas
- **Total en catálogo**: 49 especies
- **Asignadas a plazas**: 41 especies
- **Sin asignar**: 8 especies (ID: 3, 6, 7, 10, 20, 24, 40, y una más)
- **Sin imágenes**: ID 49 (Pino de Alepo - duplicado con ID 29)

## Características técnicas
### Sistema de localización
- Cache optimizado para slugs de plantas
- Soporte es/en con fallback inteligente
- Hook `useSimplePlant()` para datos de plantas localizados

### Galería de imágenes
- Múltiples imágenes por planta (1-16 imágenes)
- Navegación por flechas y dots indicadores
- Ajuste automático de altura para imágenes verticales (hasta 600px)
- Fallback automático entre extensiones .jpeg/.jpg
- Lazy loading de dimensiones de imagen

### Optimizaciones
- Cache de slugs para mejor performance
- Componente `ImageWithFallback` para manejo robusto de errores
- Sistema de detección de orientación EXIF
- Conteo automático de imágenes disponibles

## Troubleshooting
### Imágenes no cargan
1. Verificar extensión: ejecutar `.\scripts\check-image-orientation.ps1`
2. Actualizar conteo: `node scripts/update-images-count.js`
3. Revisar logs del navegador para errores 404

### Caché corrupto
```bash
# Limpiar caché de Expo
rm -rf .expo .cache
npm run start
```

### Build falla
1. Verificar versiones de Node.js (18+) y npm (9+)
2. Reinstalar dependencias: `rm -rf node_modules && npm install`
3. Limpiar build: `rm -rf dist`

## Migración desde versión móvil
Se eliminó soporte para Android/iOS:
- Configuración NDK removida
- Scripts batch Android desactivados
- `app.json` configurado solo para web (`platforms: ["web"]`)
- Carpeta `android/` mantenida para referencia histórica

## Contribuir
1. Fork del repositorio
2. `npm install && npm run start`
3. Realizar cambios y probar en navegador
4. Verificar plantas con `node scripts/check-plantas-coverage.js`
5. Crear PR con descripción detallada

## Tareas pendientes
- [ ] Asignar 8 plantas faltantes a paradas de plazas
- [ ] Restaurar imágenes de ID 49 (Pinus halepensis)
- [ ] Eliminar código redundante de condicionales de plataforma
- [ ] Añadir pruebas E2E con Playwright
- [ ] Optimizar bundle con análisis de source-map
- [ ] Auditar accesibilidad (WCAG 2.1)

## Licencia
[Especificar licencia del proyecto]

## Créditos
Aplicación desarrollada para promover el conocimiento de la flora urbana de Mendoza, Argentina.
