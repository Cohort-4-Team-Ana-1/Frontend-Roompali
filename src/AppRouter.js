import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { ModalLogin } from "./components/ModalLogin";
import { Home } from "./components/Home";
import { ModalRegister } from "./components/ModalRegister";
import { Favorites } from "./components/Favorites";
import { RoomDetails } from "./components/RoomDetails";

export const AppRouter = () => {
  return (
    <Router>
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={ModalLogin} />
          <Route exact path="/register" component={ModalRegister} />
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/room-details" component={RoomDetails} />
        </Switch>
      </React.Fragment>
    </Router>
  );
};
