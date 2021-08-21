import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export default function Footer() {
  return (
    <div style={{marginTop: '20px'}}>
      <AppBar position="static" style={{ backgroundColor: "#212121" }}>
        <Container>
          <Toolbar>
            <Typography
              type="title"
              color="inherit"
              variant="h5"
              style={{ fontFamily: "Lato", fontWeight: 500 }}
            >
              © 2021 copyrights
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
