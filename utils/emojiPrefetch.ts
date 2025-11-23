// Prefetch de emojis Twemoji frecuentes para mejorar tiempos de primera visualización
// Web-only: crea objetos Image y deja que el navegador los cachee.
import { getTwemojiUrl } from './twemojiSetup';

// Lista de emojis frecuentes (extensible)
export const COMMON_EMOJIS: string[] = [
  '🎖️','🇦🇷','🇪🇸','🇮🇹','🇨🇱','🇧🇷','🪵','💰','🌲','💧','🌳','🌱','❄️'
];

let started = false;

export function prefetchCommonEmojis(): void {
  if (started || typeof window === 'undefined') return;
  started = true;
  COMMON_EMOJIS.forEach(e => {
    const url = getTwemojiUrl(e);
    const img = new Image();
    img.src = url; // Dispara fetch y caching
  });
}

// Prefetch custom list (por si necesitas otras en algún punto)
export function prefetchEmojis(list: string[]): void {
  if (typeof window === 'undefined') return;
  list.forEach(e => {
    const url = getTwemojiUrl(e);
    const img = new Image();
    img.src = url;
  });
}
