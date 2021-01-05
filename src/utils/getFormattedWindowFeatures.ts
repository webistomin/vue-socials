import { IWindowFeatures } from '@/types/common/windowFeatures';

/**
 * A simple function to format object to window.open() string features.
 * It formats all values to a number.
 * @example { width: 500, menubar: true, toolbar: false } => 'width=500,menubar=1,toolbar=0'
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Window/open#Window_features
 */
export default function getFormattedWindowFeatures(object: IWindowFeatures): string {
  const keys = Object.keys(object) as Array<keyof typeof object>;

  return keys
    .map((key) => `${key}=${Number(object[key])}`)
    .join(',');
}
