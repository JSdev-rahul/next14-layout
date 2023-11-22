"use client";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import React from "react";
export function ToggleButton({ setIsCollapsed, isCollapsed }) {
  return (
    <button
      onClick={() => setIsCollapsed(!isCollapsed)}
      style={{
        zIndex: 99999,
        top: "56px",
        right: "-5px",
      }}
      className="absolute bg-white rounded-full shadow-xl cursor-pointer"
    >
      {isCollapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
    </button>
  );
}
