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
exports.NavigationMenuViewport = exports.NavigationMenuIndicator = exports.NavigationMenuLink = exports.NavigationMenuTrigger = exports.NavigationMenuContent = exports.NavigationMenuItem = exports.NavigationMenuList = exports.NavigationMenu = exports.navigationMenuTriggerStyle = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_icons_1 = require("@radix-ui/react-icons");
const NavigationMenuPrimitive = __importStar(require("@radix-ui/react-navigation-menu"));
const class_variance_authority_1 = require("class-variance-authority");
const React = __importStar(require("react"));
const utils_1 = require("../utils");
const NavigationMenu = React.forwardRef(({ className, children, ...props }, ref) => ((0, jsx_runtime_1.jsxs)(NavigationMenuPrimitive.Root, { ref: ref, className: (0, utils_1.cn)("relative z-10 flex flex-1 items-center", className), ...props, children: [children, (0, jsx_runtime_1.jsx)(NavigationMenuViewport, {})] })));
exports.NavigationMenu = NavigationMenu;
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
const NavigationMenuList = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)(NavigationMenuPrimitive.List, { ref: ref, className: (0, utils_1.cn)("group flex flex-1 list-none items-center justify-center space-x-1", className), ...props })));
exports.NavigationMenuList = NavigationMenuList;
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;
const NavigationMenuItem = NavigationMenuPrimitive.Item;
exports.NavigationMenuItem = NavigationMenuItem;
const navigationMenuTriggerStyle = (0, class_variance_authority_1.cva)("h-8 items-center justify-center text-sm font-medium transition-colors px-3 py-2 inline-flex text-secondary-foreground hover:bg-secondary");
exports.navigationMenuTriggerStyle = navigationMenuTriggerStyle;
const NavigationMenuTrigger = React.forwardRef(({ className, children, ...props }, ref) => ((0, jsx_runtime_1.jsxs)(NavigationMenuPrimitive.Trigger, { ref: ref, className: (0, utils_1.cn)(navigationMenuTriggerStyle(), "group", className), ...props, children: [children, " ", (0, jsx_runtime_1.jsx)(react_icons_1.ChevronDownIcon, { className: "relative top-0 ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180", "aria-hidden": "true" })] })));
exports.NavigationMenuTrigger = NavigationMenuTrigger;
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;
const NavigationMenuContent = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)(NavigationMenuPrimitive.Content, { ref: ref, className: (0, utils_1.cn)("left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ", className), ...props })));
exports.NavigationMenuContent = NavigationMenuContent;
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;
const NavigationMenuLink = NavigationMenuPrimitive.Link;
exports.NavigationMenuLink = NavigationMenuLink;
const NavigationMenuViewport = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("absolute left-0 top-full flex justify-center"), children: (0, jsx_runtime_1.jsx)(NavigationMenuPrimitive.Viewport, { className: (0, utils_1.cn)("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden border border-border bg-popover text-popover-foreground shadow-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]", className), ref: ref, ...props }) })));
exports.NavigationMenuViewport = NavigationMenuViewport;
NavigationMenuViewport.displayName =
    NavigationMenuPrimitive.Viewport.displayName;
const NavigationMenuIndicator = React.forwardRef(({ className, ...props }, ref) => ((0, jsx_runtime_1.jsx)(NavigationMenuPrimitive.Indicator, { ref: ref, className: (0, utils_1.cn)("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in", className), ...props, children: (0, jsx_runtime_1.jsx)("div", { className: "relative top-[60%] h-2 w-2 rotate-45 bg-border shadow-md" }) })));
exports.NavigationMenuIndicator = NavigationMenuIndicator;
NavigationMenuIndicator.displayName =
    NavigationMenuPrimitive.Indicator.displayName;
