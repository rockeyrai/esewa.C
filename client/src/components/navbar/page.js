"use client";
import React, { useState } from "react";
import "./Navbar.css"; // Create a CSS file for styling
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav>
      <div className=" w-full bg-[#1d242e] first-nav">
        <div className=" w-full top-nav">
          <img src="/esewa_logo.png" />
          <div className="mobile  items-center w-[90%] h-[33px]">
            <div className="second-top-nav relative  w-[65%] mr-4">
              <input
                placeholder="Search services/merchant by tags (e.g.adsl)"
                className="nav-search "
              />
              <img src="/search.png" className=" absolute left-[10px]" />
            </div>
            <div className=" nav-right w-[100%]">
              <div className="relative">
                <input placeholder="eSewa ID" />
                <FaUser
                  color="#5fb946"
                  size={13}
                  className="absolute top-[10px] left-[8px] "
                />
              </div>
              <div className="relative">
                <input placeholder="Password" />
                <FaLock
                  color="#5fb946"
                  size={13}
                  className="absolute top-[10px] left-[8px] "
                />
                <a className="text-[11px] left-0 top-9 absolute text-white">
                  Forgot Password?
                </a>
              </div>
              <button className="bg-[#488d35] text-[#c7c0c0] text-[12px] rounded-sm">
                Login
              </button>
              <button className="bg-[#1d242e] text-[#5fb946] text-[12px] rounded-sm border-[#5fb946] border-2">
                Register
              </button>
            </div>
          </div>

          <button id="login-btn">Login</button>
        </div>
      </div>
      <div className="mobile-nav">
        <div className=" px-5 h-[45px] laptop">
          <input
            placeholder="Search services/merchant by tags (e.g.adsl)"
            className="nav-search rounded-md h-[35px] "
          />
          <img src="/search.png" className=" absolute left-[28px] top-[10px] w-4 h-4" />
        </div>
        <div className=" bottom-nav">
          <a>Top Up</a>
          <a>Airlines</a>
          <a>Internet Bill</a>
          <a>Load Fund</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
