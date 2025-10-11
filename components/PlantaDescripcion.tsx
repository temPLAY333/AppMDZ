import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Planta } from '../data/types';
import { useSimplePlant } from '../localization/PlantLocalization';

interface PlantaDescripcionMultilingue {
  es: string;
  en: string;
}

interface PlantaDescripcionProps {
  planta?: Planta;
  descripcion?: string;
  descripcionesMultilingue?: PlantaDescripcionMultilingue;
  style?: any;
}

/**
 * Componente para mostrar la descripción de una planta según el idioma seleccionado
 * Puede recibir una planta completa o una descripción/descripciones directamente
 */
const PlantaDescripcion: React.FC<PlantaDescripcionProps> = ({ 
  planta, 
  descripcion, 
  descripcionesMultilingue,
  style 
}) => {
  // Si tenemos una planta, usar el nuevo sistema
  const plantData = planta ? useSimplePlant(planta) : null;
  
  // Obtener la descripción según el idioma
  const getDescripcion = () => {
    // NUEVO: Si se proporciona una planta completa, usar sistema de plantas
    if (planta && plantData) {
      return plantData.description;
    }
    
    // LEGACY: Si se proporcionan descripciones multilingües directamente (para compatibilidad)
    if (descripcionesMultilingue) {
      return descripcionesMultilingue.es || descripcionesMultilingue.en;
    }
    
    // Fallback a descripción simple
    return descripcion || 'Sin descripción disponible';
  };

  return (
    <Text style={[styles.descripcion, style]}>
      {getDescripcion()}
    </Text>
  );
};

const styles = StyleSheet.create({
  descripcion: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    lineHeight: 26, // Aumentado el espaciado entre líneas
    color: '#000000',
  },
});

export default PlantaDescripcion;