import React from 'react';
import gql from "graphql-tag";
import { useParams} from 'react-router-dom';
import { useQuery} from '@apollo/react-hooks';
import StarshipView from '../starshipView/';


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
  })

  if (loading) return <p>Loading...</p>;
  if (error) return (localStorage.clear())


  const {...starship} = data.starship;

  return(
          <React.Fragment>
            <StarshipView  {...starship} my={2} />
          </React.Fragment>
  )

};
export default Starship;
