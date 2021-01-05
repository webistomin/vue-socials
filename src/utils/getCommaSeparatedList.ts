import { isArray } from '@/utils/inspect';

/**
 * A simple function to format array to a comma-separated list.
 * @param array
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/no-explicit-any
export function getCommaSeparatedList(array: any): string {
  if (isArray(array)) {
    return array.join(',');
  }

  return '';
}
