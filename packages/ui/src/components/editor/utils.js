"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidUrlFormat = isValidUrlFormat;
exports.formatUrlWithProtocol = formatUrlWithProtocol;
function isValidUrlFormat(urlString) {
    try {
        new URL(urlString);
        return true;
    }
    catch (_error) {
        return false;
    }
}
function formatUrlWithProtocol(rawUrlString) {
    if (isValidUrlFormat(rawUrlString))
        return rawUrlString;
    try {
        if (rawUrlString.includes(".") && !rawUrlString.includes(" ")) {
            return new URL(`https://${rawUrlString}`).toString();
        }
    }
    catch (_error) {
        return null;
    }
}
