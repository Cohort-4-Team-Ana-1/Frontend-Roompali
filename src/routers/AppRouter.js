import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { NavBar } from "../components/NavBar";

import { ScreenFavorites } from "../pages/ScreenFavorites";
import { ScreenHome } from "../pages/ScreenHome";
import { ScreenRoomDetails } from "../pages/ScreenRoomDetails";

export const AppRouter = () => {
  return (
    <Router>
      <>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ScreenHome} />
          <Route exact path="/favorites" component={ScreenFavorites} />
          <Route exact path="/room-details" component={ScreenRoomDetails} />
          <Redirect exact to="/" />
        </Switch>
      </>
    </Router>
  );
};
