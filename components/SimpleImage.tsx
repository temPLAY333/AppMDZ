import React, { useState } from 'react';
import { getSimpleImageUrl } from '../utils/plantaImageUtils';
import { Planta } from '../data/types';

interface SimpleImageProps {
  plantaId: string;
  plantas: Planta[];
  alt?: string;
  className?: string;
  onError?: () => void;
}

/**
 * Componente simplificado para mostrar una imagen de planta
 * Formato: ID-nombre-normalizado.webp
 */
export const SimpleImage: React.FC<SimpleImageProps> = ({
  plantaId,
  plantas,
  alt,
  className = '',
  onError
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const planta = plantas.find(p => p.id === plantaId);
  const imageUrl = getSimpleImageUrl(plantaId, plantas);
  const fallbackUrl = '/images/plantas/fallback.webp';
  const finalAlt = alt || planta?.atributos.nombre || 'Planta';

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
    onError?.();
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={`simple-image-container ${className}`}>
      {/* Loading skeleton */}
      {isLoading && (
        <div className="image-skeleton">
          <div className="skeleton-placeholder">
            🌱 Cargando imagen...
          </div>
        </div>
      )}
      
      {/* Main image */}
      <img
        src={hasError ? fallbackUrl : imageUrl}
        alt={hasError ? `${finalAlt} (imagen no disponible)` : finalAlt}
        className="plant-image"
        onError={handleError}
        onLoad={handleLoad}
        style={{ display: isLoading ? 'none' : 'block' }}
        loading="lazy"
      />
      
      {/* Error indicator */}
      {hasError && (
        <div className="error-indicator">
          ⚠️ Imagen no disponible
        </div>
      )}
    </div>
  );
};

/**
 * Hook para obtener URL de imagen dinámicamente
 */
export const useImageUrl = (plantaId: string, plantas: Planta[]) => {
  return React.useMemo(() => {
    return getSimpleImageUrl(plantaId, plantas);
  }, [plantaId, plantas]);
};

/**
 * Componente para plaza (con manejo de errores y loading)
 */
interface PlazaImageProps {
  plazaId: string; // 'san-martin', 'independencia', etc.
  alt?: string;
  className?: string;
  onError?: () => void;
}

export const PlazaImage: React.FC<PlazaImageProps> = ({
  plazaId,
  alt,
  className = '',
  onError
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Normalizar plazaId para asegurar formato correcto
  const normalizedId = plazaId.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/plaza\s*/g, '')
    .replace(/[áäàâ]/g, 'a')
    .replace(/[éëèê]/g, 'e')
    .replace(/[íïìî]/g, 'i')
    .replace(/[óöòô]/g, 'o')
    .replace(/[úüùû]/g, 'u')
    .replace(/ñ/g, 'n');
    
  const imageUrl = `/images/plazas/${normalizedId}.webp`;
  const fallbackUrl = '/images/plazas/fallback.webp';

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
    onError?.();
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={`plaza-image-container ${className}`}>
      {/* Loading skeleton */}
      {isLoading && (
        <div className="image-skeleton">
          <div className="skeleton-placeholder">
            🗺️ Cargando plaza...
          </div>
        </div>
      )}
      
      <img
        src={hasError ? fallbackUrl : imageUrl}
        alt={hasError ? `Plaza ${normalizedId} (imagen no disponible)` : (alt || `Plaza ${normalizedId}`)}
        className="plaza-image"
        onError={handleError}
        onLoad={handleLoad}
        style={{ display: isLoading ? 'none' : 'block' }}
        loading="lazy"
      />
      
      {/* Error indicator */}
      {hasError && (
        <div className="error-indicator">
          ⚠️ Imagen de plaza no disponible
        </div>
      )}
    </div>
  );
};