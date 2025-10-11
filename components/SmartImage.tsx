import React, { useState } from 'react';
import { getImageUrl, getImageSources, ImageType, ImageSize } from '../utils/imageManager';

interface SmartImageProps {
  type: ImageType;
  identifier: string;
  size?: ImageSize;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  onError?: () => void;
}

/**
 * Componente inteligente que maneja formatos múltiples y fallbacks
 */
export const SmartImage: React.FC<SmartImageProps> = ({
  type,
  identifier,
  size,
  alt,
  className = '',
  loading = 'lazy',
  onError
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const sources = getImageSources(type, identifier, size);
  const fallbackSrc = getImageUrl(type, identifier, size, 'jpg');

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
    onError?.();
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  // Si hay error, mostrar imagen de fallback genérica
  if (hasError) {
    return (
      <img
        src={`/images/${type}s/fallback.webp`}
        alt={`${alt} (imagen no disponible)`}
        className={`${className} fallback-image`}
        loading={loading}
      />
    );
  }

  return (
    <div className={`image-container ${className}`}>
      {/* Skeleton loader mientras carga */}
      {isLoading && (
        <div className="image-skeleton" />
      )}
      
      {/* Picture element con múltiples formatos */}
      <picture>
        {sources.map(source => (
          <source
            key={source.type}
            srcSet={source.srcSet}
            type={source.type}
          />
        ))}
        <img
          src={fallbackSrc}
          alt={alt}
          className="smart-image"
          loading={loading}
          onError={handleError}
          onLoad={handleLoad}
          style={{ display: isLoading ? 'none' : 'block' }}
        />
      </picture>
    </div>
  );
};

/**
 * Hook para generar URLs de imágenes dinámicamente
 */
export const useImageUrl = (type: ImageType, identifier: string, size?: ImageSize) => {
  return React.useMemo(() => {
    return getImageUrl(type, identifier, size);
  }, [type, identifier, size]);
};