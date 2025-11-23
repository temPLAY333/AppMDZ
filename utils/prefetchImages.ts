// Utilidad para pre-cargar imágenes en web usando objetos Image
// Evita bloquear la UI: retorna una promesa que resuelve cuando todas intentan cargar o tras timeout

export const prefetchImages = (paths: string[], timeoutMs: number = 3000): Promise<void> => {
  if (typeof window === 'undefined') return Promise.resolve();
  const start = performance.now();
  let completed = 0;
  return new Promise((resolve) => {
    const done = () => {
      if (completed >= paths.length) {
        resolve();
      }
    };
    const timer = setTimeout(() => {
      resolve(); // Timeout: seguimos sin bloquear splash
    }, timeoutMs);
    paths.forEach((p) => {
      try {
        const img = new Image();
        img.onload = () => {
          completed += 1; done();
        };
        img.onerror = () => {
          completed += 1; done();
        };
        img.src = p;
      } catch {
        completed += 1; done();
      }
    });
  });
};

// Prefetch inicial específico (IDs de plantas más usadas en arranque)
import { getPlantaImagenesPrueba } from '../data/imagenes';
export const prefetchInitialPlantImages = (): Promise<void> => {
  // IDs ejemplo: '1' y '2' usadas como fallback inicial
  const imgs = [
    ...getPlantaImagenesPrueba('1'),
    ...getPlantaImagenesPrueba('2')
  ];
  return prefetchImages(imgs);
};
