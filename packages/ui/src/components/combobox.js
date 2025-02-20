"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Combobox = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const cmdk_1 = require("cmdk");
const lucide_react_1 = require("lucide-react");
const react_1 = require("react");
const utils_1 = require("../utils");
const command_1 = require("./command");
const icons_1 = require("./icons");
const Combobox = ({ options, placeholder, value, onSelect, onRemove, onCreate, disabled, className, classNameList, isLoading = false, showIcon = true, autoFocus, onValueChange, CreateComponent, }) => {
    const inputRef = (0, react_1.useRef)(null);
    const [isOpen, setOpen] = (0, react_1.useState)(false);
    const [selected, setSelected] = (0, react_1.useState)(value);
    const [inputValue, setInputValue] = (0, react_1.useState)(value?.name || "");
    const handleOnValueChange = (value) => {
        setInputValue(value);
        onValueChange?.(value);
        if (value) {
            setOpen(true);
        }
        else {
            setOpen(false);
        }
    };
    const handleOnRemove = () => {
        setSelected(undefined);
        setInputValue("");
        onRemove?.();
    };
    const handleBlur = (0, react_1.useCallback)(() => {
        setOpen(false);
        setInputValue(selected?.name);
    }, [selected]);
    const handleOnFocus = () => {
        if (inputValue !== value?.name) {
            setOpen(true);
        }
    };
    const handleSelectOption = (0, react_1.useCallback)((selectedOption) => {
        setInputValue(selectedOption.name);
        setSelected(selectedOption);
        onSelect?.(selectedOption);
        // This is a hack to prevent the input from being focused after the user selects an option
        // We can call this hack: "The next tick"
        setTimeout(() => {
            inputRef?.current?.blur();
        }, 0);
    }, [onSelect]);
    return ((0, jsx_runtime_1.jsxs)(cmdk_1.Command, { className: "w-full", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center w-full relative", children: [showIcon && ((0, jsx_runtime_1.jsx)(icons_1.Icons.Search, { className: "w-[18px] h-[18px] absolute left-4 pointer-events-none" })), (0, jsx_runtime_1.jsx)(command_1.CommandInput, { ref: inputRef, value: inputValue, onValueChange: handleOnValueChange, onBlur: handleBlur, onFocus: handleOnFocus, placeholder: placeholder, disabled: disabled, className: className, autoFocus: autoFocus }), isLoading && ((0, jsx_runtime_1.jsx)(lucide_react_1.Loader2, { className: "w-[16px] h-[16px] absolute right-2 animate-spin text-dark-gray" })), !isLoading && selected && onRemove && ((0, jsx_runtime_1.jsx)(icons_1.Icons.Close, { className: "w-[18px] h-[18px] absolute right-2", onClick: handleOnRemove }))] }), (0, jsx_runtime_1.jsx)("div", { className: "relative w-full", children: (0, jsx_runtime_1.jsx)(command_1.CommandList, { className: "w-full outline-none animate-in fade-in-0 zoom-in-95", hidden: !isOpen, children: inputValue?.length > 0 && ((0, jsx_runtime_1.jsxs)(command_1.CommandGroup, { className: (0, utils_1.cn)("bg-background absolute z-10 w-full max-h-[250px] overflow-auto py-2 border px-2", classNameList), children: [options?.map(({ component: Component, ...option }) => {
                                return ((0, jsx_runtime_1.jsx)(command_1.CommandItem, { value: `${option.name}_${option.id}`, onMouseDown: (event) => {
                                        event.preventDefault();
                                        event.stopPropagation();
                                    }, onSelect: () => handleSelectOption(option), className: "flex items-center gap-2 w-full px-2", children: Component ? (0, jsx_runtime_1.jsx)(Component, {}) : option.name }, option.id));
                            }), onCreate &&
                                !options?.find((o) => o.name.toLowerCase() === inputValue.toLowerCase()) && ((0, jsx_runtime_1.jsx)(command_1.CommandItem, { value: inputValue, onSelect: () => onCreate(inputValue), onMouseDown: (event) => {
                                    event.preventDefault();
                                    event.stopPropagation();
                                }, children: CreateComponent ? ((0, jsx_runtime_1.jsx)(CreateComponent, { value: inputValue })) : (`Create "${inputValue}"`) }, inputValue))] })) }) })] }));
};
exports.Combobox = Combobox;
