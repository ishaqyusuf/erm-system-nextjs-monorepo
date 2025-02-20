"use client";
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
exports.SelectScrollDownButton = exports.SelectScrollUpButton = exports.SelectSeparator = exports.SelectItem = exports.SelectLabel = exports.SelectContent = exports.SelectTrigger = exports.SelectValue = exports.SelectGroup = exports.Select = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_icons_1 = require("@radix-ui/react-icons");
const SelectPrimitive = __importStar(require("@radix-ui/react-select"));
const React = __importStar(require("react"));
const utils_1 = require("../utils");
const icons_1 = require("./icons");
const Select = SelectPrimitive.Root;
exports.Select = Select;
const SelectGroup = SelectPrimitive.Group;
exports.SelectGroup = SelectGroup;
const SelectValue = SelectPrimitive.Value;
exports.SelectValue = SelectValue;
const SelectTrigger = React.forwardRef(({ className, children, hideIcon = false, ...props }, ref) => ((0, jsx_runtime_1.jsxs)(SelectPrimitive.Trigger, { ref: ref, className: (0, utils_1.cn)("!flex h-9 w-full items-center justify-between whitespace-nowrap border border-border bg-transparent px-3 py-2 text-sm font-normal placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className), ...props, children: [(0, jsx_runtime_1.jsx)("span", { className: "line-clamp-1", children: children }), !hideIcon && ((0, jsx_runtime_1.jsx)("div", { className: "h-4 w-4", children: (0, jsx_runtime_1.jsx)(SelectPrimitive.Icon, { asChild: true, children: (0, jsx_runtime_1.jsx)(icons_1.Icons.ChevronDown, { className: "h-4 w-4" }) }) }))] })));
exports.SelectTrigger = SelectTrigger;
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
const SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)(SelectPrimitive.ScrollUpButton, { ref: ref, className: (0, utils_1.cn)("flex cursor-default items-center justify-center py-1", className), ...props, children: (0, jsx_runtime_1.jsx)(react_icons_1.ChevronUpIcon, {}) })));
exports.SelectScrollUpButton = SelectScrollUpButton;
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
const SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)(SelectPrimitive.ScrollDownButton, { ref: ref, className: (0, utils_1.cn)("flex cursor-default items-center justify-center py-1", className), ...props, children: (0, jsx_runtime_1.jsx)(react_icons_1.ChevronDownIcon, {}) })));
exports.SelectScrollDownButton = SelectScrollDownButton;
SelectScrollDownButton.displayName =
    SelectPrimitive.ScrollDownButton.displayName;
const SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => ((0, jsx_runtime_1.jsx)(SelectPrimitive.Portal, { children: (0, jsx_runtime_1.jsxs)(SelectPrimitive.Content, { ref: ref, className: (0, utils_1.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className), position: position, ...props, children: [(0, jsx_runtime_1.jsx)(SelectScrollUpButton, {}), (0, jsx_runtime_1.jsx)(SelectPrimitive.Viewport, { className: (0, utils_1.cn)("p-1", position === "popper" &&
                    "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"), children: children }), (0, jsx_runtime_1.jsx)(SelectScrollDownButton, {})] }) })));
exports.SelectContent = SelectContent;
SelectContent.displayName = SelectPrimitive.Content.displayName;
const SelectLabel = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)(SelectPrimitive.Label, { ref: ref, className: (0, utils_1.cn)("px-2 py-1.5 text-sm font-medium", className), ...props })));
exports.SelectLabel = SelectLabel;
SelectLabel.displayName = SelectPrimitive.Label.displayName;
const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => ((0, jsx_runtime_1.jsxs)(SelectPrimitive.Item, { ref: ref, className: (0, utils_1.cn)("relative flex w-full cursor-default select-none items-center py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className), ...props, children: [(0, jsx_runtime_1.jsx)("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: (0, jsx_runtime_1.jsx)(SelectPrimitive.ItemIndicator, { children: (0, jsx_runtime_1.jsx)(react_icons_1.CheckIcon, { className: "h-4 w-4" }) }) }), (0, jsx_runtime_1.jsx)(SelectPrimitive.ItemText, { children: children })] })));
exports.SelectItem = SelectItem;
SelectItem.displayName = SelectPrimitive.Item.displayName;
const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)(SelectPrimitive.Separator, { ref: ref, className: (0, utils_1.cn)("-mx-1 my-1 h-px bg-muted", className), ...props })));
exports.SelectSeparator = SelectSeparator;
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
