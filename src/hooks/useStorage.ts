import { useCallback, useState, useEffect } from "react";

type StorageType = "localStorage" | "sessionStorage";

function useStorage<T>(key: string, defaultValue: T, storageType: StorageType) {
  const storageObject =
    storageType === "localStorage"
      ? window.localStorage
      : window.sessionStorage;

  const [value, setValue] = useState<T>(() => {
    const jsonValue = storageObject.getItem(key);

    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof defaultValue === "function") {
      return defaultValue();
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    if (value === undefined) return storageObject.removeItem(key);
    storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);

  const remove = useCallback(() => {
    setValue(defaultValue);
  }, []);

  return [value, setValue, remove] as const;
}

export function useLocalStorage<T>(key: string, defaultValue: T) {
  return useStorage(key, defaultValue, "localStorage");
}

export function useSessionStorage<T>(key: string, defaultValue: T) {
  return useStorage(key, defaultValue, "sessionStorage");
}
