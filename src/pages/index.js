import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Episode from './episodes/episode/episode';
import Episodes from './episodes/episodes/episodes';

import Characters from './characters/characters/characters'
import Character from './characters/characterView';

import Starship from './starships/starship/starship'
//import Login from '../components/login'
import PrivateRoute from "../components/PrivateRoute";
//import {isAuthenticated} from "../../guards/auth";


const Pages = ({}) => {

  return (
          <Switch>
            <PrivateRoute>
              <Route exact path="/" component={Episodes}/>
              <Route exact path="/episodes/"  component={Episodes} />
              <Route path="/episodes/:episodeId" component={Episode} />


              <Route exact path="/characters"  component={Characters} />
              <Route path="/characters/:characterId" component={Character}/>

              <Route path="/starships/:starshipId" component={Starship}/>
            </PrivateRoute>
          </Switch>
  );
};

export default Pages;
