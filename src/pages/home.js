import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag.macro';

import Pages from './pages';

export const AUTHENTICATED_QUERY = gql`
  query IsAuthenticated {
    authenticated @client
  }
`;

const Home = ({themeChanger}) => {
  const { data } = useQuery(AUTHENTICATED_QUERY);

  return (
    <>
      {data.authenticated}
        <div className='container'>
          <Pages themeChanger={themeChanger}/>
        </div>
    </>
  );
};

export default Home;
