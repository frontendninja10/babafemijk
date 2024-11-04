"use client";
import "../app/globals.css";
import React, { useState } from "react";
import { Blend } from "lucide-react";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export function HeroSvg() {
  const [COLORS, setColors] = useState({
    color1: "#fac748",
    color2: "#8390fa",
    color3: "#1d2f6f",
  });

  const randomizeColors = () => {
    setColors({
      color1: getRandomColor(),
      color2: getRandomColor(),
      color3: getRandomColor(),
    });
  };
  return (
    <div className="flex flex-col  items-center">
      <svg
        width="377"
        height="250"
        viewBox="0 0 377 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hero-svg w-full h-auto lg:max-w-[377px] max-w-[320px]"
      >
        <g className="hero-icon hero-icon-1">
          <path
            d="M73.9286 84.0002L115 108L43.125 150L0 126L73.9286 84.0002Z"
            fill={COLORS.color1}
            fill-opacity="0.6"
          />
          <path
            d="M73.9286 84.0002L115 108L43.125 150L0 126L73.9286 84.0002Z"
            fill={COLORS.color1}
            fill-opacity="0.6"
          />
          <path
            d="M1.90013e-06 41.9998L43.125 65.9997V150L0 126L1.90013e-06 41.9998Z"
            fill={COLORS.color1}
            fill-opacity="0.6"
          />
          <path
            d="M1.90013e-06 41.9998L43.125 65.9997V150L0 126L1.90013e-06 41.9998Z"
            fill={COLORS.color1}
            fill-opacity="0.6"
          />
          <path
            d="M73.9285 0L115 24V108L73.9285 84.0001V0Z"
            fill={COLORS.color1}
            fill-opacity="0.6"
          />
          <path
            d="M73.9285 0L115 24V108L73.9285 84.0001V0Z"
            fill={COLORS.color1}
            fill-opacity="0.6"
          />
          <path
            d="M73.9286 0L115 24L43.125 66.0001L0 42.0002L73.9286 0Z"
            fill={COLORS.color1}
            fill-opacity="0.6"
          />
          <path
            d="M73.9285 0L115 24L43.125 66.0001L0 42.0002L73.9285 0Z"
            fill={COLORS.color1}
            fill-opacity="0.6"
          />
        </g>
        <g className="hero-icon hero-icon-2">
          <path
            d="M204.929 84.0002L246 108L174.125 150L131 126L204.929 84.0002Z"
            fill={COLORS.color2}
            fill-opacity="0.6"
          />
          <path
            d="M204.929 84.0002L246 108L174.125 150L131 126L204.929 84.0002Z"
            fill={COLORS.color2}
            fill-opacity="0.6"
          />
          <path
            d="M131 41.9998L174.125 65.9997V150L131 126L131 41.9998Z"
            fill={COLORS.color2}
            fill-opacity="0.6"
          />
          <path
            d="M131 41.9998L174.125 65.9997V150L131 126L131 41.9998Z"
            fill={COLORS.color2}
            fill-opacity="0.6"
          />
          <path
            d="M204.929 0L246 24V108L204.929 84.0001V0Z"
            fill={COLORS.color2}
            fill-opacity="0.6"
          />
          <path
            d="M204.929 0L246 24V108L204.929 84.0001V0Z"
            fill={COLORS.color2}
            fill-opacity="0.6"
          />
          <path
            d="M204.929 0L246 24L174.125 66.0001L131 42.0002L204.929 0Z"
            fill={COLORS.color2}
            fill-opacity="0.6"
          />
          <path
            d="M204.929 0L246 24L174.125 66.0001L131 42.0002L204.929 0Z"
            fill={COLORS.color2}
            fill-opacity="0.6"
          />
        </g>
        <g className="hero-icon hero-icon-3">
          <path
            d="M335.929 84.0002L377 108L305.125 150L262 126L335.929 84.0002Z"
            fill={COLORS.color3}
            fill-opacity="0.7"
          />
          <path
            d="M335.929 84.0002L377 108L305.125 150L262 126L335.929 84.0002Z"
            fill={COLORS.color3}
            fill-opacity="0.7"
          />
          <path
            d="M262 41.9998L305.125 65.9997V150L262 126L262 41.9998Z"
            fill={COLORS.color3}
            fill-opacity="0.7"
          />
          <path
            d="M262 41.9998L305.125 65.9997V150L262 126L262 41.9998Z"
            fill={COLORS.color3}
            fill-opacity="0.7"
          />
          <path
            d="M335.929 0L377 24V108L335.929 84.0001V0Z"
            fill={COLORS.color3}
            fill-opacity="0.7"
          />
          <path
            d="M335.929 0L377 24V108L335.929 84.0001V0Z"
            fill={COLORS.color3}
            fill-opacity="0.7"
          />
          <path
            d="M335.929 0L377 24L305.125 66.0001L262 42.0002L335.929 0Z"
            fill={COLORS.color3}
            fill-opacity="0.7"
          />
          <path
            d="M335.929 0L377 24L305.125 66.0001L262 42.0002L335.929 0Z"
            fill={COLORS.color3}
            fill-opacity="0.7"
          />
        </g>
      </svg>
      <button
        onClick={randomizeColors}
        className={`mb-4 p-2 text-white rounded transition-colors duration-200 flex items-center gap-x-2`}
        style={{
          background: `linear-gradient(to right, ${COLORS.color1}, ${COLORS.color2})`, // Use dynamic colors
        }}
      >
        <span className="text-sm">Colorify</span>
        <Blend className="w-4 h-4" />
      </button>
    </div>
  );
}
