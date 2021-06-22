import React, { useContext } from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { CovidContext } from "../Context/GlobalState";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function CountryInList({ country, continent, cases, flag }) {
  const data = useContext(CovidContext);
  const { globalData } = data;
  const countryId = globalData.countryInfo.iso2.toLowerCase();
  const classes = useStyles();

  if (!flag) return <></>;

  return (
    <div key={country} className={classes.root}>
      <Grid item xs>
        <Paper className={classes.paper}>
          <img src={flag} style={{ width: "200" }} alt={country} />
          <p style={{ fontWeight: "bold", color: "green" }}>
            Country : {country}
          </p>
          <p style={{ fontWeight: "bold", color: "blue" }}>
            Continent : {continent}
          </p>
          <p>No. of cases</p>
          <CountUp
            style={{ fontWeight: "bold", color: "red" }}
            start={0}
            end={cases}
            separator=","
            duration={2.5}
          />
          <Link to={`${countryId}`}>
            <p style={{ color: "green" }}>more details </p>
          </Link>
        </Paper>
      </Grid>
    </div>
  );
}

export default CountryInList;
