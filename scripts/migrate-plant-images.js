/**
 * Script de migración de imágenes de plantas
 * 
 * Migra las fotos desde "Fotos plazas/{nombreCientifico}/" hacia 
 * "public/images/plantas/{id}/" con el formato correcto:
 * {id}-{nombre-normalizado}-{numero}{ext}
 * 
 * Uso: node scripts/migrate-plant-images.js [--dry-run]
 */

const fs = require('fs');
const path = require('path');

// Configuración
const SOURCE_DIR = path.join(__dirname, '..', 'Fotos plazas');
const TARGET_DIR = path.join(__dirname, '..', 'public', 'images', 'plantas');
const DRY_RUN = process.argv.includes('--dry-run');

// Mapeo completo ID → nombreCientifico → nombre común (extraído de plantas/index.ts)
const PLANTAS_MAP = [
  { id: '1', nombreCientifico: 'Acacia visco', nombre: 'Viscote' },
  { id: '2', nombreCientifico: 'Acacia melanoxylon', nombre: 'Acacia Negra' },
  { id: '3', nombreCientifico: 'Ailanthus altissima', nombre: 'Arbol del Cielo' },
  { id: '4', nombreCientifico: 'Aesculus hippocastanum', nombre: 'Falso Castaño' },
  { id: '5', nombreCientifico: 'Araucaria bidwilli', nombre: 'Araucaria Austrailiana' },
  { id: '6', nombreCientifico: 'Bauhinia variegata', nombre: 'Pezuña de Vaca' },
  { id: '7', nombreCientifico: 'Buxus sp', nombre: 'Boj' },
  { id: '8', nombreCientifico: 'Casuarina cunninghamiana', nombre: 'Casuarina' },
  { id: '9', nombreCientifico: 'Cedrus deodara', nombre: 'Cedro del Himalaya' },
  { id: '10', nombreCientifico: 'Ceiba speciosa y C. chodatii', nombre: 'Palao Borracho' },
  { id: '11', nombreCientifico: 'Cercis siliquastrum', nombre: 'Árbol de Judea' },
  { id: '12', nombreCientifico: 'Cocculus laurifolius', nombre: 'Cóculo' },
  { id: '13', nombreCientifico: 'Cupressus sp', nombre: 'Cipres' },
  { id: '14', nombreCientifico: 'Evonimus japonicus', nombre: 'Evonimo' },
  { id: '15', nombreCientifico: 'Erythrina crista-galli', nombre: 'Ceibo' },
  { id: '16', nombreCientifico: 'Gleditsia triacanthos', nombre: 'Acacia de tres Espinas' },
  { id: '17', nombreCientifico: 'Firmiana Simplex', nombre: 'Parasol Chino' },
  { id: '18', nombreCientifico: 'Fraxinus excelsior y F. pennsylvanica', nombre: 'Fresno' },
  { id: '19', nombreCientifico: 'Jacaranda mimosifolia', nombre: 'Jacaranda' },
  { id: '20', nombreCientifico: 'Lagerstroemia indica', nombre: 'Árbol de Júpiter' },
  { id: '21', nombreCientifico: 'Ligustrum lucidum', nombre: 'Ligustro' },
  { id: '22', nombreCientifico: 'Liquidambar styraciflua', nombre: 'Liquidambar Americano' },
  { id: '23', nombreCientifico: 'Magnolia grandiflora', nombre: 'Magnolia' },
  { id: '24', nombreCientifico: 'Melia azedarach', nombre: 'Paraíso' },
  { id: '25', nombreCientifico: 'Morus alba y M. nigra', nombre: 'Morera' },
  { id: '26', nombreCientifico: 'Prosopis sp.', nombre: 'Algarrobo' },
  { id: '27', nombreCientifico: 'Nerium oleander', nombre: 'Adelfa' },
  { id: '28', nombreCientifico: 'Pinus griffithii', nombre: 'Pino del Himalaya' },
  { id: '29', nombreCientifico: 'Pinus halepensis', nombre: 'Pino de Alepo' },
  { id: '30', nombreCientifico: 'Platanus x acerifolia', nombre: 'Plátano' },
  { id: '31', nombreCientifico: 'Phoenix canariensis', nombre: 'Palma Fénix' },
  { id: '32', nombreCientifico: 'Phytolacca dioica', nombre: 'Ombú' },
  { id: '33', nombreCientifico: 'Punica granatum', nombre: 'Granado' },
  { id: '34', nombreCientifico: 'Quercus robur', nombre: 'Roble' },
  { id: '35', nombreCientifico: 'Quercus suber', nombre: 'Árbol del Corcho' },
  { id: '36', nombreCientifico: 'Robinia pseudoacacia', nombre: 'Falsa Acacia' },
  { id: '37', nombreCientifico: 'Schinus molle', nombre: 'Aguaribay' },
  { id: '38', nombreCientifico: 'Syagrus romanzoffiana', nombre: 'Pindó' },
  { id: '39', nombreCientifico: 'Tilia sp.', nombre: 'Tilo' },
  { id: '40', nombreCientifico: 'Tipuana tipu', nombre: 'Tipa' },
  { id: '41', nombreCientifico: 'Vitex angus-castus', nombre: 'Sauzgatillo' },
  { id: '42', nombreCientifico: 'Trachycarpus fortunei', nombre: 'Palmera China' },
  { id: '43', nombreCientifico: 'Washingtonia robusta y W. filiformis', nombre: 'Palmera Abanico' },
  { id: '44', nombreCientifico: 'Pittosporum tobira', nombre: 'Azarero' },
  { id: '45', nombreCientifico: 'Populus sp.', nombre: 'Alamo' },
  { id: '46', nombreCientifico: 'Salix nigra', nombre: 'Sauce negro' },
  { id: '47', nombreCientifico: 'Brachychiton populneus', nombre: 'Braquiquito' },
  { id: '48', nombreCientifico: 'Eucalyptus sp.', nombre: 'Eucalipto' },
  { id: '49', nombreCientifico: 'Pinus halepensis', nombre: 'Pino de Alepo' }
];

/**
 * Normaliza un nombre científico para buscar carpetas
 * Maneja variaciones comunes en los nombres
 */
function normalizeScientificName(name) {
  // Normalización base
  let normalized = name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/\./g, '')
    .replace(/[áäàâ]/g, 'a')
    .replace(/[éëèê]/g, 'e')
    .replace(/[íïìî]/g, 'i')
    .replace(/[óöòô]/g, 'o')
    .replace(/[úüùû]/g, 'u');
  
  return normalized;
}

/**
 * Normaliza un nombre común para el slug de archivo
 */
function normalizeCommonName(name) {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Quitar acentos
    .replace(/\s+/g, '')
    .replace(/[^a-z0-9]/g, '');
}

/**
 * Encuentra la carpeta fuente que corresponde al nombre científico
 */
function findSourceFolder(nombreCientifico) {
  const normalized = normalizeScientificName(nombreCientifico);
  
  // Listar todas las carpetas en "Fotos plazas"
  const folders = fs.readdirSync(SOURCE_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  // Mapeo de variaciones comunes y typos
  const variations = [
    normalized,
    normalized.replace(/ sp$/, ' sp_'),
    normalized.replace(/ sp_$/, ' sp'),
    normalized.split(' ')[0] + ' ' + normalized.split(' ')[1], // Solo género y especie
    normalized.split(' y ')[0], // Primera parte si hay "y"
    normalized.replace(/ y .*$/, ''), // Quitar todo después de "y"
    // Typos comunes en carpetas
    normalized.replace('cercis', 'cersis'),
    normalized.replace('evonimus', 'evonimous'),
    normalized.replace('cupressus', 'cupresus'),
    normalized.replace('lagerstroemia', 'lagestroemia'),
    normalized.replace('styraciflua', 'stiracyflua'),
    normalized.replace('hippocastanum', 'hipocastanum'),
    normalized.replace('brachychiton', 'brachichyton'),
    normalized.replace('azedarach', 'azerarach'),
    normalized.replace('griffithii', 'grifithii'),
    normalized.replace('angus-castus', 'agnus castus'),
    normalized.replace('angus castus', 'agnus castus'),
    // Variaciones con guión bajo o sin nombre específico
    normalized.split(' ')[0], // Solo el género (ej: Magnolia, Tilia)
    normalized.split(' ')[0] + '_', // Género con guión bajo
    normalized.split(' ')[0] + ' sp_', // Género + sp_
    normalized.split(' ')[0] + ' sp' // Género + sp
  ];
  
  // Buscar coincidencia
  for (const variation of variations) {
    const match = folders.find(folder => {
      const folderNorm = normalizeScientificName(folder);
      return folderNorm === variation || 
             folderNorm.startsWith(variation) ||
             variation.startsWith(folderNorm);
    });
    
    if (match) {
      return match;
    }
  }
  
  return null;
}

/**
 * Obtiene todas las imágenes de una carpeta fuente
 */
function getSourceImages(sourceFolder) {
  const sourcePath = path.join(SOURCE_DIR, sourceFolder);
  
  return fs.readdirSync(sourcePath)
    .filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
    })
    .sort(); // Ordenar alfabéticamente
}



/**
 * Procesa una planta: copia y renombra sus imágenes
 */
function processPlanta(planta) {
  const { id, nombreCientifico, nombre } = planta;
  const nombreSlug = normalizeCommonName(nombre);
  const paddedId = id.padStart(2, '0');
  
  // Crear carpeta destino
  const targetFolder = path.join(TARGET_DIR, id);
  
  // SIEMPRE borrar todas las imágenes existentes primero (incluso si no hay fuente)
  if (!DRY_RUN) {
    if (fs.existsSync(targetFolder)) {
      const existingFiles = fs.readdirSync(targetFolder);
      existingFiles.forEach(file => {
        const filePath = path.join(targetFolder, file);
        if (fs.statSync(filePath).isFile()) {
          fs.unlinkSync(filePath);
        }
      });
    } else {
      fs.mkdirSync(targetFolder, { recursive: true });
    }
  }
  
  // Buscar carpeta fuente
  const sourceFolder = findSourceFolder(nombreCientifico);
  if (!sourceFolder) {
    return { success: false, id, nombre, nombreCientifico, reason: 'No se encontró carpeta fuente' };
  }
  
  // Obtener imágenes
  const images = getSourceImages(sourceFolder);
  if (images.length === 0) {
    return { success: false, id, nombre, nombreCientifico, reason: 'No hay imágenes en la carpeta' };
  }
  
  if (!DRY_RUN) {
    
    // Copiar todas las nuevas imágenes
    images.forEach((image, index) => {
      const imageNumber = index + 1;
      const sourcePath = path.join(SOURCE_DIR, sourceFolder, image);
      const ext = path.extname(image).toLowerCase();
      const targetFileName = `${paddedId}-${nombreSlug}-${imageNumber}${ext}`;
      const targetPath = path.join(targetFolder, targetFileName);
      fs.copyFileSync(sourcePath, targetPath);
    });
    
    // Borrar la carpeta fuente después de copiar exitosamente
    const sourceFolderPath = path.join(SOURCE_DIR, sourceFolder);
    fs.rmSync(sourceFolderPath, { recursive: true, force: true });
  }
  
  return { 
    success: true, 
    id, 
    nombre, 
    nombreCientifico,
    sourceFolder,
    imageCount: images.length
  };
}

/**
 * Función principal
 */
function main() {
  // Verificar que existan las carpetas
  if (!fs.existsSync(SOURCE_DIR)) {
    console.error(`❌ Error: No se encuentra la carpeta "${SOURCE_DIR}"`);
    process.exit(1);
  }
  
  if (!fs.existsSync(TARGET_DIR)) {
    if (!DRY_RUN) {
      fs.mkdirSync(TARGET_DIR, { recursive: true });
    }
  }
  
  // Procesar todas las plantas (silenciosamente)
  const results = PLANTAS_MAP.map(processPlanta);
  
  // Mostrar solo carpetas sin procesar
  const failed = results.filter(r => !r.success);
  
  if (failed.length > 0) {
    console.log('\n📂 Carpetas ID sin nuevas imágenes:');
    failed.forEach(f => {
      console.log(`   - ID ${f.id}: ${f.nombre}`);
    });
  }
  
  // Mostrar carpetas fuente que quedaron sin procesar
  if (fs.existsSync(SOURCE_DIR)) {
    const remainingFolders = fs.readdirSync(SOURCE_DIR, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);
    
    if (remainingFolders.length > 0) {
      console.log('\n📁 Carpetas fuente sin procesar:');
      remainingFolders.forEach(folder => {
        console.log(`   - ${folder}`);
      });
    }
  }
  
  if (failed.length === 0 && (!fs.existsSync(SOURCE_DIR) || fs.readdirSync(SOURCE_DIR, { withFileTypes: true }).filter(d => d.isDirectory()).length === 0)) {
    console.log('\n✅ Todas las plantas procesadas correctamente');
  }
}

// Ejecutar
main();
