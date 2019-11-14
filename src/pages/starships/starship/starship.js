import React from 'react';
import gql from "graphql-tag";
import { useParams} from 'react-router-dom';
import { useQuery} from '@apollo/react-hooks';
import StarshipView from '../starshipView/starshipView';
import ErrorHandler from "../../../components/loginForm/guards/errorHandler";


const starshipQuery = gql`
  query starshipQuery($starshipId: ID!) {
    starship(id: $starshipId) {
        id
        name
        image
        cost
        starshipClass
        crew
        maxAtmosphericSpeed
        hyperdriveRating
      }
    }
`;


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
