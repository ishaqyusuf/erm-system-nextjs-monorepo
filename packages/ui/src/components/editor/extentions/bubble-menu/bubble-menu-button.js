"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BubbleMenuButton = BubbleMenuButton;
const jsx_runtime_1 = require("react/jsx-runtime");
function BubbleMenuButton({ action, isActive, children, className, }) {
    return ((0, jsx_runtime_1.jsx)("button", { type: "button", onClick: action, className: `px-2.5 py-1.5 text-[11px] font-mono transition-colors ${className} ${isActive
            ? "bg-white dark:bg-stone-900 text-primary"
            : "bg-transparent hover:bg-muted"}`, children: children }));
}
