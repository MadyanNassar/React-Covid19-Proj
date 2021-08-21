import React, { createContext } from "react";
import { FetchAPI } from "../FetchHook/fetchhook";
export const CovidContext = createContext();
export const CovidProvider = ({ children }) => {
  const {
    url,
    setUrl,
    globalData,
    historyData,
    countryData,
    mapData,
    mapChartData,
    setMapChartData,
  } = FetchAPI();

  return (
    <CovidContext.Provider
      value={{
        url,
        setUrl,
        globalData,
        historyData,
        countryData,
        mapData,
        mapChartData,
        setMapChartData,
      }}
    >
      {children}
    </CovidContext.Provider>
  );
};
