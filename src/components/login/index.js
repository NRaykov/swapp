import React, { useState } from 'react';
// Authenticate Methods
import { Redirect } from 'react-router-dom';
import { authenticate } from '../../guards/auth.js';
// Styles and Forms
import styles from './styles.module.css';
//import { ThemeProvider } from 'styled-components/macro';
import {  FormGroup, } from 'reactstrap';
import Input from '../elements/inputs/inputs';
import From from '../elements/form/form';
import Button from '../elements/button/button';


//TODO make authentication
const Login = ({themeChanger}) => {

    const [shouldRedirect, setShouldRedirect] = useState(false);
    const login = () => authenticate(() => setShouldRedirect(true));
    //const pleaseLogIn = 'Please login';

    if (shouldRedirect) return <Redirect to={'/'} />;

    return (
              <React.Fragment>
                  <div className={`${styles.formPanel}`}>

                      <h1 className={`${styles.primaryHeading}`}
                            onClick={themeChanger}
                      >SWAPP</h1>

                      <From variant="primary" className={`${styles.formGroupPanel}`}>
                          {/*<div className={`${styles.error}`}>Invalid credentials!</div>*/}
                          <FormGroup>
                              <Input variant="primary" className={`${styles.input}`} type="email" name="email" id="emailAddress" placeholder="email"/>
                          </FormGroup>
                          <FormGroup>
                              <Input variant="primary" className={`${styles.input}`} type="password" name="password" id="password" placeholder="password" />
                          </FormGroup>
                          <div className={`${styles.buttonPanel}`}>
                              <Button variant="primary" className={`${styles.btnLogin}`} onClick={login}>Login</Button>
                          </div>
                      </From>
                  </div>
              </React.Fragment>
)};

export default Login;
