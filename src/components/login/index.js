import React, { useState } from 'react';
// Authenticate Methods
import { Redirect } from 'react-router-dom';
import { authenticate } from '../../guards/auth.js';

// Styles and Forms
import styles from './styles.module.css';
import { Button, Form, FormGroup, Input, } from 'reactstrap';

const Login = () => {

    const [shouldRedirect, setShouldRedirect] = useState(false);
    const login = () => authenticate(() => setShouldRedirect(true));
    //const pleaseLogIn = 'Please login';

    if (shouldRedirect) return <Redirect to={'/'} />;

    return (
      <React.Fragment>
          <div className={`${styles.formPanel}`}>

              <h1 className={`${styles.primaryHeading}`}>SWAPP</h1>

              <Form className={`${styles.formGroupPanel}`}>
                  <span className={`${styles.msgLogin}`}>You need to login</span>
                  <div className={`${styles.error}`}>Invalid credentials!</div>
                  <FormGroup>
                      <Input type="email" name="email" id="emailAddress" placeholder="email" className={`${styles.input}`} />
                  </FormGroup>
                  <FormGroup>
                      <Input type="password" name="password" id="password" placeholder="password" className={`${styles.input}`} />
                  </FormGroup>
                  <div className={`${styles.buttonPanel}`}>
                  <Button className={`${styles.btnLogin}`} onClick={login}>Login</Button>
                  </div>
              </Form>
          </div>
      </React.Fragment>
)};

export default Login;
