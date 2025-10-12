// Test para verificar que getPlantaImagenesPrueba genera imágenes diferentes
import { getPlantaImagenesPrueba } from '../data/imagenes';

console.log('=== Test de imágenes múltiples ===');

// Probar con planta ID 9 (Cedro del Himalaya)
const imagenesPlanta9 = getPlantaImagenesPrueba('9', 5);
console.log('Planta ID 9 (Cedro):');
imagenesPlanta9.forEach((img, index) => {
  console.log(`  ${index + 1}: ${img}`);
});

console.log('\n');

// Probar con planta ID 26 (Algarrobo)
const imagenesPlanta26 = getPlantaImagenesPrueba('26', 5);
console.log('Planta ID 26 (Algarrobo):');
imagenesPlanta26.forEach((img, index) => {
  console.log(`  ${index + 1}: ${img}`);
});

console.log('\n');

// Verificar que no hay duplicados
const duplicados9 = imagenesPlanta9.length !== new Set(imagenesPlanta9).size;
const duplicados26 = imagenesPlanta26.length !== new Set(imagenesPlanta26).size;

console.log(`¿Hay duplicados en planta 9? ${duplicados9 ? 'SÍ ❌' : 'NO ✅'}`);
console.log(`¿Hay duplicados en planta 26? ${duplicados26 ? 'SÍ ❌' : 'NO ✅'}`);