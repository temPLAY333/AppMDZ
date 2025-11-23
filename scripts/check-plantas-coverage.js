/**
 * Verifica que todas las plantas estén en al menos una parada de alguna plaza
 */

const fs = require('fs');
const path = require('path');

// Leer todas las plantas del índice
const plantasFile = fs.readFileSync(path.join(__dirname, '..', 'data', 'plantas', 'index.ts'), 'utf-8');
const plantasMatches = plantasFile.matchAll(/id: '(\d+)'/g);
const todasLasPlantas = new Set();
for (const match of plantasMatches) {
  todasLasPlantas.add(match[1]);
}

// Leer todas las plazas
const plazasDir = path.join(__dirname, '..', 'data', 'plazas');
const plazasFiles = fs.readdirSync(plazasDir)
  .filter(f => f.endsWith('.ts') && f !== 'index.ts' && f !== 'plazas.ts');

const plantasEnPlazas = new Set();

plazasFiles.forEach(file => {
  const content = fs.readFileSync(path.join(plazasDir, file), 'utf-8');
  const matches = content.matchAll(/plantaId: '(\d+)'/g);
  for (const match of matches) {
    plantasEnPlazas.add(match[1]);
  }
});

// Encontrar plantas sin asignar
const plantasSinAsignar = [...todasLasPlantas].filter(id => !plantasEnPlazas.has(id));

console.log(`Total plantas en catálogo: ${todasLasPlantas.size}`);
console.log(`Plantas asignadas a plazas: ${plantasEnPlazas.size}`);
console.log(`Plantas SIN asignar: ${plantasSinAsignar.length}\n`);

if (plantasSinAsignar.length > 0) {
  console.log('Plantas sin asignar a ninguna parada:');
  plantasSinAsignar.sort((a, b) => parseInt(a) - parseInt(b)).forEach(id => {
    // Buscar nombre
    const nombreMatch = plantasFile.match(new RegExp(`id: '${id}'[\\s\\S]*?nombre: '([^']+)'`));
    const nombre = nombreMatch ? nombreMatch[1] : 'Desconocido';
    console.log(`  ID ${id}: ${nombre}`);
  });
} else {
  console.log('✅ Todas las plantas están asignadas a al menos una parada');
}
