/// <reference types="vite/client" />

interface CalNamespace {
  (action: string, config: any): void;
}

interface Window {
  Cal?: {
    (action: string, namespace: string, config: any): void;
    ns: {
      [key: string]: CalNamespace;
    };
  };
}
