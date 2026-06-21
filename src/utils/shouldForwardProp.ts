/*
 * styled-components v6 forwards every prop to the underlying DOM node unless told
 * otherwise. These are the custom styling props this library accepts; they must be
 * filtered out so they don't leak onto the DOM (and trigger React warnings) while
 * keeping the public component API unchanged (no `$`-prefixed transient props).
 */
const customProps = new Set(['mobileBreakpoint', 'isAdvancing']);

export const shouldForwardProp = (prop: string): boolean => !customProps.has(prop);
