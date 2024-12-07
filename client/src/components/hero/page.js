"use client";
import React, { useState } from "react";
import "./Hero.css";
import { SlArrowRight } from "react-icons/sl";
import { LuAlignJustify } from "react-icons/lu";

const Hero = () => {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };
  // Close dropdown if user clicks outside
  const closeDropdown = (event) => {
    if (event.target.closest(".dropdown") === null) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("click", closeDropdown);
    return () => {
      window.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <section className="hero relative">
      <div className="w-[100%] bg-white mb-4 hero-mobile rounded-md  dropdown">
        <div className="flex  h-[40px] px-3 text-xs justify-between rounded-md border items-center  ">
          <p> Payment Menu</p>
          <div onClick={toggleDropdown}>
            <LuAlignJustify
              style={{ fontSize: "25px", color: "#61ba46", cursor: "pointer" }}
            />
          </div>
        </div>
        {isOpen && (
          <div className="dropdown-content flex flex-col">
            <div className="relative mt-1">
              Topup & Recharge
              <SlArrowRight className="pc-hero-menu-arrow" />
            </div>
            <div className="relative">
              Elecricity & Water
              <SlArrowRight className="pc-hero-menu-arrow" />
            </div>
            <div className="relative">
              TV Payment
              <SlArrowRight className="pc-hero-menu-arrow" />
            </div>
            <div className="relative">
              Bus Ticket/Tours and Traavels
              <SlArrowRight className="pc-hero-menu-arrow" />
            </div>
            <div className="relative">
              Education Payment
              <SlArrowRight className="pc-hero-menu-arrow" />
            </div>
            <div className="relative">
              DOFE/Insurance Payment
              <SlArrowRight className="pc-hero-menu-arrow" />
            </div>
            <div className="relative">
              Financial Services
              <SlArrowRight className="pc-hero-menu-arrow" />
            </div>
            <div className="relative mb-1">
              Movies & Entertainment
              <SlArrowRight className="pc-hero-menu-arrow" />
            </div>
          </div>
        )}
      </div>
      <div className="flex gap-2">
        <div className="hero-menu">
          <div className="relative">
            Topup & Recharge
            <SlArrowRight className="hero-menu-arrow" />
          </div>
          <div className="relative">
            Elecricity & Water
            <SlArrowRight className="hero-menu-arrow" />
          </div>
          <div className="relative">
            TV Payment
            <SlArrowRight className="hero-menu-arrow" />
          </div>
          <div className="relative">
            Bus Ticket/Tours and Traavels
            <SlArrowRight className="hero-menu-arrow" />
          </div>
          <div className="relative">
            Education Payment
            <SlArrowRight className="hero-menu-arrow" />
          </div>
          <div className="relative">
            DOFE/Insurance Payment
            <SlArrowRight className="hero-menu-arrow" />
          </div>
          <div className="relative">
            Financial Services
            <SlArrowRight className="hero-menu-arrow" />
          </div>
          <div className="relative">
            Movies & Entertainment
            <SlArrowRight className="hero-menu-arrow" />
          </div>
        </div>
        <div
          className="relative "
          onMouseEnter={() => {
            setShowLeftArrow(true);
            setShowRightArrow(true);
          }}
          onMouseLeave={() => {
            setShowLeftArrow(false);
            setShowRightArrow(false);
          }}
        >
          {showLeftArrow && (
            <button
              aria-label="Scroll Left"
              className="scroll-button left-arrow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="#61ba46"
                viewBox="0 0 24 24"
                className="scroll-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}
          <img
            src="/hero_img.webp"
            className="rounded-md w-[100%] h-[350px]"
            alt="Hero"
          />
          {showRightArrow && (
            <button
              aria-label="Scroll Right"
              className="scroll-button right-arrow" 
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="#61ba46"
                viewBox="0 0 24 24"
                className="scroll-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
