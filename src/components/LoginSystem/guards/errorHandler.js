import React from 'react';
import { Redirect} from 'react-router-dom';

import Login from '../Login';

const ErrorHandler = () => {
    localStorage.removeItem('token');
    return(
        <>
          <Login/>
          <Redirect to={'/'} />
        </>
    )
};

export default ErrorHandler

