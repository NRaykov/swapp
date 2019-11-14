import React from 'react';
import { Redirect} from 'react-router-dom';

import Login from '../login';

const ErrorHandler = (props) => {
    localStorage.removeItem('token');
    return(
        <>
          <Login/>
          <Redirect to={'/login'} />
        </>
    )
}

export default ErrorHandler

