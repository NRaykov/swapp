import React, {useState} from 'react';
//Navigation and login
import {BrowserRouter as Router, Route, Link, Redirect, withRouter} from 'react-router-dom';
import { NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Navbar} from 'reactstrap';
import {isAuthenticated, signout} from './guards/auth';
import Login from './components/login/';
import Container from './components/elements/container/container';

//Styling
import './App.css';
import {FaSignOutAlt, FaSignInAlt} from 'react-icons/fa'; //Icons
import { ThemeProvider } from 'styled-components/macro';
import { themes } from './components';



//Pages
import Episodes from "./pages/episodes/episodesList/";
import Episode from "./pages/episodes/episodeView/";
import Characters from "./pages/characters/charactersList/";
import Character from "./pages/characters/characterView/";
import Starship from "./pages/starships/starshipView";


export const RouteComponent = () => {

  const [theme, setTheme] = useState('light');

  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);
  //****  login Button Component
  const LoginButton = withRouter(({ history }) =>
          isAuthenticated ? (
               <NavLink onClick={() => signout(() => history.push('/'))} className="loginButton"><FaSignOutAlt/></NavLink>
          ) : ( <NavLink to="/login" className="loginButton"><FaSignInAlt/></NavLink> ),
  );

  return (
          <Router>
            <ThemeProvider theme={themes[theme]}>
              <Container variant="primary" className="container-main">
                <header className="header">
                    <Navbar className="navbar" light expand="md">
                      <NavbarBrand href="#" className="logo"
                           onClick={() => setTheme(theme === 'light' ? 'dark' : 'light') }
                      >swapp</NavbarBrand>
                      <NavbarToggler onClick={toggle}/>
                      <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                          <NavItem>
                            <Link className="nav-link" to="/">Episodes</Link>
                          </NavItem>

                          {/*Temporay Route*/}
                          <NavItem>
                            <Link className="nav-link" to="/episode">Episode View</Link>
                          </NavItem>
                          <NavItem>
                            <Link className="nav-link" to="/characters">Characters</Link>
                          </NavItem>

                          {/*Temporaty Route*/}
                          <NavItem>
                            <Link className="nav-link" to="/character">Character View</Link>
                          </NavItem>

                          {/*Temporaty Route*/}
                          <NavItem>
                            <Link className="nav-link" to="/starship">Starship View</Link>
                          </NavItem>
                          <NavItem>
                            <LoginButton/>
                          </NavItem>
                        </Nav>
                      </Collapse>
                    </Navbar>
                </header>

                <div className="container py-5">
                  <Route path="/login" component={Login}/>
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
                  {/*Temporay Route*/}
                  <Route  path="/episode"
                          component={Episode}
                  />
                  {/*Temporay Route*/}
                  <Route path="/character" component={Character}/>

                  {/*Temporay Route*/}
                  <Route path="/starship" component={Starship}/>
                </div>
              </Container>
            </ThemeProvider>
          </Router>
  )
};

