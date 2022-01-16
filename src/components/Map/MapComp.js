import React, { useEffect, useState } from "react";
import axios from "axios";
import { MapContainer, GeoJSON } from "react-leaflet";
import commonFunctions from "../../Global/commonFunctions";
import Loader from "../Loader/Loader";
import InfoCard from "../InfoCard/InfoCard";
import Ledgend from "../Ledgend/Ledgend";
import ledgendItems from "../Ledgend/LedgendItems";
import "leaflet/dist/leaflet.css";

import "./MapComp.css";

const MapComp = () => {
  const [mapAreaData, setMapAreaData] = useState();
  const [usersData, setUserData] = useState();
  const [dataLoading, setDataLoading] = useState(true);
  // const [areaClicked, setAreaClicked] = useState(false);
  // const [proUsers, setProUsers] = useState();
  // const [gender, setGender] = useState({ femaleCount: "", maleCount: "" });
  const [areaIdGrouppedData, setAreaIdGrouppedData] = useState([]);
  const [userInfoAreaWise, setUserInfoAreaWise] = useState({});

  useEffect(() => {
    fetchApis();
  }, []);

  // const fetchArea = async () => {
  //   const response = await axios
  //     .get("https://kyupid-api.vercel.app/api/areas")
  //     .catch((err) => console.log("Error", err));
  //   setMapAreaData(response?.data);
  //   setDataLoading(false);
  // };

  // const fetchUserDetails = async () => {
  //   const response = await axios
  //     .get("https://kyupid-api.vercel.app/api/users")
  //     .catch((err) => console.log("Error", err));
  //   setUserData(response.data.users);
  //   groupUserData(response.data.users);
  // };

  const fetchApis = async () => {
    const responseMap = await axios
      .get("https://kyupid-api.vercel.app/api/areas")
      .catch((err) => console.log("Error", err));
    setMapAreaData(responseMap?.data);
    const responseUser = await axios
      .get("https://kyupid-api.vercel.app/api/users")
      .catch((err) => console.log("Error", err));
    setUserData(responseUser?.data?.users);
    groupUserData(responseUser?.data?.users);
    // setDataLoading(false);
  };

  const groupUserData = (users) => {
    const areaIdwiseUsers = users.reduce((newObj, user) => {
      newObj[user.area_id] = newObj[user.area_id] || [];
      newObj[user.area_id].push(user);
      return newObj;
    }, Object.create(null));

    setAreaIdGrouppedData(areaIdwiseUsers);
  };

  const getUsersInfo = (areaName,areaId) => {
    const targetArray = areaIdGrouppedData[areaId];
    const usersInAreaInfo = {
      areaId: areaId,
      areaName: areaName,
      totalUsers: areaIdGrouppedData[areaId].length,
      proUsers: targetArray.filter((user) => user.is_pro_user === true).length,
      maleUsers: targetArray.filter((user) => user.gender === "M").length,
      femaleUsers: targetArray.filter((user) => user.gender === "F").length,
    };
    // setAreaColor(usersInAreaInfo, areaId);
    return usersInAreaInfo;
  };

  const setAreaColor = (usersInAreaInfo) => {
    const legendItemforColor = ledgendItems.find(legItem => {
      legItem.isFor(usersInAreaInfo.totalUsers)
    });
    if(legendItemforColor != null ){

    }
  }

  const onClickLayer = (e) => {
    const usersInfoInArea = getUsersInfo(e.target.feature.properties.name,e.target.feature.properties.area_id);
    setUserInfoAreaWise(usersInfoInArea);
    e.target.setStyle({
      color: "green",
      fillColor: "red",
    });
  };

  const onEachArea = (area, layer) => {
    const areaName = commonFunctions.capitalizeFirstLetterOfEachWord(
      area.properties.name
    );

    layer.on({
      click: onClickLayer,
    });
    layer.bindPopup(areaName);

    const legendItemforColor = ledgendItems.find(legItem => {
      legItem.isFor(userInfoAreaWise.totalUsers)
    });
    if(legendItemforColor != null ){
      area.properties.color = legendItemforColor.color;
    }
  };

  const geoJsonStyle = {
    color: "#4b5663",
  };

  const legdentItemsInReverse = [...ledgendItems].reverse();

  return (
    <div className="outer-container">
      {dataLoading ? (
        <Loader isLoading={setDataLoading} />
      ) : (
        <div className="map-cont flex justify-content-space-between">
          <div className="map">
            <MapContainer
              style={{ height: "80vh" , width: "50vw"}}
              center={[12.97, 77.59]}
              zoom={11}
            >
              <GeoJSON
                style={geoJsonStyle}
                data={mapAreaData?.features}
                onEachFeature={onEachArea}
              />
            </MapContainer>
            <Ledgend ledgentItemsToDisplay={legdentItemsInReverse}/>
          </div>
          <InfoCard infoObj={userInfoAreaWise}/>
        </div>
      )}
    </div>
  );
};

export default MapComp;
