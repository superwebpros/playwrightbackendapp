"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const replaceSpacesAndAmpersands = (str) => {
    // Replace spaces and ampersands with dashes
    str = str.replace(/[\s&]/g, "-");
    // Convert to lowercase
    str = str.toLowerCase();
    return str;
};
exports.default = replaceSpacesAndAmpersands;
