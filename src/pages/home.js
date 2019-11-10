import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag.macro';
import Header from '../components/header/header';
import Pages from './';

export const AUTHENTICATED_QUERY = gql`
  query IsAuthenticated {
    authenticated @client
  }
`;

const Home = ({themeChanger}) => {
  const { data } = useQuery(AUTHENTICATED_QUERY);

  return (
    <>
      {data.authenticated && <Header themeChanger={themeChanger} />}
        <div className='container'>
          <Pages />
        </div>
    </>
  );
};

export default Home;
