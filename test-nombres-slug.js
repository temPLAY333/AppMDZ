// Test para verificar que los nombres slug coincidan con los archivos existentes

// Simulamos la función nombreASlug
const nombreASlug = (nombre) => {
  return nombre
    .toLowerCase()
    .normalize('NFD') // Descomponer acentos
    .replace(/[\u0300-\u036f]/g, '') // Remover marcas diacríticas
    .replace(/[^a-z0-9\s]/g, '') // Solo letras, números y espacios
    .trim()
    .replace(/\s+/g, '-'); // Espacios a guiones
};

// Algunos nombres de prueba
const nombres = [
  'Falsa Acacia',
  'Plátano', 
  'Cedro del Himalaya',
  'Árbol de Júpiter',
  'Liquidámbar Americano'
];

console.log('🧪 Pruebas de conversión de nombres a slug:');
nombres.forEach(nombre => {
  const slug = nombreASlug(nombre);
  console.log(`"${nombre}" → "${slug}"`);
});

// Verificar contra nombres esperados en archivos
const esperados = {
  'Falsa Acacia': 'falsa-acacia',
  'Plátano': 'platano',
  'Cedro del Himalaya': 'cedro-del-himalaya'
};

console.log('\n✅ Verificación contra archivos existentes:');
Object.entries(esperados).forEach(([nombre, esperado]) => {
  const generado = nombreASlug(nombre);
  const coincide = generado === esperado;
  console.log(`${coincide ? '✅' : '❌'} "${nombre}": generado="${generado}", esperado="${esperado}"`);
});