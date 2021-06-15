import React, { useState, useContext } from "react";
import "./countrypicker.css";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { CovidContext } from "../Context/GlobalState";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: theme.spacing(3),
    flexDirection: "row",
    justifyContent: "space-around",
    overflow: "hidden",
    flexWrap: "wrap",
    paper: {
      margin: theme.spacing(2),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

const CountryPicker = () => {
  const [visited, SetVisited] = useState([]);
  const DataCovid = useContext(CovidContext);
  const { setUrl, countryData, globalData } = DataCovid;
  // const [lnk, setLnk] = useState(false);
  const allCountries = countryData.countries ? countryData.countries : [];
  console.log(visited);

  function deleteCountry({ id }) {
    let newCountryList = visited.filter((country) => country.id !== id);
    SetVisited(newCountryList);
    return <div></div>;
  }

  const classes = useStyles();
  return (
    <div className="countryPicker">
      <Autocomplete
        className="search-bar"
        defaultValue={allCountries.find((v) => v.name)}
        onInputChange={(e, value) => {
          setUrl(value);

          const found = visited.some(
            (item) => item.country === globalData.country
          );
          if (!found) {
            SetVisited([globalData, ...visited]);
          } else {
            SetVisited([...visited]);
          }
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
      <div className="visited-country">
        <h3>List of visited Countries</h3>
        {visited.length === 0 && (
          <p> No Countries has been searched yet .... </p>
        )}
        {visited.length !== 0 &&
          visited.map((item) => {
            return (
              <div>
                <div className={classes.root}>
                  <Grid xs={1}>
                    <Grid item xs={18}>
                      <Paper className={classes.paper}>
                        {/* <img src = {item.countryInfo.flag} style={{width:"250"}} /> */}
                        <p style={{ fontWeight: "bold", color: "green" }}>
                          Country : {item.country}
                        </p>
                        <p style={{ fontWeight: "bold", color: "blue" }}>
                          Continent : {item.continent}
                        </p>
                        <p style={{ fontWeight: "bold", color: "red" }}>
                          Total-Cases: {item.cases}
                        </p>
                        <Link to={`/country`}>
                          <p style={{ color: "green" }}>more details </p>
                        </Link>
                        <Button variant="contained" onClick={deleteCountry}>
                          x
                        </Button>
                      </Paper>
                    </Grid>
                  </Grid>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default CountryPicker;