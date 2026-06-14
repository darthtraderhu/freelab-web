// components/Shield.tsx
"use client";
import { useEffect } from 'react';

export default function Shield() {
  useEffect(() => {
    // Csak éles (Production) vagy Dev környezetben is fusson
    const preventDefault = (e: Event) => e.preventDefault();

    // 1. Jobbklikk (Context Menu) letiltása
    document.addEventListener('contextmenu', preventDefault);

    // 2. Kódnéző Billentyűkombinációk letiltása (F12, Ctrl+U, Ctrl+Shift+I stb.)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') || // Windows Inspect
        (e.metaKey && e.altKey && e.key === 'I') ||   // Mac Inspect
        (e.ctrlKey && e.shiftKey && e.key === 'J') || // Windows Console
        (e.metaKey && e.altKey && e.key === 'J') ||   // Mac Console
        (e.ctrlKey && e.shiftKey && e.key === 'C') || // Windows Inspect Element
        (e.metaKey && e.shiftKey && e.key === 'C') || // Mac Inspect Element
        (e.ctrlKey && e.key === 'U') ||               // Windows Forráskód
        (e.metaKey && e.altKey && e.key === 'U') ||   // Mac Forráskód
        (e.ctrlKey && e.key === 'S') ||               // Windows Mentés
        (e.metaKey && e.key === 'S')                  // Mac Mentés
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // 3. Elemek "Húzásának" (Drag) letiltása
    document.addEventListener('dragstart', preventDefault);

    return () => {
      document.removeEventListener('contextmenu', preventDefault);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('dragstart', preventDefault);
    };
  }, []);

  return null; // Ez a komponens láthatatlan, csak a háttérben dolgozik!
}