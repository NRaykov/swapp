import React, {useState} from 'react';
//Apollo Boost
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from "apollo-client"

import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';


import authLink from './client/auth';
import {typeDefs} from './client/local'


//Navigation and login
import { BrowserRouter } from 'react-router-dom';
import Container from './components/elements/container/container';
import Header from "./components/header/header";

import Home from "./pages/home";
import LoginGuard from "./components/loginForm/guards/loginGuard"

//Styling
import './App.css';
import { ThemeProvider } from 'styled-components/macro';
import ThemeChanger from './components/themeChanger';
import { themes } from './components';

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
    //const isAuthed = true;


    cache.writeData({
      data: {
        authenticated: isAuthed,
      },
    });


export const AppComponent = () => {



    /**** Set Theme to LocalStorage ****/
    const [theme, setTheme] = useState('light');
    const themeChanger = ThemeChanger(theme, setTheme);
    const getTheme = localStorage.getItem('Theme');
    /**** Test Apollo Client - Fetch demo data ****/

  return (
   <ApolloProvider client={client}>
          <BrowserRouter>
            <ThemeProvider theme={themes[getTheme]}>
              <Container variant="primary" className="container-main">
                  <Header themeChanger={themeChanger}/>
                  <div className="container py-5">
                    <Home themeChanger={themeChanger}/>
                  </div>
              </Container>
            </ThemeProvider>
          </BrowserRouter>
      </ApolloProvider>
  )
};

