export interface StorageArea {
  get: (key: string) => Promise<Record<string, unknown>>;
  set: (items: Record<string, unknown>) => Promise<void>;
}

const localStorageArea: StorageArea = {
  get: async (key) => {
    const raw = localStorage.getItem(key);
    return { [key]: raw ? JSON.parse(raw) : undefined };
  },
  set: async (items) => {
    Object.entries(items).forEach(([key, value]) => {
      localStorage.setItem(key, JSON.stringify(value));
    });
  },
};

const globalBrowser = (globalThis as { browser?: { storage: { local: StorageArea } } }).browser;

export const browser = globalBrowser ?? { storage: { local: localStorageArea } };
