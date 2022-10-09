"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var storage_1 = require("./storage");
function loadSettings() {
    var settings = (0, storage_1.loadFromStorage)('prefs');
    Object.freeze(settings);
    return settings;
}
function changeSetting(settings, key, value) {
    var _a;
    var newSettings = __assign(__assign({}, settings), (_a = {}, _a[key] = value, _a));
    (0, storage_1.saveInStorage)(newSettings);
    return newSettings;
}
function main() {
    var settings = loadSettings();
    // Bad because it doesn't save them!
    //settings.language = "fr-FR";
    // Do this instead!
    settings = changeSetting(settings, "language", "fr-FR");
}
main();
//# sourceMappingURL=index.js.map