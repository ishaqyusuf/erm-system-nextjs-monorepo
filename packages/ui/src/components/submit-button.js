"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitButton = SubmitButton;
const jsx_runtime_1 = require("react/jsx-runtime");
const lucide_react_1 = require("lucide-react");
const utils_1 = require("../utils");
const button_1 = require("./button");
function SubmitButton({ children, isSubmitting, disabled, ...props }) {
    return ((0, jsx_runtime_1.jsxs)(button_1.Button, { disabled: isSubmitting || disabled, ...props, className: (0, utils_1.cn)(props.className, "relative"), children: [(0, jsx_runtime_1.jsx)("span", { className: (0, utils_1.cn)({ "opacity-0": isSubmitting }), children: children }), isSubmitting && ((0, jsx_runtime_1.jsx)("span", { className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2", children: (0, jsx_runtime_1.jsx)(lucide_react_1.Loader2, { className: "h-4 w-4 animate-spin" }) }))] }));
}
