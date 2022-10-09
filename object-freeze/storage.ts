export function loadFromStorage<T>(key: string) {
    return {
        language: "en-US",
        displayName: "James"
    } as unknown as T;
}

export function saveInStorage<T>(obj: T) {
    // nothing
}