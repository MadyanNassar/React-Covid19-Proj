import React from "react";
import { useState, useContext } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { CovidContext } from "../Context/GlobalState";
import Grid from "@material-ui/core/Grid";

export default function Map() {
  const covid = useContext(CovidContext);
  const { mapData } = covid;
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "90vh",
    latitude: 52.4,
    longitude: 5,
    zoom: 4,
  });

  return (
    <div>
      <h2> World map with total cases per each country</h2>
      <Grid>
        <div>
          <ReactMapGL
            mapStyle="mapbox://styles/mapbox/dark-v9"
            {...viewport}
            mapboxApiAccessToken={
              "pk.eyJ1IjoibWFkeWFuIiwiYSI6ImNrcHh0MmdraDA5N20ycHFjMDBkaWhwaDQifQ.rKoCyqN5i-jQRRK-g4gnQw"
            }
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
            style={{  maxWidth:'97vw', margin:'0 auto'}}
          >
            {mapData.map((country) => {
              return (
                <Marker
                  key={country.country}
                  latitude={country.countryInfo.lat}
                  longitude={country.countryInfo.long}
                >
                  <div>
                    <img
                      src={country.countryInfo.flag}
                      alt="countries"
                      width="25px"
                    />
                    <abbr
                      style={{
                        marginLeft: 5,
                        color: "white",
                        fontSize: "12px",
                        textDecoration: "none",
                        cursor: "Pointer",
                      }}
                      title={`
Country: ${country.country}
Recovered: ${country.recovered}
Active: ${country.active}
Deaths: ${country.deaths}
`}
                    >
                      {country.cases}
                    </abbr>
                  </div>
                </Marker>
              );
            })}
          </ReactMapGL>
        </div>
      </Grid>
    </div>
  );
}
