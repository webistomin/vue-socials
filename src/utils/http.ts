export type THTTPCallback<T> = (err: string | null, data: T | null) => void;

/**
 * Simple implementation of XMLHTTPRequest.
 * It uses callback to prevent adding the promise polyfill.
 */
export default function HTTP<T>(url: string, callback: THTTPCallback<T>): void {
  const request = new XMLHttpRequest();
  request.open('GET', url);

  request.onload = function onLoad() {
    if (request.readyState === 4 && request.status === 200) {
      callback(null, JSON.parse(request.response));
    }
  };

  request.onerror = function onError() {
    callback(request.statusText, null);
  };

  request.send();
}
