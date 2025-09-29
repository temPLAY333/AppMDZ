const fs = require('fs');
const path = require('path');

// Ruta al archivo de plantas
const plantasFilePath = path.join(__dirname, '..', 'data', 'plantas', 'index.ts');

// Leer el contenido del archivo
const fileContent = fs.readFileSync(plantasFilePath, 'utf8');

// Expresión regular para encontrar cada planta
const plantaRegex = /\{\s*id:\s*'(\d+)',\s*atributos:\s*\{[^}]*imagenPath:\s*getPlantaImagen\('([^']+)'\)/g;

// Reemplazar todas las ocurrencias
let updatedContent = fileContent;
let match;
let replacements = [];

while ((match = plantaRegex.exec(fileContent)) !== null) {
  const plantaId = match[1];
  const currentImageId = match[2];
  
  if (plantaId !== currentImageId) {
    console.log(`Updating plant ${plantaId}: getPlantaImagen('${currentImageId}') -> getPlantaImagen('${plantaId}')`);
    
    // Crear una expresión regular específica para este reemplazo
    const specificRegex = new RegExp(`(id:\\s*'${plantaId}',[\\s\\S]*?imagenPath:\\s*getPlantaImagen\\(')${currentImageId}('\\))`, 'g');
    updatedContent = updatedContent.replace(specificRegex, `$1${plantaId}$2`);
    
    replacements.push({
      id: plantaId,
      from: currentImageId,
      to: plantaId
    });
  }
}

// Guardar los cambios si hay algún reemplazo
if (replacements.length > 0) {
  fs.writeFileSync(plantasFilePath, updatedContent, 'utf8');
  console.log(`\nUpdated ${replacements.length} plant image references!`);
} else {
  console.log('\nAll plant image references are already correct!');
}