import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { authQuery } from "../../../client/queries";
import Login from '../Login';


const LoginGuard = ({themeChanger, ...props}) => {
    const { data } = useQuery(authQuery);

    return(
        data.authenticated ? props.children : 
        <>
            <Login themeChanger={themeChanger}/>
        </>
    )
};

export default LoginGuard
