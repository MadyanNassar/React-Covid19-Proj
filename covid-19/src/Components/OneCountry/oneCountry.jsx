import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Cards from "../Cards/Cards";
import Chart from "../Chart/Chart";
import { useHistory } from "react-router-dom";
import "./oneCountry.css";

function OneCountry() {
  const back = useHistory();
  const backFunc = () => {
    back.goBack();
  };

  return (
    <div>
      <p>
        <strong>Country more details</strong>
      </p>
      <Grid container alignItems="stretch">
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Chart />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Cards />
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="secondary"
        onClick={backFunc}
        className="btn"
      >
        GO Back
      </Button>
    </div>
  );
}

export default OneCountry;
