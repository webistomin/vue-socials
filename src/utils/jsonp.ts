type TJSONPCallbackRegistryFunction<T> = (response: T) => void;

type TJSONPCallback<T> = (err: Error | null, data: T | null) => void;

declare global {
  interface Window {
    callbackRegistry: {
      [key: string]: TJSONPCallbackRegistryFunction<never>
    };
  }
}

/**
 * Simple implementation of JSONP.
 * It creates window.callbackRegistry to minimize global window pollution.
 * It uses callback to prevent adding the promise polyfill.
 */
export default function JSONP<T>(url: string, callback?: TJSONPCallback<T>): void {
  if (!window.callbackRegistry) {
    window.callbackRegistry = {};
  }

  const key = `cb${String(Math.random()).slice(-6)}`;

  const script = document.createElement('script');

  script.src = `${url}${url.indexOf('?') === -1 ? '?' : '&'}callback=callbackRegistry.${key}`;

  script.onerror = function JSONPOnError(): void {
    delete window.callbackRegistry[key];

    if (callback) {
      callback(new Error(), null);
    }
  };

  window.callbackRegistry[key] = function JSONPCallback(response: T): void {
    delete window.callbackRegistry[key];

    if (callback) {
      callback(null, response);
    }
  };

  document.head.removeChild(document.head.appendChild(script));
}
