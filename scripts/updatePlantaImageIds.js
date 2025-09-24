// @filename: updatePlantaImageIds.js

/**
 * Este script actualiza los IDs de imágenes en el archivo de plantas
 * para usar el ID correcto en getPlantaImagen
 */

const fs = require('fs');
const path = require('path');

const plantasIndexPath = 'c:/Users/totob/Documents/VSCodes/AppMDZ/data/plantas/index.ts';

// Leer el archivo
let fileContent = fs.readFileSync(plantasIndexPath, 'utf8');

// Actualizar cada ID de planta en la llamada getPlantaImagen
for (let i = 7; i <= 33; i++) {
  const regexp = new RegExp(`id: '${i}',[\\s\\S]*?imagenPath: getPlantaImagen\\('1'\\)`, 'g');
  fileContent = fileContent.replace(regexp, `id: '${i}',[\\s\\S]*?imagenPath: getPlantaImagen('${i}')`);
}

// Guardar el archivo actualizado
fs.writeFileSync(plantasIndexPath, fileContent, 'utf8');

console.log('¡Actualización de IDs de imágenes completada!');