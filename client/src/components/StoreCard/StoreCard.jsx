import React from "react";
import "./storecard.scss";
import { Home, Phone } from "@mui/icons-material";

const StoreCard = ({storeName, landmark, place, city_pin, contact_1, contact_2}) => {
  return (
    <div className="storeCard">
      <div className="storeName">{storeName}</div>


      {/* <img
        src="./assets/Images/Stores/PatnyStore.jpg"
        alt=""
        className="storeImg"
      /> */}

      <div className="storeInfo">
        <div className="storeAddress">
          <Home />
          <span>{landmark}</span>
          <span>{place}</span>
          <span>{city_pin}</span>
        </div>
        <div className="storeContact">
            <Phone />
          <span>{contact_1}</span>
          <span>{contact_2}</span>
        </div>
      </div>



    </div>
  );
};

export default StoreCard;
