#!/usr/bin/env node
/**
 * Simple bundle size analyzer for Expo Web export using sourcemap.
 * Requires running: npm run build:web:map (creates dist/ and web-build/ depending on Expo version).
 * Looks for .map files in dist or web-build and aggregates size by package path segment.
 */
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const CANDIDATE_DIRS = ['dist', 'web-build'];

function findSourceMap() {
  // Expo export web (SDK 54) genera mapas en dist/_expo/static/js/web/*.js.map
  for (const dir of CANDIDATE_DIRS) {
    const expoDir = path.join(ROOT, dir, '_expo', 'static', 'js', 'web');
    if (fs.existsSync(expoDir)) {
      const files = fs.readdirSync(expoDir).filter(f => f.endsWith('.js.map'));
      // Buscar el bundle principal (AppEntry) o elegir el más grande
      let chosen = files.find(f => f.includes('AppEntry'));
      if (!chosen && files.length) {
        chosen = files.sort((a,b)=>{
          const aSize = fs.statSync(path.join(expoDir,a)).size;
          const bSize = fs.statSync(path.join(expoDir,b)).size;
          return bSize - aSize;
        })[0];
      }
      if (chosen) return path.join(expoDir, chosen);
    }
    // Intentos legacy
    const legacyBundles = path.join(ROOT, dir, 'bundles', 'web');
    if (fs.existsSync(legacyBundles)) {
      const idx = path.join(legacyBundles, 'index.js.map');
      if (fs.existsSync(idx)) return idx;
    }
    const legacyRoot = path.join(ROOT, dir, 'index.js.map');
    if (fs.existsSync(legacyRoot)) return legacyRoot;
  }
  return null;
}

function human(bytes) {
  if (bytes < 1024) return bytes + ' B';
  const units = ['KB','MB','GB'];
  let i=-1; let val=bytes; while (val>=1024 && ++i < units.length) val/=1024; 
  return val.toFixed(2)+' '+units[i];
}

function main(){
  const mapPath = findSourceMap();
  if (!mapPath) {
    console.error('No se encontró sourcemap. Ejecuta primero: npm run build:web:map');
    process.exit(1);
  }
  const raw = fs.readFileSync(mapPath, 'utf-8');
  const json = JSON.parse(raw);
  if (!json.sources || !json.sourcesContent) {
    console.error('Sourcemap inválido.');
    process.exit(1);
  }
  const sizes = new Map();
  for (let i=0;i<json.sources.length;i++) {
    const src = json.sources[i];
    const content = json.sourcesContent[i] || '';
    const bytes = Buffer.byteLength(content,'utf-8');
    // Extraer primer segmento relevante (node_modules/...)
    let key = 'app';
    const nmIndex = src.indexOf('node_modules/');
    if (nmIndex >=0) {
      const after = src.slice(nmIndex + 'node_modules/'.length);
      key = after.split(/[\\/]/)[0];
    }
    sizes.set(key, (sizes.get(key)||0) + bytes);
  }
  const total = Array.from(sizes.values()).reduce((a,b)=>a+b,0);
  const sorted = Array.from(sizes.entries()).sort((a,b)=>b[1]-a[1]);
  console.log('\n=== Bundle Size Breakdown ===');
  console.log('Total estimado (fuente):', human(total));
  console.log('\nTop paquetes:');
  sorted.slice(0,30).forEach(([k,v])=>{
    console.log(k.padEnd(25), human(v), ((v/total)*100).toFixed(2)+'%');
  });
  console.log('\nSugerencias:');
  console.log('- Considera eliminar paquetes grandes no usados (ej: react-native-reanimated si se reemplaza por CSS).');
  console.log('- Divide lógica pesada en imports dinámicos si aplica.');
  console.log('- Optimiza imágenes y SVGs (usar compresión, eliminar assets sin uso).');
}

main();
