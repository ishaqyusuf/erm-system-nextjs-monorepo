"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BubbleMenu = BubbleMenu;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@tiptap/react");
const react_2 = require("react");
const md_1 = require("react-icons/md");
const ai_1 = require("../ai");
const ask_ai_1 = require("../ai/ask-ai");
const bubble_item_1 = require("./bubble-item");
const link_item_1 = require("./link-item");
function BubbleMenu({ editor, tippyOptions, }) {
    const [showAI, setShowAI] = (0, react_2.useState)(false);
    const [openLink, setOpenLink] = (0, react_2.useState)(false);
    if (!editor) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(react_1.BubbleMenu, { editor: editor, tippyOptions: tippyOptions, children: (0, jsx_runtime_1.jsx)("div", { className: "flex w-fit max-w-[90vw] overflow-hidden rounded-full border border-border bg-background text-mono font-regular", children: showAI ? ((0, jsx_runtime_1.jsx)(ai_1.AIMenu, { onOpenChange: setShowAI, editor: editor })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(ask_ai_1.AskAI, { onSelect: () => setShowAI(true) }), (0, jsx_runtime_1.jsxs)(bubble_item_1.BubbleMenuItem, { editor: editor, action: () => editor.chain().focus().toggleBold().run(), isActive: editor.isActive("bold"), children: [(0, jsx_runtime_1.jsx)(md_1.MdOutlineFormatBold, { className: "size-4" }), (0, jsx_runtime_1.jsx)("span", { className: "sr-only", children: "Bold" })] }), (0, jsx_runtime_1.jsxs)(bubble_item_1.BubbleMenuItem, { editor: editor, action: () => editor.chain().focus().toggleItalic().run(), isActive: editor.isActive("italic"), children: [(0, jsx_runtime_1.jsx)(md_1.MdOutlineFormatItalic, { className: "size-4" }), (0, jsx_runtime_1.jsx)("span", { className: "sr-only", children: "Italic" })] }), (0, jsx_runtime_1.jsxs)(bubble_item_1.BubbleMenuItem, { editor: editor, action: () => editor.chain().focus().toggleStrike().run(), isActive: editor.isActive("strike"), children: [(0, jsx_runtime_1.jsx)(md_1.MdOutlineFormatStrikethrough, { className: "size-4" }), (0, jsx_runtime_1.jsx)("span", { className: "sr-only", children: "Strike" })] }), (0, jsx_runtime_1.jsx)(link_item_1.LinkItem, { editor: editor, open: openLink, setOpen: setOpenLink })] })) }) }) }));
}
