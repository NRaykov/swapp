import React, {useState} from 'react';
//Apollo Boost
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from "apollo-boost";
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import authLink from './client/auth';
import {typeDefs} from './client/local'
//Navigation and login
import {BrowserRouter as Router, Route, Link, Redirect, withRouter} from 'react-router-dom';
import { NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, Navbar} from 'reactstrap';
import {isAuthenticated, signout} from './guards/auth';
import Login from './components/login/';
import LoginButton from './components/login/loginBtn';
import Container from './components/elements/container/container';
//Styling
import './App.css';

import { ThemeProvider } from 'styled-components/macro';
import { themes } from './components';
import ThemeChanger from './components/themeChanger';

//Pages
import Episodes from "./pages/episodes/episodesList/";
import Episode from "./pages/episodes/episodeView/";
import Characters from "./pages/characters/charactersList/";
import Character from "./pages/characters/characterView/";
import Starship from "./pages/starships/starshipView";
import { gql } from 'graphql.macro';
import MainRouter from "./pages/router/router";


export const RouteComponent = () => {
    /**** Set Theme to LocalStorage ****/
    const [theme, setTheme] = useState('light');
    const themeChanger = ThemeChanger(theme, setTheme);
    const getTheme = localStorage.getItem('Theme');


    /**** Test Apollo Client - Fetch demo data ****/
    const cache = new InMemoryCache();

    const httpLink = createHttpLink({
      uri: 'https://swapp.st6.io/graphql',
    });

    const client = new ApolloClient({
      cache,
      link: authLink.concat(httpLink),
      typeDefs
    });

    const isAuthed = !!localStorage.getItem('token');


  cache.writeData({
    data: {
      authenticated: isAuthed,
    },
  });



  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  //****  login Button Component

  return (
      <ApolloProvider client={client}>
          <Router>
            <ThemeProvider theme={themes[getTheme]}>
              <Container variant="primary" className="container-main">
                <header className="header">
                    <Navbar className="navbar" light expand="md">
                      <NavbarBrand href="#" className="logo"
                           onClick={ themeChanger }
                      >swapp</NavbarBrand>
                      <NavbarToggler onClick={toggle}/>
                      <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                          <NavItem>
                            <Link className="nav-link" to="/">Episodes</Link>
                          </NavItem>
                          <NavItem>
                            <Link className="nav-link" to="/characters">Characters</Link>
                          </NavItem>
                          <NavItem>
                            <LoginButton/>
                          </NavItem>
                        </Nav>
                      </Collapse>
                    </Navbar>
                </header>

                <div className="container py-5">
                 <MainRouter themeChanger={themeChanger}/>
                </div>
              </Container>
            </ThemeProvider>
          </Router>
      </ApolloProvider>
  )
};

