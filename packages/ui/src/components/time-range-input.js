"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeRangeInput = TimeRangeInput;
const jsx_runtime_1 = require("react/jsx-runtime");
const date_fns_1 = require("date-fns");
const react_1 = require("react");
const icons_1 = require("./icons");
function TimeRangeInput({ value, onChange, }) {
    const [startTime, setStartTime] = (0, react_1.useState)(value.start);
    const [endTime, setEndTime] = (0, react_1.useState)(value.end);
    const [duration, setDuration] = (0, react_1.useState)("");
    (0, react_1.useEffect)(() => {
        setStartTime(value.start);
        setEndTime(value.end);
    }, [value]);
    (0, react_1.useEffect)(() => {
        if (!startTime || !endTime) {
            return;
        }
        const start = (0, date_fns_1.parse)(startTime, "HH:mm", new Date());
        const end = (0, date_fns_1.parse)(endTime, "HH:mm", new Date());
        const diff = (0, date_fns_1.differenceInMinutes)(end, start);
        const hours = Math.floor(diff / 60);
        const minutes = diff % 60;
        setDuration(`${hours}h ${minutes}min`);
    }, [startTime, endTime]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-center w-full border border-border px-4 py-2", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center space-x-2 flex-1", children: [(0, jsx_runtime_1.jsx)(icons_1.Icons.Time, { className: "w-5 h-5 text-[#878787]" }), (0, jsx_runtime_1.jsx)("input", { type: "time", value: startTime, onChange: (e) => {
                            setStartTime(e.target.value);
                            onChange({ ...value, start: e.target.value });
                        }, className: "bg-transparent focus:outline-none text-sm" })] }), (0, jsx_runtime_1.jsx)("div", { className: "flex items-center justify-center flex-shrink-0 mx-4", children: (0, jsx_runtime_1.jsx)(icons_1.Icons.ArrowRightAlt, { className: "w-5 h-5 text-[#878787]" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center space-x-2 flex-1 justify-end", children: [(0, jsx_runtime_1.jsx)("input", { type: "time", value: endTime, onChange: (e) => {
                            setEndTime(e.target.value);
                            onChange({ ...value, end: e.target.value });
                        }, className: "bg-transparent focus:outline-none text-sm" }), (0, jsx_runtime_1.jsx)("span", { className: "text-[#878787] text-sm", children: duration })] })] }));
}
