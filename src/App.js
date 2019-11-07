import React, {useState} from 'react';
//Apollo Boost
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from "apollo-boost";
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import authLink from './client/auth';
import {typeDefs} from './client/local'
//Navigation and login
import {BrowserRouter as Router, Link,} from 'react-router-dom';
import { NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, Navbar} from 'reactstrap';
import LoginButton from './components/login/loginBtn';
import Container from './components/elements/container/container';
//Styling
import './App.css';

import { ThemeProvider } from 'styled-components/macro';
import { themes } from './components';
import ThemeChanger from './components/themeChanger';
import { gql } from 'graphql.macro';
import MainRouter from "./pages/router/router";
import {Header} from "./components/header/header";


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
  return (
      <ApolloProvider client={client}>
          <Router>
            <ThemeProvider theme={themes[getTheme]}>
              <Container variant="primary" className="container-main">
                  <Header themeChanger={themeChanger}/>
                <div className="container py-5">
                 <MainRouter themeChanger={themeChanger}/>
                </div>
              </Container>
            </ThemeProvider>
          </Router>
      </ApolloProvider>
  )
};

