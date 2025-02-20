"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkItem = LinkItem;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const md_1 = require("react-icons/md");
const button_1 = require("../../../button");
const popover_1 = require("../../../popover");
const utils_1 = require("../../utils");
const bubble_menu_button_1 = require("./bubble-menu-button");
function LinkItem({ editor, open, setOpen }) {
    const [value, setValue] = (0, react_1.useState)("");
    const isActive = editor.isActive("link");
    const inputRef = (0, react_1.useRef)(null);
    const linkValue = editor.getAttributes("link").href;
    const handleSubmit = () => {
        const url = (0, utils_1.formatUrlWithProtocol)(value);
        if (url) {
            editor
                .chain()
                .focus()
                .extendMarkRange("link")
                .setLink({ href: url })
                .run();
            setOpen(false);
        }
    };
    return ((0, jsx_runtime_1.jsxs)(popover_1.Popover, { modal: false, open: open, onOpenChange: setOpen, children: [(0, jsx_runtime_1.jsx)(popover_1.PopoverTrigger, { asChild: true, children: (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(bubble_menu_button_1.BubbleMenuButton, { isActive: isActive, action: () => setOpen(true), children: linkValue ? ((0, jsx_runtime_1.jsx)(md_1.MdOutlineLinkOff, { className: "size-4" })) : ((0, jsx_runtime_1.jsx)(md_1.MdOutlineAddLink, { className: "size-4" })) }) }) }), (0, jsx_runtime_1.jsx)(popover_1.PopoverContent, { align: "end", className: "w-60 p-0", sideOffset: 10, children: (0, jsx_runtime_1.jsxs)("div", { className: "flex p-1", children: [(0, jsx_runtime_1.jsx)("input", { ref: inputRef, type: "text", placeholder: "Paste a link", className: "flex-1 bg-background p-0.5 h-7 text-xs outline-none placeholder:text-[#878787]", defaultValue: linkValue || "", onChange: (e) => setValue(e.target.value), onKeyDown: (e) => {
                                if (e.key === "Enter") {
                                    handleSubmit();
                                }
                            } }), linkValue ? ((0, jsx_runtime_1.jsx)(button_1.Button, { size: "icon", variant: "outline", type: "button", className: "flex size-7 items-center p-1 text-red-600 transition-all hover:bg-red-100 dark:hover:bg-red-800 hover:border-none", onClick: () => {
                                editor.chain().focus().unsetLink().run();
                                if (inputRef.current) {
                                    inputRef.current.value = "";
                                }
                                setOpen(false);
                            }, children: (0, jsx_runtime_1.jsx)(md_1.MdOutlineDelete, { className: "size-4" }) })) : ((0, jsx_runtime_1.jsx)(button_1.Button, { size: "icon", className: "size-7", type: "button", onClick: handleSubmit, children: (0, jsx_runtime_1.jsx)(md_1.MdOutlineCheck, { className: "size-4" }) }))] }) })] }));
}
