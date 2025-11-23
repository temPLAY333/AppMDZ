/**
 * Actualiza el mapa de imágenes disponibles por planta
 * Lee las carpetas y actualiza el archivo data/imagenes/index.ts
 */

const fs = require('fs');
const path = require('path');

const plantasDir = path.join(__dirname, '..', 'public', 'images', 'plantas');
const targetFile = path.join(__dirname, '..', 'data', 'imagenes', 'index.ts');

// Contar imágenes por carpeta
const imagenesPorPlanta = {};

for (let id = 1; id <= 49; id++) {
  const folder = path.join(plantasDir, id.toString());
  if (fs.existsSync(folder)) {
    const images = fs.readdirSync(folder).filter(file => 
      file.match(/\.(jpg|jpeg|png|webp)$/i)
    );
    imagenesPorPlanta[id.toString()] = images.length;
  }
}

// Generar el código del mapa
const entries = [];
for (let i = 1; i <= 49; i += 10) {
  const end = Math.min(i + 9, 49);
  const line = [];
  for (let j = i; j <= end; j++) {
    const count = imagenesPorPlanta[j.toString()] || 0;
    line.push(`'${j}': ${count}`);
  }
  entries.push('  ' + line.join(', '));
}

const newMapCode = `const imagenesDisponiblesPorPlanta: Record<string, number> = {\n${entries.join(',\n')}\n};`;

// Leer archivo actual
let content = fs.readFileSync(targetFile, 'utf-8');

// Reemplazar el mapa
const regex = /const imagenesDisponiblesPorPlanta: Record<string, number> = \{[^}]+\};/s;
content = content.replace(regex, newMapCode);

// Escribir archivo actualizado
fs.writeFileSync(targetFile, content, 'utf-8');

console.log('✅ Mapa de imágenes actualizado en data/imagenes/index.ts');
console.log('\nResumen:');
for (let i = 1; i <= 49; i++) {
  const count = imagenesPorPlanta[i.toString()] || 0;
  if (count === 0) {
    console.log(`  ID ${i}: ⚠️  0 imágenes`);
  }
}
