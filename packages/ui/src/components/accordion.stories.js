"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const accordion_1 = require("./accordion");
const meta = {
    component: () => ((0, jsx_runtime_1.jsxs)(accordion_1.Accordion, { type: "single", collapsible: true, className: "w-full max-w-[500px]", children: [(0, jsx_runtime_1.jsxs)(accordion_1.AccordionItem, { value: "item-1", children: [(0, jsx_runtime_1.jsx)(accordion_1.AccordionTrigger, { children: "Is it accessible?" }), (0, jsx_runtime_1.jsx)(accordion_1.AccordionContent, { children: "Yes. It adheres to the WAI-ARIA design pattern." })] }), (0, jsx_runtime_1.jsxs)(accordion_1.AccordionItem, { value: "item-2", children: [(0, jsx_runtime_1.jsx)(accordion_1.AccordionTrigger, { children: "Is it styled?" }), (0, jsx_runtime_1.jsx)(accordion_1.AccordionContent, { children: "Yes. It comes with default styles that matches the other components' aesthetic." })] }), (0, jsx_runtime_1.jsxs)(accordion_1.AccordionItem, { value: "item-3", children: [(0, jsx_runtime_1.jsx)(accordion_1.AccordionTrigger, { children: "Is it animated?" }), (0, jsx_runtime_1.jsx)(accordion_1.AccordionContent, { children: "Yes. It's animated by default, but you can disable it if you prefer." })] })] })),
};
exports.default = meta;
exports.Default = {};
