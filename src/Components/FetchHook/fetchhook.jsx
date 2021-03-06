import { useState, useEffect } from "react";
import axios from "axios";

export const FetchAPI = () => {
  const [url, setUrl] = useState("");
  const [globalData, setGlobalData] = useState({});
  const [countryData, setCountryData] = useState({});
  const [mapData, setMapData] = useState([]);
  const [mapChartData, setMapChartData] = useState({});
  const [historyData, setGlobalHistoryData] = useState({});

  useEffect(() => {
    if (url === "") {
      axios
        .get(`https://disease.sh/v2/all`)
        .then((response) => response.data)
        .then((data) => setGlobalData(data))
        .catch((err) => console.log(err));
    } else {
      axios
        .get(`https://disease.sh/v2/countries/${url}`)
        .then((response) => response.data)
        .then((data) => setGlobalData(data))
        .catch((err) => console.log(err));
    }
  }, [url, setUrl]);

  useEffect(() => {
    if (url === "") {
      axios
        .get(`https://disease.sh/v2/historical/all?lastdays=150`)
        .then((response) => response.data)
        .then((data) => setGlobalHistoryData(data))
        .catch((err) => console.log(err));
    } else {
      axios
        .get(`https://disease.sh/v2/historical/${url}?lastdays=150`)
        .then((response) => response.data)
        .then((data) => setGlobalHistoryData(data))
        .catch((err) => console.log(err));
    }
  }, [url, setUrl]);

  useEffect(() => {
    axios
      .get(`https://covid19.mathdro.id/api/countries`)
      .then((response) => response.data)
      .then((data) => setCountryData(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`https://corona.lmao.ninja/v2/countries`)
      .then((response) => response.data)
      .then((data) => setMapData(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (url) {
      import(`@highcharts/map-collection/countries/${url}/${url}-all.geo.json`)
        .then((data) => {
          setMapChartData(data);
        })
        .catch((err) => console.log({ err }));
    }
  }, [url]);

  return {
    url,
    setUrl,
    globalData,
    historyData,
    countryData,
    mapData,
    mapChartData,
    setMapChartData,
  };
};
