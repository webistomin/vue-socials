/**
 * Convenience inspection utilities
 */

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/no-explicit-any
export function isArray(value: any): boolean {
  return Array.isArray(value);
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/no-explicit-any
export function isUndefined(value: any): boolean {
  return value === undefined;
}
