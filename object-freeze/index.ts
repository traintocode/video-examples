import { loadFromStorage, saveInStorage } from "./storage";

type Settings = {
    language: string,
    displayName: string
}

function loadSettings(): Settings {
    const settings = loadFromStorage<Settings>('prefs');
    Object.freeze(settings);
    return settings;
}

function changeSetting(settings: Settings, key: keyof Settings, value: string) {
    const newSettings = {
        ...settings,
        [key]: value
    };
    saveInStorage(newSettings);
    return newSettings;
}


function main() {
    let settings = loadSettings();

    // Bad because it doesn't save them!
    settings.language = "fr-FR";

    // Do this instead!
    settings = changeSetting(settings, "language", "fr-FR");

}

main();