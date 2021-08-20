import React from "react";
import Map from "../Map/Map";
import CountryPicker from "../CountryPicker/CountryPicker";

const Home = () => {
  return (
    <div>
      <CountryPicker />
      <hr style={{ marginTop: "30px" }} />
      <Map />
    </div>
  );
};
export default Home;
