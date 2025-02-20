"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BubbleMenuItem = BubbleMenuItem;
const jsx_runtime_1 = require("react/jsx-runtime");
const bubble_menu_button_1 = require("./bubble-menu-button");
function BubbleMenuItem({ editor, action, isActive, children, }) {
    return ((0, jsx_runtime_1.jsx)(bubble_menu_button_1.BubbleMenuButton, { action: () => {
            editor.chain().focus();
            action();
        }, isActive: isActive, children: children }));
}
