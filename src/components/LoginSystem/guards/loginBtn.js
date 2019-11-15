import React from 'react';
import Button from "../../StylesComponents/elements/button/button";

import { FaSignInAlt } from 'react-icons/fa';

const LoginButton = ({}) => {

  const logIn = () => {
    localStorage.removeItem('token');
    window.location.href = "/";
  };

  return  (<Button variant="primary"  onClick={logIn} className="loginButton"><FaSignInAlt/></Button>);
};

export default LoginButton;
