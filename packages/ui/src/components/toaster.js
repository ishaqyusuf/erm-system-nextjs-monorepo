"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toaster = Toaster;
const jsx_runtime_1 = require("react/jsx-runtime");
const lucide_react_1 = require("lucide-react");
const icons_1 = require("./icons");
const progress_1 = require("./progress");
const toast_1 = require("./toast");
const use_toast_1 = require("./use-toast");
function Toaster() {
    const { toasts } = (0, use_toast_1.useToast)();
    return ((0, jsx_runtime_1.jsxs)(toast_1.ToastProvider, { children: [toasts.map(({ id, title, description, progress = 0, action, footer, ...props }) => {
                return ((0, jsx_runtime_1.jsxs)(toast_1.Toast, { ...props, className: "flex flex-col", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex w-full", children: [(0, jsx_runtime_1.jsxs)("div", { className: "space-y-2 w-full justify-center", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex space-x-2 justify-between", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex space-x-2 items-center", children: [props?.variant && ((0, jsx_runtime_1.jsxs)("div", { className: "w-[20px] h-[20px] flex items-center", children: [props.variant === "ai" && ((0, jsx_runtime_1.jsx)(icons_1.Icons.AI, { className: "text-[#0064D9]" })), props?.variant === "success" && (0, jsx_runtime_1.jsx)(icons_1.Icons.Check, {}), props?.variant === "error" && ((0, jsx_runtime_1.jsx)(icons_1.Icons.Error, { className: "text-[#FF3638]" })), props?.variant === "progress" && ((0, jsx_runtime_1.jsx)(lucide_react_1.Loader2, { className: "h-4 w-4 animate-spin" })), props?.variant === "spinner" && ((0, jsx_runtime_1.jsx)(lucide_react_1.Loader2, { className: "h-4 w-4 animate-spin" }))] })), (0, jsx_runtime_1.jsx)("div", { children: title && (0, jsx_runtime_1.jsx)(toast_1.ToastTitle, { children: title }) })] }), (0, jsx_runtime_1.jsx)("div", { children: props?.variant === "progress" && ((0, jsx_runtime_1.jsxs)("span", { className: "text-sm text-[#878787]", children: [progress, "%"] })) })] }), props.variant === "progress" && ((0, jsx_runtime_1.jsx)(progress_1.Progress, { value: progress, className: "w-full rounded-none h-[3px] bg-border" })), description && ((0, jsx_runtime_1.jsx)(toast_1.ToastDescription, { children: description }))] }), action, (0, jsx_runtime_1.jsx)(toast_1.ToastClose, {})] }), (0, jsx_runtime_1.jsx)("div", { className: "w-full flex justify-end", children: footer })] }, id));
            }), (0, jsx_runtime_1.jsx)(toast_1.ToastViewport, {})] }));
}
