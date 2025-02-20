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
exports.ComboboxDropdown = ComboboxDropdown;
const jsx_runtime_1 = require("react/jsx-runtime");
const lucide_react_1 = require("lucide-react");
const React = __importStar(require("react"));
const cmdk_1 = require("cmdk");
const utils_1 = require("../utils");
const button_1 = require("./button");
const command_1 = require("./command");
const popover_1 = require("./popover");
function ComboboxDropdown({ headless, placeholder, searchPlaceholder, items, onSelect, selectedItem: incomingSelectedItem, renderSelectedItem = (item) => item.label, renderListItem, renderOnCreate, emptyResults, popoverProps, disabled, onCreate, className, }) {
    const [open, setOpen] = React.useState(false);
    const [internalSelectedItem, setInternalSelectedItem] = React.useState();
    const [inputValue, setInputValue] = React.useState("");
    const selectedItem = incomingSelectedItem ?? internalSelectedItem;
    const filteredItems = items.filter((item) => item.label.toLowerCase().includes(inputValue.toLowerCase()));
    const showCreate = onCreate && Boolean(inputValue) && !filteredItems.length;
    const Component = ((0, jsx_runtime_1.jsxs)(command_1.Command, { loop: true, shouldFilter: false, children: [(0, jsx_runtime_1.jsx)(command_1.CommandInput, { value: inputValue, onValueChange: setInputValue, placeholder: searchPlaceholder ?? "Search item...", className: "px-3" }), (0, jsx_runtime_1.jsx)(command_1.CommandGroup, { children: (0, jsx_runtime_1.jsxs)(cmdk_1.CommandList, { className: "max-h-[225px] overflow-auto", children: [filteredItems.map((item) => {
                            const isChecked = selectedItem?.id === item.id;
                            return ((0, jsx_runtime_1.jsx)(command_1.CommandItem, { disabled: item.disabled, className: (0, utils_1.cn)("cursor-pointer", className), value: item.id, onSelect: (id) => {
                                    const foundItem = items.find((item) => item.id === id);
                                    if (!foundItem) {
                                        console.log("No item found", id);
                                        return;
                                    }
                                    onSelect(foundItem);
                                    setInternalSelectedItem(foundItem);
                                    setOpen(false);
                                }, children: renderListItem ? (renderListItem({ isChecked, item })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Check, { className: (0, utils_1.cn)("mr-2 h-4 w-4", isChecked ? "opacity-100" : "opacity-0") }), item.label] })) }, item.id));
                        }), (0, jsx_runtime_1.jsx)(command_1.CommandEmpty, { children: emptyResults ?? "No item found" }), showCreate && ((0, jsx_runtime_1.jsx)(command_1.CommandItem, { value: inputValue, onSelect: () => {
                                onCreate(inputValue);
                                setOpen(false);
                                setInputValue("");
                            }, onMouseDown: (event) => {
                                event.preventDefault();
                                event.stopPropagation();
                            }, children: renderOnCreate ? renderOnCreate(inputValue) : null }, inputValue))] }) })] }));
    if (headless) {
        return Component;
    }
    return ((0, jsx_runtime_1.jsxs)(popover_1.Popover, { open: open, onOpenChange: setOpen, modal: true, children: [(0, jsx_runtime_1.jsx)(popover_1.PopoverTrigger, { asChild: true, disabled: disabled, className: "w-full", children: (0, jsx_runtime_1.jsxs)(button_1.Button, { variant: "outline", "aria-expanded": open, className: "w-full justify-between relative", children: [(0, jsx_runtime_1.jsx)("span", { className: "truncate text-ellipsis pr-3", children: selectedItem
                                ? (((0, jsx_runtime_1.jsx)("span", { className: "flex items-center overflow-hidden whitespace-nowrap text-ellipsis block", children: renderSelectedItem?.(selectedItem) })) ?? selectedItem.label)
                                : (placeholder ?? "Select item...") }), (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronsUpDown, { className: "size-4 opacity-50 absolute right-2" })] }) }), (0, jsx_runtime_1.jsx)(popover_1.PopoverContent, { className: "p-0", ...popoverProps, style: {
                    width: "var(--radix-popover-trigger-width)",
                    ...popoverProps?.style,
                }, children: Component })] }));
}
