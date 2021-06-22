import React, { useState, useContext } from "react";
import "./countrypicker.css";
import Button from "@material-ui/core/Button";
import { CovidContext } from "../Context/GlobalState";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CountryInList from "../CountryInList/country";

export const CountryPicker = () => {
  const [visited, SetVisited] = useState([]);
  const DataCovid = useContext(CovidContext);
  const { countryData, globalData, setUrl, url } = DataCovid;
  const allCountries = countryData.countries ? countryData.countries : [];

  const handleRemoveItem = (e) => {
    const name = e.currentTarget.getAttribute("val");
    let newCountryList = visited.filter((item) => item.country !== name);
    let DeleteWorld = visited.filter((item) => item.country !== undefined);
    if (name) {
      SetVisited(newCountryList);
    } else if (e.currentTarget.value === "") {
      SetVisited(DeleteWorld);
    }
    return <div></div>;
  };

  const addFunction = () => {
    if (url) {
      const found = visited.some((item) => item.country === globalData.country);
      if (!found) {
        SetVisited([globalData, ...visited]);
      } else {
        SetVisited([...visited]);
      }
    } else {
      return <></>;
    }
  };

  return (
    <div className="countryPicker">
      <Autocomplete
        className="search-bar"
        onChange={(e, value) => {
          if (!value) {
            return <></>;
          }
          setUrl(value.name);
        }}
        options={allCountries}
        getOptionLabel={(option) => option.name}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="search for country"
            variant="outlined"
          />
        )}
      />
      <Button
        variant="contained"
        color="primary"
        className="input-btn"
        onClick={() => addFunction()}
      >
        click here to add searched country to the list
      </Button>
      <div className="visited-country">
        <h3>List of visited Countries</h3>
        {visited.length === 0 && (
          <p> No Countries has been searched yet .... </p>
        )}
        {url.length === 0 && <></>}
        {visited.length !== 0 &&
          url &&
          visited.map((item) => {
            return (
              <div>
                <CountryInList
                  country={item.country}
                  continent={item.continent}
                  cases={item.cases}
                  flag={item.countryInfo.flag}
                />
                <Button
                  val={item.country}
                  variant="contained"
                  color="secondary"
                  style={{ marginTop: -10 }}
                  onClick={(e) => handleRemoveItem(e)}
                >
                  remove {item.country} from list
                </Button>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default CountryPicker;
