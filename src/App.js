import "./App.css";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Component/Home";
import { Redirect, Route, Switch } from "react-router";
import Contact from "./Component/Contact";
import Service from "./Component/Service";
import About from "./Component/About";
import Navbar from "./Component/Navbar";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/service" component={Service} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
