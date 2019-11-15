import React from 'react';
import { withRouter } from 'react-router-dom';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import {logInQuery} from "../../client/queries";
import LoginForm from './LoginForm';

//TODO Test Validation
const Login = ({themeChanger, ...props}) => {
  const client = useApolloClient();

  const [login, { loading, error }] = useMutation(logInQuery, {
    onCompleted: ({ signIn: token}) => {
      localStorage.setItem('token', token.token);

      client.writeData({ data: { authenticated: true } }); 
      props.history.push('/episodes');
    },
  });

  if (loading) return <LoginForm loading={`Signing In ...`}/>;
  if (error) return (
          <LoginForm login={login} themeChanger={themeChanger} error={
            error.graphQLErrors.map(({ message }, i) => (
                  <span key={i}>{message}</span>
            ))
          }/>);

  return (<LoginForm login={login} themeChanger={themeChanger}/>);
};

export default withRouter(Login);
