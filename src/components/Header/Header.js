import React from "react";
import commonFunctions from "../../Global/commonFunctions";

import Images from "../Images";
import "./Header.css";
import "../../Global/global.css"

const Header = () => {
  const headerItemsLeft = [
    "learn",
    "safety",
    "support",
  ];

  const headerItemsRight = ["download", "login"];

  return (
    <div className="header flex">
      <div className="header-left flex align-items-center">
        <div className="logo-section flex align-items-center">
          <img src={Images.Logo2} className="logo-icon" />
          <span className="logo-text cursor-pointer">Kyupid</span>
        </div>
        {headerItemsLeft.map((item, index) => {
          return(
            <div key={index} className="flex items cursor-pointer">
              {commonFunctions.capitalizeFirstLetterOfEachWord(item)}
            </div>
          )
        })}
      </div>
      <div className="header-right flex align-items-center">
      {headerItemsRight.map((item, index) => {
          return(
            <div key={index} className="flex items cursor-pointer">
              {commonFunctions.capitalizeFirstLetterOfEachWord(item)}
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Header;
