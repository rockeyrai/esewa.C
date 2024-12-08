import React from "react";
import "./Content.css";
const Contents = () => {
  const data = [
    { image: "LrYGf4mSK02MvbHuAeGllogoiphone.webp", name: "Re 1 Game" },
    { image: "ZUdBFvIDuXH6KqNPU5ecQR Code Only.webp", name: "Business QR Request" },
    { image: "oOMc2FtQwkghzqchwYWFNepalstock.webp", name: "Trade Management" },
    { image: "N567WpEwsSmrqniGr3IAbrtcon.webp", name: "British Council-IELTS" },
    { image: "/6JHSt1Zfo4fRATxXOeFMDOLRKeqrdfQAyUoMdyZn272.webp", name: "IDP-IELTS" },
    { image: "ZVFXuPN7LGdVTpKGVzvtNepairlogoo.webp", name: "Nepal Airlines Domestic" },
    { image: "ZVFXuPN7LGdVTpKGVzvtNepairlogoo.webp", name: "Nepal Airlines International" },
  ];
  return (
    <div className="main-contents">
      <div className="flex justify-between mb-3">
        <h1 className="font-semibold">Popular Service</h1>
        <button className="button-gray">view more</button>
      </div>
      <div className="item-container bg-[#fffefe] rounded ">
        {data.map((item, index) => (
          <div
            key={index}
            className="content-image-div border rounded border-[#e6e4e4]"
          >
            <div className="sub-content-image-div bg-[#f5f7fd]">
              <div className="contents-img">
                <img src={item.image} alt={item.name} />
              </div>
            </div>
            <div className="sub-content-view-div">
              <h1 className="text-xs">{item.name}</h1>
              <button className="mt-4 button-white"> View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contents;
