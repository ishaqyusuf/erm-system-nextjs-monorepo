"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateRangePicker = DateRangePicker;
const jsx_runtime_1 = require("react/jsx-runtime");
const utils_1 = require("../utils");
const button_1 = require("./button");
const calendar_1 = require("./calendar");
const icons_1 = require("./icons");
const popover_1 = require("./popover");
function DateRangePicker({ className, range, disabled, onSelect, placeholder, }) {
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("grid gap-2", className), children: (0, jsx_runtime_1.jsxs)(popover_1.Popover, { children: [(0, jsx_runtime_1.jsx)(popover_1.PopoverTrigger, { asChild: true, disabled: disabled, children: (0, jsx_runtime_1.jsxs)(button_1.Button, { variant: "outline", className: (0, utils_1.cn)("justify-start text-left font-medium space-x-2"), children: [(0, jsx_runtime_1.jsx)("span", { children: placeholder }), (0, jsx_runtime_1.jsx)(icons_1.Icons.ChevronDown, {})] }) }), (0, jsx_runtime_1.jsx)(popover_1.PopoverContent, { className: "w-auto p-0 mt-2", align: "end", children: (0, jsx_runtime_1.jsx)(calendar_1.Calendar, { initialFocus: true, mode: "range", defaultMonth: range?.from, selected: range, onSelect: onSelect, numberOfMonths: 2 }) })] }) }));
}
