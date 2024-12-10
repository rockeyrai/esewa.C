'use client'
import React, { useEffect, useState, useRef } from "react";
import "./Content.css";

const NewService = () => {
  const [showLeftArrow, setShowLeftArrow] = useState(true);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const sliderRef = useRef(null); // Create the sliderRef
  const itemRef = useRef(null); // Reference to a single item for width calculation

  const data = [
    { image: "new1.webp", name: "sukraraj Iropical & infectious Desease" },
    { image: " new2.webp", name: "eSewa Bluebook Renewal Service" },
    { image: "new3.webp", name: "eSpeaker Request" },
    { image: "new4.webp", name: "Alfa Health Care $ Diagnostic Center" },
    { image: "new5.webp", name: "Naasa Securities Company Limited" },
  ];

  const scroll = (direction) => {
    if (sliderRef.current && itemRef.current) {
      const { clientWidth } = sliderRef.current;
      const itemWidth = itemRef.current.offsetWidth; // Get the width of a single item
      const scrollAmount = direction === "left" ? -itemWidth : itemWidth;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", handleScroll);
      return () => slider.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="main-contents">
      <div className="flex justify-between mb-3">
        <h1 className="font-semibold">New Service</h1>
        <button className="button-gray">view more</button>
      </div>

      <div className="relative w-[99.8%]">
        {showLeftArrow && (
            <button
            aria-label="Scroll Left"
            className="scroll-button bg-[#e1f2da] !important left-arrow"
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

        <div
          ref={sliderRef} // Add the ref to the scroll container
          className="item-container flex overflow-x-auto    gap-2 md:gap-5 snap-x snap-mandatory scroll-containe bg-[#fffefe] rounded"
        >
          {data.map((item, index) => (
            <div
              key={index}
              ref={index === 0 ? itemRef : null} // Attach ref to the first item only
              className="content-image-div flex-shrink-0 snap-center rounded border overflow-hidden border-[#e6e4e4]"
            >
              <div className="sub-content-image-div bg-[#f5f7fd]">
                <div className="contents-img">
                  <img src={item.image} alt={item.name} className="" />
                </div>
              </div>
              <div className="sub-content-view-div ">
                <h1 className="text-xs line-clamp-1	">{item.name}</h1>
                <button className="mt-4 button-white"> View Details</button>
              </div>
            </div>
          ))}
        </div>

        {showRightArrow && (
            <button
            aria-label="Scroll Right"
            className="scroll-button bg-[#e1f2da]  right-arrow"
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
  );
};

export default NewService;
