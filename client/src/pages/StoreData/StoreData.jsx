import React, { useEffect } from "react";
import "./storeData.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import StoreCard from "../../components/StoreCard/StoreCard";
import axios from "axios";
import { useState } from "react";

const StoreData = () => {
  const [storeDetails, setStoreDetails] = useState();

  useEffect(() => {
    const getStores = async () => {
      const store_res = await axios.get(
        "https://jfu6622.herokuapp.com/api/store/store_data"
      );
      const stores = store_res.data;
      setStoreDetails(stores);
      console.log(stores);
    };
    getStores();
  }, []);

  return (
    <div className="stores">
      <Navbar />

      <div className="storesInfo">
        <h1>Our Stores</h1>
      </div>

      <div className="wrapper">
      <div className="storesContainer">
        {storeDetails?.map((store, index) => (
          <StoreCard
            key={index}
            storeName={store.storeName}
            landmark={store.landmark}
            place={store.place}
            city_pin={store.city_pin}
            contact_1={store.contact_1}
            contact_2={store.contact_2}
          />
        ))}
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default StoreData;
