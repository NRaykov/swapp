import React from 'react';
import { withRouter } from 'react-router-dom';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import LoginForm from './loginForm';

const LOG_IN = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password){
        token
    }
  }
`;

//TODO Test Validation
const Login = ({themeChanger, ...props}) => {
  const client = useApolloClient();

  
  const [login, { loading, error }] = useMutation(LOG_IN, {
    onCompleted: ({ signIn: token}) => {
      localStorage.setItem('token', token.token);

      client.writeData({ data: { authenticated: true } }); 
      props.history.push('/episodes');
    },
  });

  //TODO Better error handling
  if (loading) return 'Loading ...';
  if (error) return (
          <p className="center-text">{error.graphQLErrors.map(({ message }, i) => (
    <span key={i}>{message}</span>
  ))}
  </p>);



  return (<LoginForm login={login} themeChanger={themeChanger}/>);
};

export default withRouter(Login);
