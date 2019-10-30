import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Link, Redirect, withRouter} from 'react-router-dom';
import {isAuthenticated, signout} from './guards/auth';
import Login from './components/Login/Login.js';
import Episodes from "./pages/episodes/Episodes";
import Characters from "./pages/characters/Characters";

import './App.css';
import {Container, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Navbar} from 'reactstrap';
import {FaSignOutAlt, FaSignInAlt} from 'react-icons/fa'; //LogOut


export const RouteNavigation = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  //****  Login Button Component
  const LoginButton = withRouter(({ history }) =>
          isAuthenticated ? (
               <NavLink onClick={() => signout(() => history.push('/'))} className="loginButton"><FaSignOutAlt/></NavLink>
          ) : ( <NavLink to="/login" className="loginButton"><FaSignInAlt/></NavLink> ),
  );

  return (
          <Router>
            <div className="App">
              <header className="App-header">
                <div className="container-fluid">
                  <Navbar className="navbar" light expand="md">
                    <NavbarBrand href="/" className="logo">swapp</NavbarBrand>
                    <NavbarToggler onClick={toggle}/>
                    <Collapse isOpen={isOpen} navbar>
                      <Nav className="ml-auto" navbar>
                        <NavItem>
                          <Link to="/">Episodes</Link>
                        </NavItem>
                        <NavItem>
                          <Link to="/characters">Characters</Link>
                        </NavItem>
                        <NavItem>
                          <LoginButton/>
                        </NavItem>
                      </Nav>
                    </Collapse>
                  </Navbar>
                </div>
              </header>
              <Container fluid>
                <Route path="/login" component={Login}/>
                <Route exact path="/"
                        render={props =>
                            isAuthenticated ? (
                              <Episodes/>
                            ) : ( <Redirect to={{ pathname: '/login', state: {from: props.location},}} /> )
                        }
                />
                <Route  path="/characters"
                        render={props =>
                                isAuthenticated ? (
                                        <Characters/>
                                ) : ( <Redirect to={{ pathname: '/login', state: {from: props.location},}} /> )
                        }
                />
              </Container>
            </div>
          </Router>
  )
};

