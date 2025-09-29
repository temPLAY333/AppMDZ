const fs = require('fs');
const path = require('path');

// Ruta al archivo de plantas
const plantasFilePath = path.join(__dirname, '..', 'data', 'plantas', 'index.ts');

// Leer el contenido del archivo
let fileContent = fs.readFileSync(plantasFilePath, 'utf8');

// Dividir el contenido en líneas para facilitar el manejo
const lines = fileContent.split('\n');

let currentId = null;
let changes = 0;

// Recorrer cada línea
for (let i = 0; i < lines.length; i++) {
    // Buscar línea con definición de id
    const idMatch = lines[i].match(/id:\s*'(\d+)'/);
    if (idMatch) {
        currentId = idMatch[1];
        console.log(`Encontrada planta con ID: ${currentId}`);
    }
    
    // Buscar línea con imagenPath y si tenemos un id activo
    if (currentId && lines[i].includes('imagenPath: getPlantaImagen(')) {
        const imgMatch = lines[i].match(/imagenPath: getPlantaImagen\('([^']+)'\)/);
        if (imgMatch) {
            const currentImgId = imgMatch[1];
            if (currentImgId !== currentId) {
                console.log(`  Actualizando: getPlantaImagen('${currentImgId}') -> getPlantaImagen('${currentId}')`);
                lines[i] = lines[i].replace(
                    `getPlantaImagen('${currentImgId}')`, 
                    `getPlantaImagen('${currentId}')`
                );
                changes++;
            }
        }
    }
}

// Si hubo cambios, guardar el archivo actualizado
if (changes > 0) {
    console.log(`\nTotal de cambios realizados: ${changes}`);
    fs.writeFileSync(plantasFilePath, lines.join('\n'), 'utf8');
    console.log('Archivo actualizado correctamente.');
} else {
    console.log('\nNo se encontraron discrepancias que actualizar.');
}