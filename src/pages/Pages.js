import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Episode from './EpisodeComponets/Episode/Episode';
import Episodes from './EpisodeComponets/Episodes/Episodes';

import Characters from './CharacterComponents/Characters/Characters'
import Character from './CharacterComponents/Character/Character';

import Starship from './StarshipComponents/Starship/Starship'
import LoginGuard from "../components/LoginSystem/guards/loginGuard";
import Login from "../components/LoginSystem/Login";

const Pages = ({themeChanger}) => {

  return (
          <Switch>
            <LoginGuard themeChanger={themeChanger}>
              <Route exact path="/login/" component={Login}/>

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
