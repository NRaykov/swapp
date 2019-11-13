import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Episode from './episodes/episode/episode';
import Episodes from './episodes/episodes/episodes';

import Characters from './characters/characters/characters'
import Character from './characters/character/character';

import Starship from './starships/starship/starship'
import LoginGuard from "../components/loginForm/guards/loginGuard";
import Login from "../components/loginForm/login";
//import {isAuthenticated} from "../../guards/auth";


const Pages = ({themeChanger}) => {

  return (
          <Switch>
            <LoginGuard themeChanger={themeChanger}>
              <Route exact path="/" component={Episodes}/>

              <Route exact path="/episodes/"  component={Episodes} />
              <Route path="/episodes/:episodeId" component={Episode} />

              <Route exact path="/characters"  component={Characters} />
              <Route path="/characters/:characterId" component={Character}/>

              <Route path="/starships/:starshipId" component={Starship}/>
            </LoginGuard>
          </Switch>
  );
};

export default Pages;
