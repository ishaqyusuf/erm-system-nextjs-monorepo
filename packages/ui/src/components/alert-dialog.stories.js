"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const alert_dialog_1 = require("./alert-dialog");
const button_1 = require("./button");
const meta = {
    component: () => ((0, jsx_runtime_1.jsxs)(alert_dialog_1.AlertDialog, { children: [(0, jsx_runtime_1.jsx)(alert_dialog_1.AlertDialogTrigger, { asChild: true, children: (0, jsx_runtime_1.jsx)(button_1.Button, { variant: "outline", children: "Show Dialog" }) }), (0, jsx_runtime_1.jsxs)(alert_dialog_1.AlertDialogContent, { children: [(0, jsx_runtime_1.jsxs)(alert_dialog_1.AlertDialogHeader, { children: [(0, jsx_runtime_1.jsx)(alert_dialog_1.AlertDialogTitle, { children: "Are you absolutely sure?" }), (0, jsx_runtime_1.jsx)(alert_dialog_1.AlertDialogDescription, { children: "This action cannot be undone. This will permanently delete your account and remove your data from our servers." })] }), (0, jsx_runtime_1.jsxs)(alert_dialog_1.AlertDialogFooter, { children: [(0, jsx_runtime_1.jsx)(alert_dialog_1.AlertDialogCancel, { children: "Cancel" }), (0, jsx_runtime_1.jsx)(alert_dialog_1.AlertDialogAction, { children: "Continue" })] })] })] })),
};
exports.default = meta;
exports.Default = {};
