import React from 'react';
import styles from './styles.module.css';
import { Button } from 'reactstrap';

const Login = ({}) => (
      <>
        <h1 className={styles.title}>Login Form Component</h1>
          <Button color="danger">Login</Button>
      </>
);

export default Login;
