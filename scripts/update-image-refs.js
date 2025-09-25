// Script para actualizar las referencias de imágenes en el archivo de plantas
const fs = require('fs');
const path = require('path');

// Leer el archivo
const filePath = path.join(__dirname, '..', 'data', 'plantas', 'index.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Reemplazar todas las ocurrencias de require('../../assets/image') por getPlantaImagen con el ID correspondiente
for (let id = 4; id <= 33; id++) {
    const regex = new RegExp(`id: '${id}',[\\s\\S]*?imagenPath: require\\('../../assets/image'\\),`, 'g');
    content = content.replace(regex, `id: '${id}',\\s\\S]*?imagenPath: getPlantaImagen('${id}'),`);
}

// Escribir el archivo actualizado
fs.writeFileSync(filePath, content, 'utf8');

console.log('Actualizaciones de imágenes completadas.');