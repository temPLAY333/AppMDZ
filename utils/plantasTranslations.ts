import plantas, { plantasPorId } from '../data/plantas';
import { Planta } from '../data/types';
// Migrated to new localization system - no longer needed

// Función para actualizar todas las plantas con descripciones multilingües
// Esta función ya no es necesaria ya que todas las plantas ahora tienen descripciones multilingües
// Se mantiene por compatibilidad con código existente
export const actualizarDescripcionesPlantasMultilingues = () => {
  console.log('Todas las plantas ya utilizan descripciones multilingües');
  // Ya no es necesario hacer nada aquí, todas las plantas ya tienen descripciones multilingües
};

// Obtener traducciones predefinidas para plantas específicas
const getTranslatedDescription = (plantaId: string): string => {
  const translations: Record<string, string> = {
    '1': 'Found in Independence, Chile, and Spain squares. It\'s a tree that grows to 6-12 m tall. Alternate bipinnate leaves. Small yellow flowers clustered in heads. Its fruit is a glabrous, thin, brown pod that splits open when ripe. Belongs to the Fabaceae family.',
    '2': 'Located in Spain and San Martín squares. It\'s a tree that averages 8-15 m in height, potentially reaching 45 m. Alternate bipinnate leaves that later fall and are replaced by phyllodes (dilated petiole that performs photosynthetic function). Small pale yellow flowers grouped in heads. Its fruit is a reddish-brown pod. Belongs to the Fabaceae family.',
    '3': 'Located in Independence Square. It\'s a tree that reaches between 17 to 27 m in height. Large compound pinnate leaves, with nectaries at the base of the leaflet. Unisexual flowers. It has root suckers. Its fruit is a samara. Belongs to the Simaroubaceae family.',
    '4': 'Located in Spain Square. It\'s a tree with large buds, opposite and palmate, deciduous leaves. Its flowers are white, large and grouped in clusters. The fruit is a capsule with a spiny wrapping; its seed should not be ingested as it contains a toxin called aesculin. Belongs to the Hippocastanaceae family.',
    // Añadir más traducciones según sea necesario
  };

  // Devolver la traducción si existe, o un mensaje de que no está disponible
  return translations[plantaId] || 'Translation not available yet';
};
