import React from 'react';
import { withRouter } from 'react-router-dom';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import {logInQuery} from "../../client/Queries";
import LoginForm from './LoginForm';

//TODO Test Validation
const Login = ({themeChanger, ...props}) => {
  const client = useApolloClient();

  const [login, { loading, error }] = useMutation(logInQuery, {
    onCompleted: ({ signIn: token}) => {
      localStorage.setItem('token', token.token);

      client.writeData({ data: { authenticated: true } }); 
      props.history.push('/Episodes');
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
