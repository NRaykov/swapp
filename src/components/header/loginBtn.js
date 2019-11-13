import React from 'react';
import styles from "../loginForm/styles.module.css";
import Button from "../../components/elements/button/button";

import { FaSignInAlt } from 'react-icons/fa';

const LoginButton = ({}) => {

  const logIn = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return  (<Button variant="primary"  onClick={logIn} className="loginButton"><FaSignInAlt/></Button>);
};

export default LoginButton;
