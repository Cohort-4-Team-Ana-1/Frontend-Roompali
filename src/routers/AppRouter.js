import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { NavBar } from "../components/NavBar";
import { Step1 } from "../components/Step1";
import { Step2 } from "../components/Step2";
import { Step3 } from "../components/Step3";
import { ScreenChooseRol } from "../pages/ScreenChooseRol";
import { ScreenCreateHostRol } from "../pages/ScreenCreateHostRol";
import { ScreenCreateRoom } from "../pages/ScreenCreateRoom";

import { ScreenFavorites } from "../pages/ScreenFavorites";
import { ScreenHome } from "../pages/ScreenHome";
import { ScreenRoomDetails } from "../pages/ScreenRoomDetails";
import { ScreenSearch } from "../pages/ScreenSearch";


export const AppRouter = () => {
  return (
    <Router>
      <>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ScreenHome} />
          <Route exact path="/favorites" component={ScreenFavorites} />
          <Route exact path="/room-details/:roomId" component={ScreenRoomDetails} />
          <Route exact path="/create-room" component={ScreenCreateRoom} />
          <Route exact path="/choose-user-rol" component={ScreenChooseRol} />
          <Route exact path="/create-host-rol" component={ScreenCreateHostRol} />

          <Route exact path="/create-room/step-1" component={Step1} />
          <Route exact path="/create-room/step-2" component={Step2} />
          <Route exact path="/create-room/step-3" component={Step3} />

          <Route exact path="/rooms/:city" component={ScreenSearch} />

          
          <Redirect exact to="/" />
        </Switch>
      </>
    </Router>
  );
};
