import React from "react";
import commonFunctions from "../../Global/commonFunctions";
import Images from "../Images";

import "./InfoCard.css";

const InfoCard = ({ infoObj }) => {
  console.log("infoObj", infoObj);
  return (
    <div className="info-container flex flex-direction-column">

      {Object.keys(infoObj).length > 0 ? (
        <>
          <div className="flex each-cont">
            <img src={Images.Destination} className="img-info" />
            <span id="areaName">{commonFunctions.capitalizeFirstLetterOfEachWord(infoObj.areaName)}</span>
          </div>

          <div className="flex each-cont">
            <img src={Images.Female} className="img-info" />
            <span id="femaleCount">{infoObj.femaleUsers}</span>
          </div>

          <div className="flex each-cont">
            <img src={Images.Male} className="img-info" />
            <span id="maleCount">{infoObj.maleUsers}</span>
          </div>

          <div className="flex each-cont">
            <img src={Images.Pro} className="img-info" />
            <span id="proUsersCount">
              There are {infoObj.proUsers} people who are using Pro
            </span>
          </div>
        </>
      ): (<div>Click a place on map to show revelent data</div>)}

    </div>
  );
};

export default InfoCard;
