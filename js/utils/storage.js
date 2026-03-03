export function setStorage(key, value) {
    // Si valeur null ou undefined → on supprime la clé
    if (value === undefined || value === null) {
        localStorage.removeItem(key);
        return;
    }

    localStorage.setItem(key, JSON.stringify(value));
}

export function getStorage(key, fallback = null) {
    const raw = localStorage.getItem(key);

    // Si rien en storage → fallback
    if (raw === null) return fallback;

    try {
        return JSON.parse(raw);
    } catch (error) {
        console.warn(`Storage parsing error for key "${key}"`, error);
        return fallback;
    }
}

export function removeStorage(key) {
    localStorage.removeItem(key);
}

export function clearStorage() {
    localStorage.clear();
}