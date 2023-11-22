"use client";
import { ToggleButton } from "./ToggleButton";

import React, { useState } from "react";
import Header from "../components/Header";
import SidebarComponent from "./sidebar/SidebarComponent";

const MainLayout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div>
      <div className="flex">
        <div className="h-screen relative bg-white ">
          <SidebarComponent {...{ isCollapsed }} />
          <ToggleButton
            setIsCollapsed={setIsCollapsed}
            isCollapsed={isCollapsed}
          />
        </div>
        <div className="flex h-[100%] flex-col w-[100%]">
          <Header />
          <div className="p-3 bg-slate-100 h-[100%] overflow-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
// bg-slate-100 w-[100%] h-screen
export default MainLayout;
