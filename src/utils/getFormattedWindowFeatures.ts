import { IWindowFeatures } from '@/types/windowFeatures';

export default function getFormattedWindowFeatures(object: IWindowFeatures): string {
  const keys = Object.keys(object) as Array<keyof typeof object>;

  return keys
    .map((key) => `${key}=${Number(object[key])}`)
    .join(',');
}
