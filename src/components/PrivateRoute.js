import React, {Fragment} from 'react';
import { useQuery } from '@apollo/react-hooks';

import gql from 'graphql-tag.macro';
import Login from './loginForm/login';
export const AUTHENTICATED_QUERY = gql`
  query IsAuthenticated {
    authenticated @client
  }
`;

const PrivateRoute = (props) => {
    const { data } = useQuery(AUTHENTICATED_QUERY);

    return(
        data.authenticated ? props.children : 
        <Fragment>
            <Login/>

        </Fragment>
    )
};

export default PrivateRoute
