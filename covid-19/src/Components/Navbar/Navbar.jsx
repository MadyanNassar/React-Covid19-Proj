import React from "react";
import "./Navbar.css";
import logo from "./logo.png";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

function Navbar() {
  return (
    <div className="navbar">
      <AppBar position="static" style={{ backgroundColor: "#003580" }}>
        <Toolbar>
          <img src={logo} alt="logo" style={{ width: 50 }} />
          <Grid justify="center" container>
            <Grid item>
              <Typography
                type="title"
                color="inherit"
                variant="h5"
                style={{ fontFamily: "Lato", fontWeight: 500 }}
              >
                COVID-19 APP
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
