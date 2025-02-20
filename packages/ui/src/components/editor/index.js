"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Editor = Editor;
const jsx_runtime_1 = require("react/jsx-runtime");
require("./styles.css");
const react_1 = require("@tiptap/react");
const bubble_menu_1 = require("./extentions/bubble-menu");
const register_1 = require("./extentions/register");
function Editor({ initialContent, placeholder, onUpdate, onBlur, onFocus, className, tabIndex, }) {
    const editor = (0, react_1.useEditor)({
        extensions: (0, register_1.registerExtensions)({ placeholder }),
        content: initialContent,
        immediatelyRender: false,
        onBlur,
        onFocus,
        onUpdate: ({ editor }) => {
            onUpdate?.(editor);
        },
    });
    if (!editor)
        return null;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(react_1.EditorContent, { editor: editor, className: className, tabIndex: tabIndex }), (0, jsx_runtime_1.jsx)(bubble_menu_1.BubbleMenu, { editor: editor })] }));
}
