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
exports.SheetDescription = exports.SheetTitle = exports.SheetFooter = exports.SheetHeader = exports.SheetContent = exports.SheetClose = exports.SheetTrigger = exports.SheetOverlay = exports.SheetPortal = exports.Sheet = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const SheetPrimitive = __importStar(require("@radix-ui/react-dialog"));
const class_variance_authority_1 = require("class-variance-authority");
const React = __importStar(require("react"));
const utils_1 = require("../utils");
const Sheet = SheetPrimitive.Root;
exports.Sheet = Sheet;
const SheetTrigger = SheetPrimitive.Trigger;
exports.SheetTrigger = SheetTrigger;
const SheetClose = SheetPrimitive.Close;
exports.SheetClose = SheetClose;
const SheetPortal = SheetPrimitive.Portal;
exports.SheetPortal = SheetPortal;
const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)(SheetPrimitive.Overlay, { className: (0, utils_1.cn)("fixed inset-0 z-50 bg-[#f6f6f3]/60 dark:bg-black/60 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className), ...props, ref: ref })));
exports.SheetOverlay = SheetOverlay;
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
const sheetVariants = (0, class_variance_authority_1.cva)("fixed z-50 gap-4 transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-200 data-[state=open]:duration-300", {
    variants: {
        side: {
            top: "inset-x-0 top-0 data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
            bottom: "inset-x-0 bottom-0 data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
            left: "inset-y-0 left-0 h-full w-3/4 data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
            right: "inset-y-0 right-0 h-full w-3/4 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-[520px]",
        },
    },
    defaultVariants: {
        side: "right",
    },
});
const SheetContent = React.forwardRef(({ side = "right", stack = false, className, children, title, ...props }, ref) => ((0, jsx_runtime_1.jsxs)(SheetPortal, { children: [(0, jsx_runtime_1.jsx)(SheetOverlay, {}), (0, jsx_runtime_1.jsx)(SheetPrimitive.Content, { onOpenAutoFocus: (e) => e.preventDefault(), ref: ref, className: (0, utils_1.cn)("md:p-4", sheetVariants({ side })), "aria-describedby": props["aria-describedby"] || undefined, ...props, children: (0, jsx_runtime_1.jsxs)("div", { className: (0, utils_1.cn)("border w-full h-full bg-[#FAFAF9] dark:bg-[#121212] p-6 relative overflow-hidden", className), children: [(0, jsx_runtime_1.jsx)(SheetTitle, { className: "sr-only", children: title }), children] }) })] })));
exports.SheetContent = SheetContent;
SheetContent.displayName = SheetPrimitive.Content.displayName;
const SheetHeader = ({ className, ...props }) => ((0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("flex flex-col space-y-2 text-center sm:text-left", className), ...props }));
exports.SheetHeader = SheetHeader;
SheetHeader.displayName = "SheetHeader";
const SheetFooter = ({ className, ...props }) => ((0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className), ...props }));
exports.SheetFooter = SheetFooter;
SheetFooter.displayName = "SheetFooter";
const SheetTitle = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)(SheetPrimitive.Title, { ref: ref, className: (0, utils_1.cn)("text-lg font-semibold text-foreground", className), ...props })));
exports.SheetTitle = SheetTitle;
SheetTitle.displayName = SheetPrimitive.Title.displayName;
const SheetDescription = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)(SheetPrimitive.Description, { ref: ref, className: (0, utils_1.cn)("text-sm text-muted-foreground", className), ...props })));
exports.SheetDescription = SheetDescription;
SheetDescription.displayName = SheetPrimitive.Description.displayName;
