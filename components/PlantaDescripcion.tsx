import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Planta, DescripcionesPlanta } from '../data/types';
import { useLanguage } from '../contexts/LanguageContext';

interface PlantaDescripcionProps {
  planta?: Planta;
  descripcion?: string;
  descripcionesMultilingue?: DescripcionesPlanta;
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
  const { language } = useLanguage();
  
  // Obtener la descripción según el idioma
  const getDescripcion = () => {
    // Si se proporciona una planta completa
    if (planta) {
      // Ahora todas las plantas deberían tener descripcionesMultilingue
      return planta.atributos.descripcionesMultilingue[language as keyof DescripcionesPlanta] || 
             planta.atributos.descripcionesMultilingue.es;
    }
    
    // Si se proporcionan descripciones multilingües directamente
    if (descripcionesMultilingue) {
      return descripcionesMultilingue[language as keyof DescripcionesPlanta] || 
             descripcionesMultilingue.es;
    }
    
    // Si solo se proporciona una descripción (para compatibilidad con versiones anteriores)
    // En el futuro esta parte podría eliminarse ya que todas las plantas deberían usar descripcionesMultilingue
    return descripcion || '';
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
    lineHeight: 20,
    color: '#000000',
  },
});

export default PlantaDescripcion;