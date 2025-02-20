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
exports.TabsContent = exports.TabsTrigger = exports.TabsList = exports.Tabs = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const TabsPrimitive = __importStar(require("@radix-ui/react-tabs"));
const React = __importStar(require("react"));
const utils_1 = require("../utils");
const Tabs = TabsPrimitive.Root;
exports.Tabs = Tabs;
const TabsList = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)(TabsPrimitive.List, { ref: ref, className: (0, utils_1.cn)("inline-flex h-10 items-center justify-center bg-accent p-1 text-muted-foreground", className), ...props })));
exports.TabsList = TabsList;
TabsList.displayName = TabsPrimitive.List.displayName;
const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)(TabsPrimitive.Trigger, { ref: ref, className: (0, utils_1.cn)("inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground", className), ...props })));
exports.TabsTrigger = TabsTrigger;
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
const TabsContent = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)(TabsPrimitive.Content, { ref: ref, className: (0, utils_1.cn)("mt-2 ring-offset-background focus-visible:outline-none", className), ...props })));
exports.TabsContent = TabsContent;
TabsContent.displayName = TabsPrimitive.Content.displayName;
