"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spinner = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const bars = Array(12).fill(0);
const Spinner = ({ size = 16 }) => {
    return ((0, jsx_runtime_1.jsx)("div", { className: "loading-parent", children: (0, jsx_runtime_1.jsx)("div", { className: "loading-wrapper", "data-visible": true, 
            // @ts-ignore
            style: { "--spinner-size": `${size}px` }, children: (0, jsx_runtime_1.jsx)("div", { className: "spinner", children: bars.map((_, i) => ((0, jsx_runtime_1.jsx)("div", { className: "loading-bar" }, `spinner-bar-${i.toString()}`))) }) }) }));
};
exports.Spinner = Spinner;
