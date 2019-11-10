import React from 'react';
import { Redirect} from 'react-router-dom';

import Login from './loginForm/login';

const RedirectToLogin = (props) => {
    localStorage.clear();
    return(
        <div>
            <Login/>
            <Redirect to={'/login'} />
            
        </div>
    )
}

export default RedirectToLogin

