import { isArray } from '@/utils/inspect';

/**
 * A simple function to format array to a comma-separated list.
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/no-explicit-any
export default function getSeparatedList(array: any, separator = ','): string {
  if (isArray(array)) {
    return array.join(separator);
  }

  return '';
}
