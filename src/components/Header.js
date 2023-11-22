"use client";
import React from "react";

function Header() {
  return (
    <div className="navbar bg-[#22c1c3] h-3 ">
      <div className="flex-1 "></div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto h-[14px] p-[16px]"
          />
        </div>
        {/* <div className="dropdown dropdown-end"> */}
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              width={20}
              height={20}
              // priority
              alt="Tailwind CSS Navbar component"
              src={
               "https://media.istockphoto.com/id/1298125280/photo/young-woman-stock-photo.jpg?s=612x612&w=0&k=20&c=CX1rpUQU5acD6PERxcfYOT5TW8zQQezDewi-nyFgMM0="
              }
            />
          </div>
        </label>
        {/* <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul> */}
      </div>
      {/* </div> */}
    </div>
  );
}

export default Header;
