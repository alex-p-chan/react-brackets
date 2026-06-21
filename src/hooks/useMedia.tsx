import { useCallback, useSyncExternalStore } from 'react';

const supportsMatchMedia = () => typeof window !== 'undefined' && typeof window.matchMedia === 'function';

export default function useMedia(breakPoint: number) {
  const query = `(max-width: ${breakPoint}px)`;

  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      if (!supportsMatchMedia()) return () => {};

      const mediaQueryList = window.matchMedia(query);
      mediaQueryList.addEventListener('change', onStoreChange);

      // Remove the listener when the breakpoint changes or the component unmounts.
      return () => mediaQueryList.removeEventListener('change', onStoreChange);
    },
    [query]
  );

  const getSnapshot = useCallback(() => (supportsMatchMedia() ? window.matchMedia(query).matches : false), [query]);

  // Checking window object to support server side rendering.
  const getServerSnapshot = () => false;

  // the return value should be true or false
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
