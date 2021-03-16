export interface IParamsObject {
  [key: string]: string | number | boolean | undefined | null;
}

/**
 * A simple function to format object to GET parameters.
 * It skips undefined, null, and NaN values.
 * @example { foo: 'bar', bar: undefined, foobar: 'foo bar', } => '?foo=bar&foobar=foo%20bar'
 * @example { foo: null, bar: undefined, foobar: NaN, } => ''
 */
export default function getSerialisedParams(object: IParamsObject): string {
  const params = Object.entries(object)
    .filter((param) => param[1] !== undefined && param[1] !== null && !Number.isNaN(param[1]) && param[1] !== '')
    .map((param) => `${encodeURIComponent(param[0])}=${encodeURIComponent(String(param[1]))}`);

  return params.length > 0 ? `?${params.join('&')}` : '';
}
