"use strict";
// You can find the list of extensions here: https://tiptap.dev/docs/editor/extensions/functionality
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerExtensions = registerExtensions;
const extension_link_1 = __importDefault(require("@tiptap/extension-link"));
const extension_placeholder_1 = __importDefault(require("@tiptap/extension-placeholder"));
const extension_underline_1 = __importDefault(require("@tiptap/extension-underline"));
const starter_kit_1 = __importDefault(require("@tiptap/starter-kit"));
// Add your extensions here
const extensions = [
    starter_kit_1.default,
    extension_underline_1.default,
    extension_link_1.default.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
    }),
];
function registerExtensions(options) {
    const { placeholder } = options ?? {};
    return [...extensions, extension_placeholder_1.default.configure({ placeholder })];
}
