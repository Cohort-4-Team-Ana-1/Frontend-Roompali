import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { NavBar } from "../components/ScreenNavBar";
import { ScreenLoginModal } from "../components/ScreenLoginModal";
import { ScreenHome } from "../components/ScreenHome";
import { ScreenRegisterModal } from "../components/ScreenRegisterModal";
import { Favorites } from "../components/ScreenFavorites";
import { ScreenRoomDetails } from "../pages/ScreenRoomDetails";


export const AppRouter = () => {
  return (
    <Router>
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ScreenHome} />
          <Route exact path="/login" component={ScreenLoginModal} />
          <Route exact path="/register" component={ScreenRegisterModal} />
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/room-details" component={ScreenRoomDetails} />
        </Switch>
      </React.Fragment>
    </Router>
  );
};
