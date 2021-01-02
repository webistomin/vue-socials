export interface IParamsObject {
  [key: string]: string | number | boolean | undefined | null;
}

export default function getSerialisedParams(object: IParamsObject): string {
  const params = Object.entries(object)
    .filter(([, value]) => value !== undefined && value !== null && !Number.isNaN(value))
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);

  return params.length > 0 ? `?${params.join('&')}` : '';
}
