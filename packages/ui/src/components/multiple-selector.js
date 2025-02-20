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
exports.useDebounce = useDebounce;
const jsx_runtime_1 = require("react/jsx-runtime");
const cmdk_1 = require("cmdk");
const lucide_react_1 = require("lucide-react");
const React = __importStar(require("react"));
const react_1 = require("react");
const utils_1 = require("../utils");
const badge_1 = require("./badge");
const command_1 = require("./command");
function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = React.useState(value);
    (0, react_1.useEffect)(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay || 500);
        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);
    return debouncedValue;
}
function transToGroupOption(options, groupBy) {
    if (options.length === 0) {
        return {};
    }
    if (!groupBy) {
        return {
            "": options,
        };
    }
    const groupOption = {};
    options.forEach((option) => {
        const key = option[groupBy] || "";
        if (!groupOption[key]) {
            groupOption[key] = [];
        }
        groupOption[key].push(option);
    });
    return groupOption;
}
function removePickedOption(groupOption, picked) {
    const cloneOption = JSON.parse(JSON.stringify(groupOption));
    for (const [key, value] of Object.entries(cloneOption)) {
        cloneOption[key] = value.filter((val) => !picked.find((p) => p.value === val.value));
    }
    return cloneOption;
}
function isOptionsExist(groupOption, targetOption) {
    for (const [, value] of Object.entries(groupOption)) {
        if (value.some((option) => targetOption.find((p) => p.value === option.value))) {
            return true;
        }
    }
    return false;
}
/**
 * The `CommandEmpty` of shadcn/ui will cause the cmdk empty not rendering correctly.
 * So we create one and copy the `Empty` implementation from `cmdk`.
 *
 * @reference: https://github.com/hsuanyi-chou/shadcn-ui-expansions/issues/34#issuecomment-1949561607
 **/
const CommandEmpty = (0, react_1.forwardRef)(({ className, ...props }, forwardedRef) => {
    const render = (0, cmdk_1.useCommandState)((state) => state.filtered.count === 0);
    if (!render)
        return null;
    return ((0, jsx_runtime_1.jsx)("div", { ref: forwardedRef, className: (0, utils_1.cn)("py-6 text-center text-sm", className), "cmdk-empty": "", role: "presentation", ...props }));
});
CommandEmpty.displayName = "CommandEmpty";
const MultipleSelector = React.forwardRef(({ value, onChange, onCreate, placeholder, defaultOptions: arrayDefaultOptions = [], options: arrayOptions, delay, onSearch, onSearchSync, loadingIndicator, emptyIndicator, maxSelected = Number.MAX_SAFE_INTEGER, onMaxSelected, hidePlaceholderWhenSelected, disabled, groupBy, className, badgeClassName, selectFirstItem = true, creatable = false, triggerSearchOnFocus = false, commandProps, inputProps, hideClearAllButton = false, renderOption, }, ref) => {
    const inputRef = React.useRef(null);
    const [open, setOpen] = React.useState(false);
    const [onScrollbar, setOnScrollbar] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const dropdownRef = React.useRef(null); // Added this
    const [selected, setSelected] = React.useState(value || []);
    const [options, setOptions] = React.useState(transToGroupOption(arrayDefaultOptions, groupBy));
    const [inputValue, setInputValue] = React.useState("");
    const debouncedSearchTerm = useDebounce(inputValue, delay || 500);
    React.useImperativeHandle(ref, () => ({
        selectedValue: [...selected],
        input: inputRef.current,
        focus: () => inputRef?.current?.focus(),
        reset: () => setSelected([]),
    }), [selected]);
    const handleClickOutside = (event) => {
        if (dropdownRef.current &&
            !dropdownRef.current.contains(event.target) &&
            inputRef.current &&
            !inputRef.current.contains(event.target)) {
            setOpen(false);
            inputRef.current.blur();
        }
    };
    const handleUnselect = React.useCallback((option) => {
        const newOptions = selected.filter((s) => s.value !== option.value);
        setSelected(newOptions);
        onChange?.(newOptions);
    }, [onChange, selected]);
    const handleKeyDown = React.useCallback((e) => {
        const input = inputRef.current;
        if (input) {
            if (e.key === "Delete" || e.key === "Backspace") {
                if (input.value === "" && selected.length > 0) {
                    const lastSelectOption = selected[selected.length - 1];
                    // If last item is fixed, we should not remove it.
                    if (!lastSelectOption.fixed) {
                        handleUnselect(selected[selected.length - 1]);
                    }
                }
            }
            // This is not a default behavior of the <input /> field
            if (e.key === "Escape") {
                input.blur();
            }
        }
    }, [handleUnselect, selected]);
    (0, react_1.useEffect)(() => {
        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("touchend", handleClickOutside);
        }
        else {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchend", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchend", handleClickOutside);
        };
    }, [open]);
    (0, react_1.useEffect)(() => {
        if (value) {
            setSelected(value);
        }
    }, [value]);
    (0, react_1.useEffect)(() => {
        /** If `onSearch` is provided, do not trigger options updated. */
        if (!arrayOptions || onSearch) {
            return;
        }
        const newOption = transToGroupOption(arrayOptions || [], groupBy);
        if (JSON.stringify(newOption) !== JSON.stringify(options)) {
            setOptions(newOption);
        }
    }, [arrayDefaultOptions, arrayOptions, groupBy, onSearch, options]);
    (0, react_1.useEffect)(() => {
        /** sync search */
        const doSearchSync = () => {
            const res = onSearchSync?.(debouncedSearchTerm);
            setOptions(transToGroupOption(res || [], groupBy));
        };
        const exec = async () => {
            if (!onSearchSync || !open)
                return;
            if (triggerSearchOnFocus) {
                doSearchSync();
            }
            if (debouncedSearchTerm) {
                doSearchSync();
            }
        };
        void exec();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedSearchTerm, groupBy, open, triggerSearchOnFocus]);
    (0, react_1.useEffect)(() => {
        /** async search */
        const doSearch = async () => {
            setIsLoading(true);
            const res = await onSearch?.(debouncedSearchTerm);
            setOptions(transToGroupOption(res || [], groupBy));
            setIsLoading(false);
        };
        const exec = async () => {
            if (!onSearch || !open)
                return;
            if (triggerSearchOnFocus) {
                await doSearch();
            }
            if (debouncedSearchTerm) {
                await doSearch();
            }
        };
        void exec();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedSearchTerm, groupBy, open, triggerSearchOnFocus]);
    const CreatableItem = () => {
        if (!creatable)
            return undefined;
        if (isOptionsExist(options, [{ value: inputValue, label: inputValue }]) ||
            selected.find((s) => s.value === inputValue)) {
            return undefined;
        }
        const Item = ((0, jsx_runtime_1.jsx)(command_1.CommandItem, { value: inputValue, className: "cursor-pointer", onMouseDown: (e) => {
                e.preventDefault();
                e.stopPropagation();
            }, onSelect: (value) => {
                if (selected.length >= maxSelected) {
                    onMaxSelected?.(selected.length);
                    return;
                }
                setInputValue("");
                const newOption = { value: inputValue, label: inputValue };
                const newOptions = [...selected, newOption];
                setSelected(newOptions);
                onChange?.(newOptions);
                onCreate?.(newOption);
            }, children: `Create "${inputValue}"` }));
        // For normal creatable
        if (!onSearch && inputValue.length > 0) {
            return Item;
        }
        // For async search creatable. avoid showing creatable item before loading at first.
        if (onSearch && debouncedSearchTerm.length > 0 && !isLoading) {
            return Item;
        }
        return undefined;
    };
    const EmptyItem = React.useCallback(() => {
        if (!emptyIndicator)
            return undefined;
        // For async search that showing emptyIndicator
        if (onSearch && !creatable && Object.keys(options).length === 0) {
            return ((0, jsx_runtime_1.jsx)(command_1.CommandItem, { value: "-", disabled: true, children: emptyIndicator }));
        }
        return (0, jsx_runtime_1.jsx)(CommandEmpty, { children: emptyIndicator });
    }, [creatable, emptyIndicator, onSearch, options]);
    const selectables = React.useMemo(() => removePickedOption(options, selected), [options, selected]);
    /** Avoid Creatable Selector freezing or lagging when paste a long string. */
    const commandFilter = React.useCallback(() => {
        if (commandProps?.filter) {
            return commandProps.filter;
        }
        if (creatable) {
            return (value, search) => {
                return value.toLowerCase().includes(search.toLowerCase()) ? 1 : -1;
            };
        }
        // Using default filter in `cmdk`. We don't have to provide it.
        return undefined;
    }, [creatable, commandProps?.filter]);
    return ((0, jsx_runtime_1.jsxs)(command_1.Command, { ref: dropdownRef, ...commandProps, onKeyDown: (e) => {
            handleKeyDown(e);
            commandProps?.onKeyDown?.(e);
        }, className: (0, utils_1.cn)("h-auto overflow-visible bg-transparent", commandProps?.className), shouldFilter: commandProps?.shouldFilter !== undefined
            ? commandProps.shouldFilter
            : !onSearch, filter: commandFilter(), children: [(0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("min-h-10 border border-border text-sm", {
                    "px-3 py-2": selected.length !== 0,
                    "cursor-text": !disabled && selected.length !== 0,
                }, className), onClick: () => {
                    if (disabled)
                        return;
                    inputRef?.current?.focus();
                }, children: (0, jsx_runtime_1.jsxs)("div", { className: "relative flex flex-wrap gap-1", children: [selected.map((option) => {
                            return ((0, jsx_runtime_1.jsxs)(badge_1.Badge, { className: (0, utils_1.cn)("data-[disabled]:bg-muted-foreground data-[disabled]:text-muted data-[disabled]:hover:bg-muted-foreground", "data-[fixed]:bg-muted-foreground data-[fixed]:text-muted data-[fixed]:hover:bg-muted-foreground", badgeClassName), "data-fixed": option.fixed, "data-disabled": disabled || undefined, variant: "tag", children: [option.label, (0, jsx_runtime_1.jsx)("button", { type: "button", className: (0, utils_1.cn)("ml-1 rounded-full outline-none", (disabled || option.fixed) && "hidden"), onKeyDown: (e) => {
                                            if (e.key === "Enter") {
                                                handleUnselect(option);
                                            }
                                        }, onMouseDown: (e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                        }, onClick: () => handleUnselect(option), children: (0, jsx_runtime_1.jsx)(lucide_react_1.X, { className: "size-3 text-muted-foreground hover:text-foreground" }) })] }, option.value));
                        }), (0, jsx_runtime_1.jsx)(cmdk_1.Command.Input, { ...inputProps, ref: inputRef, value: inputValue, disabled: disabled, onValueChange: (value) => {
                                setInputValue(value);
                                inputProps?.onValueChange?.(value);
                            }, onBlur: (event) => {
                                if (!onScrollbar) {
                                    setOpen(false);
                                }
                                inputProps?.onBlur?.(event);
                            }, onFocus: (event) => {
                                setOpen(true);
                                triggerSearchOnFocus && onSearch?.(debouncedSearchTerm);
                                inputProps?.onFocus?.(event);
                            }, placeholder: hidePlaceholderWhenSelected && selected.length !== 0
                                ? ""
                                : placeholder, className: (0, utils_1.cn)("flex-1 bg-transparent outline-none placeholder:text-muted-foreground", {
                                "w-full": hidePlaceholderWhenSelected,
                                "px-3 py-2": selected.length === 0,
                                "ml-1": selected.length !== 0,
                            }, inputProps?.className) }), (0, jsx_runtime_1.jsx)("button", { type: "button", onClick: () => {
                                setSelected(selected.filter((s) => s.fixed));
                                onChange?.(selected.filter((s) => s.fixed));
                            }, className: (0, utils_1.cn)("absolute right-0 h-6 w-6 p-0", (hideClearAllButton ||
                                disabled ||
                                selected.length < 1 ||
                                selected.filter((s) => s.fixed).length === selected.length) &&
                                "hidden"), children: (0, jsx_runtime_1.jsx)(lucide_react_1.X, { className: "size-4 text-muted-foreground hover:text-foreground" }) })] }) }), (0, jsx_runtime_1.jsx)("div", { className: "relative", children: open && ((0, jsx_runtime_1.jsx)(command_1.CommandList, { className: "absolute top-1 z-10 w-full bg-popover text-popover-foreground shadow-md border border-border outline-none animate-in max-h-[200px] overflow-auto", onMouseLeave: () => {
                        setOnScrollbar(false);
                    }, onMouseEnter: () => {
                        setOnScrollbar(true);
                    }, onMouseUp: () => {
                        inputRef?.current?.focus();
                    }, children: isLoading ? ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: loadingIndicator })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [EmptyItem(), CreatableItem(), !selectFirstItem && ((0, jsx_runtime_1.jsx)(command_1.CommandItem, { value: "-", className: "hidden" })), Object.entries(selectables).map(([key, dropdowns]) => ((0, jsx_runtime_1.jsx)(command_1.CommandGroup, { heading: key, className: "h-full overflow-auto", children: dropdowns.map((option) => {
                                    return ((0, jsx_runtime_1.jsx)(command_1.CommandItem, { value: option.value, disabled: option.disable, onMouseDown: (e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                        }, onSelect: () => {
                                            if (selected.length >= maxSelected) {
                                                onMaxSelected?.(selected.length);
                                                return;
                                            }
                                            setInputValue("");
                                            const newOptions = [...selected, option];
                                            setSelected(newOptions);
                                            onChange?.(newOptions);
                                        }, className: (0, utils_1.cn)("cursor-pointer w-full", option.disable &&
                                            "cursor-default text-muted-foreground"), children: renderOption ? renderOption(option) : option.label }, option.value));
                                }) }, key)))] })) })) })] }));
});
MultipleSelector.displayName = "MultipleSelector";
exports.default = MultipleSelector;
