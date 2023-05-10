'use client';

import React from 'react'
import { useRef, useState } from "react";

export const Input = ({ placeholder, type, onData, onText }) => {
    const divRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
    const [value, setValue] = useState("");

    const handleMouseMove = (e) => {
        if (!divRef.current || isFocused) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setIsFocused(true);
        setOpacity(1);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setOpacity(0);
        setValue("");
        onData('')
        onText('')
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    const handleChange = (e) => {
        // only allow numbers and dots 
        const re = /^[0-9\b.]+$/;
        const value = e.target.value;
        const pointCount = (value.match(/\./g) || []).length;
        // if (pointCount > 1 || !re.test(e.target.value)) return;
        if (pointCount > 1) return;

        setValue(value);
        valueResult(value)



    }

    const valueResult = (value) => {
        if (type === 'ea') {
            const valor = ((Math.pow((1 + (value / 100)), (1 / 12)) - 1) * 100).toFixed(2)
            onData(valor)
            onText("La tasa efectiva mensual es")
        } else {
            //  efectivo mensual a efectivo anual
            const valor = ((Math.pow((1 + (value / 100)), 12) - 1) * 100).toFixed(2)
            onData(valor)
            onText("La tasa efectiva anual es")
        }

    }


    return (
        <div className="relative w-40">
            <input
                onMouseMove={handleMouseMove}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                autoComplete="off"
                placeholder={placeholder}
                onChange={handleChange}
                value={value}
                type="text"
                name="email"
                className="bg-neutral-950 h-12 text-2xl w-full cursor-default rounded-md border border-slate-800 p-3.5 text-slate-100 transition-colors duration-500 placeholder:select-none text-center  placeholder:text-neutral-500 focus:border-[#e42068] focus:outline-none"
            />
            <input
                ref={divRef}
                disabled
                style={{
                    border: "1px solid rgb(228 32 104)",
                    opacity,
                    WebkitMaskImage: `radial-gradient(30% 30px at ${position.x}px ${position.y}px, black 45%, transparent)`,
                }}
                aria-hidden="true"
                className="border-[rgb(228 32 104)] pointer-events-none absolute left-0 top-0 z-10 h-12 w-full cursor-default rounded-md border bg-[transparent] p-3.5 opacity-0  transition-opacity duration-500 placeholder:select-none"
            />
        </div>
    )
}
