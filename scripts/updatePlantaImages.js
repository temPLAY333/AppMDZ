// @filename: updatePlantaImages.js

/**
 * Este script actualiza todas las referencias de imágenes en el archivo de plantas
 * para usar el nuevo sistema de imágenes centralizado.
 */

const fs = require('fs');
const path = require('path');

const plantasIndexPath = 'c:/Users/totob/Documents/VSCodes/AppMDZ/data/plantas/index.ts';

// Leer el archivo
let fileContent = fs.readFileSync(plantasIndexPath, 'utf8');

// Primero, agregar la importación de getPlantaImagen si no existe
if (!fileContent.includes('import { getPlantaImagen } from ')) {
  fileContent = fileContent.replace(
    'import { Planta, EmojiReferencia } from \'../types\';',
    'import { Planta, EmojiReferencia } from \'../types\';\nimport { getPlantaImagen } from \'../imagenes\';'
  );
}

// Reemplazar todas las referencias a require('../../assets/image')
fileContent = fileContent.replace(/imagenPath: require\('\.\.\/\.\.\/assets\/image'\)/g, 
  function(match, offset, string) {
    // Buscar el ID anterior en el texto
    const prevText = string.substring(0, offset);
    const idMatch = prevText.match(/id: ['"](\d+)['"]/);
    
    if (idMatch && idMatch[1]) {
      return `imagenPath: getPlantaImagen('${idMatch[1]}')`;
    }
    
    // Si no podemos encontrar el ID, usar un fallback
    return `imagenPath: getPlantaImagen('1')`;
  }
);

// Guardar el archivo actualizado
fs.writeFileSync(plantasIndexPath, fileContent, 'utf8');

console.log('¡Actualización de referencias de imágenes completada!');