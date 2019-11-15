import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { authQuery } from "../../client/queries";

import Pages from '../Pages';

const Home = ({themeChanger}) => {
  const { data } = useQuery(authQuery);

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
