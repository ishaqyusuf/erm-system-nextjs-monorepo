"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuantityInput = QuantityInput;
const jsx_runtime_1 = require("react/jsx-runtime");
const lucide_react_1 = require("lucide-react");
const React = __importStar(require("react"));
const utils_1 = require("../utils");
function QuantityInput({ value = 0, min = Number.NEGATIVE_INFINITY, max = Number.POSITIVE_INFINITY, onChange, onBlur, onFocus, className, }) {
    const inputRef = React.useRef(null);
    const [rawValue, setRawValue] = React.useState(String(value));
    const handleInput = ({ currentTarget: el, }) => {
        const input = el.value;
        setRawValue(input);
        // Check if input can be parsed as a valid number
        const num = Number.parseFloat(input);
        if (!Number.isNaN(num) && min <= num && num <= max) {
            onChange?.(num);
        }
    };
    const handlePointerDown = (diff) => (event) => {
        if (event.pointerType === "mouse") {
            event.preventDefault();
            inputRef.current?.focus();
        }
        const newVal = Math.min(Math.max(value + diff, min), max);
        onChange?.(newVal);
        setRawValue(String(newVal));
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, utils_1.cn)("group flex items-stretch transition-[box-shadow] font-mono", className), children: [(0, jsx_runtime_1.jsx)("button", { "aria-label": "Decrease", className: "flex items-center pr-[.325em]", disabled: value <= min, onPointerDown: handlePointerDown(-1), type: "button", tabIndex: -1, children: (0, jsx_runtime_1.jsx)(lucide_react_1.Minus, { className: "size-2", absoluteStrokeWidth: true, strokeWidth: 3.5, tabIndex: -1 }) }), (0, jsx_runtime_1.jsx)("div", { className: "relative grid items-center justify-items-center text-center", children: (0, jsx_runtime_1.jsx)("input", { ref: inputRef, className: "flex w-8 text-center transition-colors file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 p-0 border-0 h-6 text-xs !bg-transparent border-b border-transparent focus:border-border [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]", style: { fontKerning: "none" }, type: "number", min: min, max: max, autoComplete: "off", step: 0.1, value: rawValue, onInput: handleInput, onBlur: onBlur, onFocus: onFocus, inputMode: "decimal" }) }), (0, jsx_runtime_1.jsx)("button", { "aria-label": "Increase", className: "flex items-center pl-[.325em]", disabled: value >= max, onPointerDown: handlePointerDown(1), type: "button", tabIndex: -1, children: (0, jsx_runtime_1.jsx)(lucide_react_1.Plus, { className: "size-2", absoluteStrokeWidth: true, strokeWidth: 3.5, tabIndex: -1 }) })] }));
}
