import React from "react";
import "./Content.css";
const Contents = () => {
  return (
    <div className="main-contents">
      <div className="flex justify-between mb-3">
        <h1 className="font-semibold">Popular Service</h1>
        <button className="button-gray">view more</button>
      </div>
      <div className="item-container bg-[#fffefe] rounded ">
        <div className="content-image-div border rounded border-[#e6e4e4]">
          <div className="  sub-content-image-div bg-[#f5f7fd] ">
            <div className="contents-img">
              <img src="/LrYGf4mSK02MvbHuAeGllogoiphone.webp" />
            </div>
          </div>
          <div className="sub-content-view-div">
            <h1 className="text-xs">Re 1 Game</h1>
            <button className="mt-4 button-white"> View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contents;
