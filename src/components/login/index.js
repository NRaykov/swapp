import React, { useState } from 'react';
// Authenticate Methods
import { Redirect } from 'react-router-dom';
import { authenticate } from '../../guards/auth.js';
// Styles and Forms
import styles from './styles.module.css';
import {themes} from "../index";
import styled, {ThemeProvider} from 'styled-components/macro';
import { Button, Form, FormGroup, } from 'reactstrap';
import Input from '../inputs/inputs';



const Login = () => {

    const [theme, setTheme] = useState('light');

    const [shouldRedirect, setShouldRedirect] = useState(false);
    const login = () => authenticate(() => setShouldRedirect(true));
    //const pleaseLogIn = 'Please login';

    if (shouldRedirect) return <Redirect to={'/'} />;

    return (
           <ThemeProvider theme={themes[theme]}>
              <React.Fragment>
                  <div className={`${styles.formPanel}`}>

                      <h1 className={`${styles.primaryHeading}`}
                          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                      >SWAPP</h1>

                      <Form className={`${styles.formGroupPanel}`}>
                          <span className={`${styles.msgLogin}`}>You need to login</span>
                          <div className={`${styles.error}`}>Invalid credentials!</div>
                          <FormGroup>
                              <Input variant="primary" className={`${styles.input}`} type="email" name="email" id="emailAddress" placeholder="email"/>
                          </FormGroup>
                          <FormGroup>
                              <Input variant="primary" className={`${styles.input}`} type="password" name="password" id="password" placeholder="password" />
                          </FormGroup>
                          <div className={`${styles.buttonPanel}`}>
                          <Button className={`${styles.btnLogin}`} onClick={login}>Login</Button>
                          </div>
                      </Form>
                  </div>
              </React.Fragment>
           </ThemeProvider>
)};

export default Login;
