'use client'
import React, { useState } from "react";
import "./SlidingCards.css";

const SlidingCards = () => {
  const [isPaused, setIsPaused] = useState(false);
  const data = [
    {
      image: "https://via.placeholder.com/300x200",
      name: "Card 1",
      description: "This is the first card.",
    },
    {
      image: "https://via.placeholder.com/300x200",
      name: "Card 2",
      description: "This is the second card.",
    },
    {
      image: "https://via.placeholder.com/300x200",
      name: "Card 3",
      description: "This is the third card.",
    },
  ];

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div
      className="slider-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="slider"
        style={{
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {data.concat(data).map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlidingCards;
