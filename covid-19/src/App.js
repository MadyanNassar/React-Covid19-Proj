import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import OneCountry from "./Components/OneCountry/oneCountry";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";

import { CovidProvider } from "./Components/Context/GlobalState";

function App() {
  return (
    <CovidProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/:countryId" component={OneCountry} />
          <Footer />
        </div>
      </Router>
    </CovidProvider>
  );
};

export default App;
