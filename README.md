# AppMDZ (Versión Web)

Esta versión se migró para funcionar exclusivamente como una aplicación web (desktop y mobile web) utilizando Expo Web + React Native Web. Ya no se compila para Android ni iOS.

## Requisitos
* Node.js 18+
* npm 9+
* (Opcional) `serve` para previsualizar builds estáticos

## Dependencias clave
* React 19 / React Native Web
* Expo SDK 54 (modo web)
* React Navigation 6 (enrutamiento declarativo)
* `react-native-svg` + transformer para SVG
* `@expo/vector-icons` para íconos

## Scripts
```bash
npm run start        # Dev server (Expo Web)
npm run dev          # Alias
npm run build:web    # Export estático a ./dist
npm run preview:web  # Sirve ./dist localmente
```

## Instalación
```bash
npm install
```

## Build de producción
```bash
npm run build:web
npm run preview:web
```
Publica la carpeta `dist/` en tu hosting estático favorito (Netlify, Vercel, GitHub Pages, Cloudflare Pages, etc.).

## Estructura relevante
```
assets/        Recursos (imágenes, fuentes)
components/    Componentes reutilizables
screens/       Pantallas de navegación
data/          Datos estáticos (plantas, plazas, preguntas)
localization/  Internacionalización
styling/       Temas y estilos
utils/         Helpers (emoji, imágenes, etc.)
```

## Migración desde móvil
Eliminado / desactivado:
* Scripts batch Android (`start-expo.bat`, `start-app.bat`, `update-expo.bat`)
* Configuración NDK (`expo-module.config.js`)
* Entradas `android` / `ios` en `app.json` (ahora `platforms: ["web"]`)

Pendiente opcional (manual): borrar carpeta `android/` si ya no la necesitas como referencia histórica.

## Condicionales de plataforma
Persisten algunos checks como `Platform.OS === 'web'` o ramas para `ios`/`android` que ahora son redundantes. Puedes simplificarlos gradualmente:
```ts
// Antes
if (Platform.OS !== 'web') { /* lógica nativa */ }

// Web only: eliminar bloque o convertir a noop
```

## Optimización sugerida
* Reemplazar animaciones complejas de `react-native-reanimated` con CSS / Animated estándar si buscas reducir tamaño.
* Auditar bundle: `npx expo export --platform web --dump-sourcemap` y analizar con herramientas de source-map.

## Troubleshooting Web
* Caché corrupto: borrar `.expo`, `.cache` y ejecutar `npm run start`.
* SVG roto: confirmar `metro.config.js` incluye `react-native-svg-transformer`.
* Fuentes: verificar carga (generalmente en el entry de Expo) y que estén en `assets/fonts`.

## Contribuir
1. `npm install`
2. `npm run start`
3. Cambios y pruebas en navegador
4. Crear PR describiendo impacto en bundle y accesibilidad

## Próximos pasos sugeridos
* Eliminar código de ramas nativas
* Añadir pruebas E2E (Playwright) para flujos críticos
* Añadir análisis de performance (Lighthouse) al CI

---
¿Necesitas ayuda para limpiar la carpeta `android/` o refactorizar condicionales? Abre un issue y lo hacemos.
