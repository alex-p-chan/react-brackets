import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.tsx'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  // Provided by the consuming application — keep them out of the bundle.
  external: ['react', 'react-dom', 'react-swipeable', 'styled-components'],
});
