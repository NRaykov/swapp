import React from 'react';
import { useParams} from 'react-router-dom';
import { useQuery} from '@apollo/react-hooks';
import { starshipQuery } from "../../../client/queries";
import StarshipView from '../StarshipView/StarshipView';
import ErrorHandler from "../../../components/LoginSystem/guards/errorHandler";

const Starship = () => {

  let { starshipId } = useParams() ;
  const {data, loading, error} = useQuery(starshipQuery, {
    variables: {starshipId}
  });

  if (loading) return 'Loading ...';
  if (error) return (<ErrorHandler/>);


  const {...starship} = data.starship;

  return(
          <>
            <StarshipView  {...starship} my={2} />
          </>
  )

};
export default Starship;
