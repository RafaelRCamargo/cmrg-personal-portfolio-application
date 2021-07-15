import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
