import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import Cards from "../Cards/Cards";
import Chart from "../Chart/Chart";
import MapChart from "../MapChart/MapChart";
import { Tab, Tabs as TabsComponent, TabList, TabPanel } from "react-tabs";
import { useHistory, useParams } from "react-router-dom";
import { CovidContext } from "../Context/GlobalState";
import "react-tabs/style/react-tabs.css";

function OneCountry() {
  const back = useHistory();
  const data = useContext(CovidContext);
  const { setUrl, globalData } = data;
  const { countryId } = useParams();
  const isCountry = globalData.country;
  setUrl(countryId);

  if (!isCountry) {
    return (
      <div>
        <h1> No country found ... </h1>
        <br />
        {countryId === "undefined" ? (
          <p>there's no data for country {isCountry}</p>
        ) : (
          <h2> the {countryId} in the link is not reference to any country </h2>
        )}
      </div>
    );
  }

  const backFunc = () => {
    back.push("/");
  };

  return (
    <div>
      <h1>More information About {globalData.country} ...</h1>

      <TabsComponent>
        <TabList>
          <Tab> Chart </Tab>
          <Tab> Statistics </Tab>
          <Tab> Map of {globalData.country} </Tab>
        </TabList>

        <TabPanel>
          <Chart />
        </TabPanel>
        <TabPanel>
          <Cards />
        </TabPanel>
        <TabPanel>
          <MapChart />
        </TabPanel>
      </TabsComponent>

      <Button
        variant="contained"
        color="secondary"
        onClick={backFunc}
        style={{ margin: "50px auto !important" }}
      >
        GO Back
      </Button>
    </div>
  );
}

export default OneCountry;
