import React, { useState, useEffect, useContext } from "react";
import Button from "@material-ui/core/Button";
import { CovidContext } from "../Context/GlobalState";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CountryInList from "../CountryInList/country";

export const CountryPicker = () => {
  const [visited, setVisited] = useState([]);
  const [search, SetSearch] = useState(false);
  const DataCovid = useContext(CovidContext);
  const { countryData, globalData, setUrl, url } = DataCovid;
  const allCountries = countryData.countries ? countryData.countries : [];

  const savedCountries = JSON.parse(localStorage.getItem("countries"));

  async function fetch() {
    try {
      if (savedCountries) {
        await setVisited(savedCountries);
      } else {
        return <></>;
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetch();
  }, []);

  const addFunction = () => {
    if (url) {
      const found = visited.some((item) => item.country === globalData.country);
      if (!found) {
        setVisited([globalData, ...visited]);
        localStorage.setItem(
          "countries",
          JSON.stringify([globalData, ...visited])
        );
      } else {
        return <></>;
      }
    }
  };

  const handleRemoveItem = (e) => {
    const name = e.currentTarget.getAttribute("val");
    let newCountryList = visited.filter((item) => item.country !== name);
    let DeleteWorld = visited.filter((item) => item.country !== undefined);
    if (name) {
      setVisited(newCountryList);
      localStorage.setItem("countries", JSON.stringify(newCountryList));
    } else if (e.currentTarget.value === "") {
      setVisited(DeleteWorld);
      localStorage.setItem("countries", JSON.stringify(DeleteWorld));
    }
    return <div></div>;
  };

  return (
    <div className="countryPicker">
      <Autocomplete
        className="search-bar"
        onChange={(e, value) => {
          if (!value) {
            SetSearch(false);
            return <></>;
          }
          setUrl(value.name);
          SetSearch(true);
        }}
        options={allCountries}
        getOptionLabel={(option) => option.name}
        style={{ width: 300, margin: "10px auto" }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="search for country"
            variant="outlined"
          />
        )}
      />
      <Button
        disabled={search ? false : true}
        variant="contained"
        color="primary"
        onClick={() => addFunction()}
      >
        Search
      </Button>
      <h3>List of visited Countries</h3>
      <div style={{ maxHeight: "30rem", overflow: "auto" }}>
        {visited.length === 0 && (
          <p> No Countries has been searched yet .... </p>
        )}
        {url.length === 0 && <></>}
        {visited.length !== 0 &&
          url &&
          visited.map((item) => {
            return (
              <div key={item.country}>
                <CountryInList
                  country={item.country}
                  continent={item.continent}
                  cases={item.cases}
                  flag={item.countryInfo.flag}
                  countryId={item.countryInfo.iso2.toLowerCase()}
                />
                <Button
                  val={item.country}
                  variant="contained"
                  color="secondary"
                  style={{ marginTop: -15 }}
                  onClick={(e) => handleRemoveItem(e)}
                >
                  remove {item.country} from list
                </Button>
                <hr
                  style={{
                    border: "solid 1px",
                    marginBottom: "10px",
                  }}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default CountryPicker;
