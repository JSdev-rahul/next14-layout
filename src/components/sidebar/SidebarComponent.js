"use client";

import Image from "next/image";
import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { menuItems } from "./menu-Items";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import clsx from "clsx";

const SidebarComponent = ({ isCollapsed }) => {
  const router = useRouter();
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div>
      <Sidebar
        collapsed={isCollapsed}
        width="200px"
        transitionDuration={300}
        toggled={true}
        backgroundColor="white"
        collapsedWidth={"83px"}
        // image="https://genesisai.mydrreddys.com/static/media/frame-427318767.e42c64a2debe895d48c7f62368d9c3ea.svg"
      >
        <div
          style={{
            borderBottom: "0.2px solid #f9ecec",
          }}
          className="h-16 min-h-16 flex items-center px-2 justify-center "
        >
          <div className="flex items-center justify-center">
            <div
              className={`w-9 h-9 min-w-9 min-h-9 flex items-center justify-center rounded-lg text-white font-bold text-2xl 
            bg-gradient-to-br from-blue-500 to-blue-200 `}
            >
              P
            </div>
            {!isCollapsed && (
              <p
                style={{
                  fontWeight: "bolder",
                }}
                className="text-[#0098e5] font-bold ml-2"
              >
                Pro Sidebar
              </p>
            )}
          </div>
        </div>
        <span className="text-xs ml-2 font-bold text-gray-400"> General</span>
        <Menu className="w-full py-2 px-2 text-[13px]">
          {menuItems?.map((item) => {
            return (
              <MenuItem
                onClick={() => router.push(item?.link)}
                className={clsx("p-0", {
                  "bg-[#22c1c3] rounded-md text-white hover:bg-pink-400 hover:rounded-md hover:text-white":
                    pathName == item?.link,
                  "bg-white": pathName !== item?.link,
                })}
                active={true}
                icon={item?.Icon}
              >
                {" "}
                {item?.menu}{" "}
              </MenuItem>
            );
          })}
        </Menu>
        <span className="text-xs ml-2 font-bold text-gray-400"> Extra</span>
      </Sidebar>
    </div>
  );
};

export default SidebarComponent;
