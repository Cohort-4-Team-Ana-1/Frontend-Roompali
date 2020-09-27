import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { NavBar } from "../components/NavBar";
import { LoginModal } from "../components/LoginModal";
import { ScreenHome } from "../pages/ScreenHome";
import { RegisterModal } from "../components/RegisterModal";
import { Favorites } from "../pages/ScreenFavorites";
import { RoomDetails } from "../pages/ScreenRoomDetails";

export const AppRouter = () => {
  return (
    <Router>
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ScreenHome} />
          <Route exact path="/login" component={LoginModal} />
          <Route exact path="/register" component={RegisterModal} />
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/room-details" component={RoomDetails} />
        </Switch>
      </React.Fragment>
    </Router>
  );
};
