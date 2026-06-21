/**
 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by the bundler.
 */
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.svg' {
  import * as React from 'react';
  const svgUrl: string;
  const ReactComponent: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default svgUrl;
  export { ReactComponent };
}
