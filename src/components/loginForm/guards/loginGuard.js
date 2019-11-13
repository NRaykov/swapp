import React, {Fragment} from 'react';
import { useQuery } from '@apollo/react-hooks';

import gql from 'graphql-tag.macro';
import Login from '../login';
export const AUTHENTICATED_QUERY = gql`
  query IsAuthenticated {
    authenticated @client
  }
`;

const LoginGuard = ({themeChanger, ...props}) => {
    const { data } = useQuery(AUTHENTICATED_QUERY);

    return(
        data.authenticated ? props.children : 
        <>
            <Login themeChanger={themeChanger}/>
        </>
    )
};

export default LoginGuard
