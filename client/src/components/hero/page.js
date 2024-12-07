"use client";
import React, { useState } from "react";
import "./Hero.css";
import { SlArrowRight } from "react-icons/sl";

const Hero = () => {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const scroll = (direction) => {
    // Example scroll logic
    const container = document.querySelector(".hero");
    if (container) {
      const scrollAmount = direction === "left" ? -200 : 200;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="hero relative">
      <div></div>
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
              onClick={() => scroll("left")}
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
              className="scroll-button right-arrow" /* Include the right-arrow class */
              onClick={() => scroll("right")}
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
