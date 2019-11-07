import {isAuthenticated, signout} from "../../guards/auth";
import React from "react";
import {FaSignOutAlt, FaSignInAlt} from 'react-icons/fa'; //Icons
import {withRouter} from 'react-router-dom';

import Button from "../elements/button/button";
const LoginButton = withRouter(({ history }) =>
        isAuthenticated ? (
                <Button  variant="primary" onClick={() => signout(() => history.push('/'))} className="loginButton"><FaSignOutAlt/></Button>
        ) : ( <Button variant="primary"  to="/login" className="loginButton"><FaSignInAlt/></Button> ),
);


export default LoginButton
