"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AskAI = AskAI;
const jsx_runtime_1 = require("react/jsx-runtime");
const md_1 = require("react-icons/md");
const bubble_menu_button_1 = require("../bubble-menu/bubble-menu-button");
function AskAI({ onSelect }) {
    return ((0, jsx_runtime_1.jsx)(bubble_menu_button_1.BubbleMenuButton, { action: onSelect, isActive: false, className: "flex space-x-2 items-center", children: (0, jsx_runtime_1.jsx)(md_1.MdOutlineAutoAwesome, { className: "size-4" }) }));
}
