import { IWindowFeatures } from '@/types/windowFeatures';

/**
 * A simple function to format object to window.open() string features.
 * It formats all values to a number.
 * @example { menubar: true, toolbar: false, location: true, } => 'menubar=1,toolbar=0,location=1'
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Window/open#Window_features
 */
export default function getFormattedWindowFeatures(object: IWindowFeatures): string {
  const keys = Object.keys(object) as Array<keyof typeof object>;

  return keys
    .map((key) => `${key}=${Number(object[key])}`)
    .join(',');
}
