"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const avatar_1 = require("./avatar");
const meta = {
    component: () => ((0, jsx_runtime_1.jsxs)(avatar_1.Avatar, { children: [(0, jsx_runtime_1.jsx)(avatar_1.AvatarImage, { src: "https://github.com/shadcn.png", alt: "@shadcn" }), (0, jsx_runtime_1.jsx)(avatar_1.AvatarFallback, { children: "CN" })] })),
};
exports.default = meta;
exports.Default = {};
