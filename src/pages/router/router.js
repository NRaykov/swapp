import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Episode from '../episodes/episodeView';
import Episodes from '../episodes/episodesList';
import Characters from '../characters/charactersList'
import Character from '../characters/characterView';
import Starship from '../starships/starshipView/'
import Login from '../../components/login/'
import {isAuthenticated} from "../../guards/auth";


const MainRouter = ({themeChanger}) => {

  return (
          <Switch>
            <Route>
              <Route path="/login" component={() => <Login themeChanger={themeChanger}/> }/>
              <Route exact path="/"
                     render={props => isAuthenticated ? ( <Episodes/> ) :
                             ( <Redirect to={{ pathname: '/login', state: {from: props.location},}} /> )
                     }
              />
              <Route  path="/characters"
                      render={props => isAuthenticated ? ( <Characters/> ) :
                              ( <Redirect to={{ pathname: '/login', state: {from: props.location},}} /> )
                      }
              />
              <Route path="/episodes/:id" component={Episode}/>
              <Route path="/character/:id" component={Character}/>
              <Route path="/starship/:id" component={Starship}/>
            </Route>
          </Switch>
  );
};

export default MainRouter;
