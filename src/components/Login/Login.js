import React from 'react';
import styles from './styles.module.css';
import { Button, Form, FormGroup, Input, } from 'reactstrap';

const Login = ({}) => (
      <>
          <div className={`${styles.formPanel}`}>

              <h1 className={`${styles.title}`}>SWAPP</h1>

              <Form className={`${styles.formGroupPanel}`}>
                  <div className={`${styles.error}`}>Invalid credentials!</div>
                  <FormGroup>
                      <Input type="email" name="email" id="emailAddress" placeholder="email" className={`${styles.input}`} />
                  </FormGroup>
                  <FormGroup>
                      <Input type="password" name="password" id="password" placeholder="password" className={`${styles.input}`} />
                  </FormGroup>
                  <div className={`${styles.buttonPanel}`}>
                  <Button className={`${styles.btnLogin}`}>Login</Button>
                  </div>
              </Form>
          </div>
      </>
);

export default Login;
