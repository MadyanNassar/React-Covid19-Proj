import React, { useContext } from "react";
import "./Card.css";
import Paper from "@material-ui/core/Paper";
import CountUp from "react-countup";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { CovidContext } from "../Context/GlobalState";
const useStyles = makeStyles((theme) => ({
  paper: {
    width: 190,
    padding: theme.spacing(1),
    height: 180,
    marginTop: 6,
    marginBottom: 15,
    borderRadius: 10,
  },
  gray: {
    backgroundColor: "gray",
  },
  green: {
    backgroundColor: "green",
  },
  red: {
    backgroundColor: "red",
  },
  blue: {
    backgroundColor: "blue",
  },
}));

const Cards = () => {
  const covid = useContext(CovidContext);
  const { globalData } = covid;
  let covidData = globalData.cases
    ? globalData
    : { cases: 0, recovered: 0, active: 0, deaths: 0 };
  const classes = useStyles();
  return (
    <div className="card">
      <Grid container spacing={2}>
        <div className="card-style">
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Paper className={`${classes.paper} ${classes.gray}`}>
              <Typography variant="h6" gutterBottom color="textSecondary">
                <p style={{fontWeight:"bold"}}>Total Cases</p>
                
              </Typography>
              <Typography variant="h4" gutterBottom>
                <CountUp
                  start={0}
                  end={covidData.cases}
                  separator=","
                  duration={2.5}
                />
              </Typography>
              <Typography color="textSecondary">
                Number of Infected cases
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Paper className={`${classes.paper} ${classes.blue}`}>
              <Typography variant="h6" gutterBottom color="textSecondary">
              <p style={{fontWeight:"bold", color:"white"}}>Active</p>
              </Typography>
              <Typography variant="h4" gutterBottom>
                <CountUp
                  start={0}
                  end={covidData.active}
                  separator=","
                  duration={2.5}
                />
              </Typography>
              <Typography color="textSecondary">
                Number of Active cases
              </Typography>
            </Paper>
          </Grid>
        </div>
        <div className="card-style">
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Paper className={`${classes.paper} ${classes.green}`}>
              <Typography variant="h6" gutterBottom color="textSecondary">
                
                <p style={{fontWeight:"bold"}}>Recovered</p>
              </Typography>
              <Typography variant="h4" gutterBottom>
                <CountUp
                  start={0}
                  end={covidData.recovered}
                  separator=","
                  duration={2.5}
                />
              </Typography>
              <Typography color="textSecondary">
                Number of Recovered cases
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Paper className={`${classes.paper} ${classes.red}`}>
              <Typography variant="h6" gutterBottom color="textSecondary">
                
                <p style={{fontWeight:"bold"}}>Deaths</p>
              </Typography>
              <Typography variant="h4" gutterBottom>
                <CountUp
                  start={0}
                  end={covidData.deaths}
                  separator=","
                  duration={2.5}
                />
              </Typography>
              <Typography color="textSecondary">Number of Deaths</Typography>
            </Paper>
          </Grid>
        </div>
      </Grid>
    </div>
  );
};
export default Cards;
