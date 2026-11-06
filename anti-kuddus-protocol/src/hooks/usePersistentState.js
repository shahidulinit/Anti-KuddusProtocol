import { useEffect, useState } from "react";

/*
 * Browser persistence for the deployed website. The previous implementation
 * depended on window.storage, an API that exists in some preview sandboxes but
 * not in a normal browser or on GitHub Pages.
 */
function readValue(key) {
  try {
    const value = window.localStorage.getItem(key);
    return value === null ? null : JSON.parse(value);
  } catch {
    return null;
  }
}

function writeValue(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage can be unavailable in private/restricted browsing contexts.
  }
}

export function usePersistentState(key, initialValue) {
  const [state, setState] = useState(initialValue);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    let cancelled = false;
    try {
      const storedValue = readValue(key);
      if (!cancelled && storedValue !== null) setState(storedValue);
    } finally {
      if (!cancelled) setHydrated(true);
    }
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  useEffect(() => {
    if (hydrated) writeValue(key, state);
  }, [state, hydrated, key]);

  return [state, setState, hydrated];
}

export async function loadKey(key) {
  return readValue(key);
}

export async function saveKey(key, value) {
  writeValue(key, value);
}

export async function clearKey(key) {
  try {
    window.localStorage.removeItem(key);
  } catch {
    // Storage can be unavailable in private/restricted browsing contexts.
  }
}
