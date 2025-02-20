"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIMenu = AIMenu;
const jsx_runtime_1 = require("react/jsx-runtime");
const usehooks_1 = require("@uidotdev/usehooks");
const rsc_1 = require("ai/rsc");
const framer_motion_1 = require("framer-motion");
const react_1 = require("react");
const md_1 = require("react-icons/md");
const bubble_menu_button_1 = require("../bubble-menu/bubble-menu-button");
const example_action_1 = require("./example-action");
const selectors = [
    {
        name: "Grammar",
        icon: md_1.MdOutlineSpellcheck,
        instructions: "Fix grammar: Rectify any grammatical errors while preserving the original meaning.",
    },
    {
        name: "Improve",
        icon: md_1.MdOutlineWrapText,
        instructions: "Improve text: Refine the text to improve clarity and professionalism.",
    },
    {
        name: "Condense",
        icon: md_1.MdOutlineCloseFullscreen,
        instructions: "Condense text: Remove any unnecessary text and only keep the invoice-related content and make it more concise.",
    },
];
function formatEditorContent(content) {
    return content.replace(/\n/g, "<br />");
}
function AIMenu({ onOpenChange, editor }) {
    const [isTypingPrompt, setIsTypingPrompt] = (0, react_1.useState)(false);
    const ref = (0, usehooks_1.useClickAway)(() => {
        onOpenChange(false);
        setIsTypingPrompt(false);
    });
    const handleGenerate = async (instructions) => {
        const selectedText = editor?.state.doc.textBetween(editor?.state.selection?.from, editor?.state.selection?.to, "");
        if (!selectedText) {
            return;
        }
        try {
            const { output } = await (0, example_action_1.generateEditorContent)({
                input: selectedText,
                context: instructions,
            });
            let generatedContent = "";
            for await (const delta of (0, rsc_1.readStreamableValue)(output)) {
                generatedContent += delta;
                editor?.commands.insertContent(formatEditorContent(delta ?? ""));
            }
        }
        catch (error) {
            console.error("Error generating content:", error);
        }
        finally {
            onOpenChange(false);
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { ref: ref, className: "flex whitespace-nowrap divide-x", children: [(0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.2 }, children: isTypingPrompt ? ((0, jsx_runtime_1.jsxs)("div", { className: "relative", children: [(0, jsx_runtime_1.jsx)("input", { autoFocus: true, placeholder: "Type your prompt\u2026", onBlur: () => setIsTypingPrompt(false), className: "w-[280px] text-[11px] border-none px-4 h-8 bg-background focus:outline-none", onKeyDown: (e) => {
                                if (e.key === "Enter") {
                                    e.preventDefault();
                                    onOpenChange(false);
                                    handleGenerate(`Custom prompt: ${e.currentTarget.value}`);
                                }
                            } }), (0, jsx_runtime_1.jsx)("kbd", { className: "pointer-events-none h-5 select-none items-center gap-1 px-1.5 font-mono text-[13px] font-medium absolute right-2 top-1/2 -translate-y-1/2", children: (0, jsx_runtime_1.jsx)("span", { children: "\u21B5" }) })] })) : ((0, jsx_runtime_1.jsx)(bubble_menu_button_1.BubbleMenuButton, { action: () => setIsTypingPrompt(true), isActive: false, children: (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center space-x-1", children: [(0, jsx_runtime_1.jsx)(md_1.MdOutlineAutoAwesome, { className: "size-3" }), (0, jsx_runtime_1.jsx)("span", { className: "text-[11px] font-mono", children: "Ask AI" })] }) })) }), !isTypingPrompt &&
                selectors.map((selector, index) => ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.2, delay: (index + 1) * 0.05 }, children: (0, jsx_runtime_1.jsx)(bubble_menu_button_1.BubbleMenuButton, { action: () => handleGenerate(selector.instructions), isActive: false, children: (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center space-x-1", children: [(0, jsx_runtime_1.jsx)(selector.icon, { className: "size-3" }), (0, jsx_runtime_1.jsx)("span", { children: selector.name })] }) }) }, selector.name)))] }));
}
