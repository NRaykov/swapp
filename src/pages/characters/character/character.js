import React from 'react';
import gql from "graphql-tag";
import { useParams } from 'react-router-dom';
import { useQuery} from '@apollo/react-hooks';
import CharacterView from '../characterView/';


const episodeQuery = gql`
  query EpisodeQuery($characterId: ID!) {
    person(id: $characterId){
        name
        height
        mass
        image
        species {
            name
        }
        homeworld {
            name
        }
        starships {
            edges{
                node{
                    id
                    image
                    name
                }
            }
        }
      }
            
    }
`;


const Character = () => {
  let { characterId } = useParams();


  const {data, loading, error} = useQuery(episodeQuery, {
    variables: {characterId}
  });

  if (loading) return 'Loading';
  if (error)return 'Error';

  const {...person} = data.person;

  return(
          <React.Fragment>
            <CharacterView  {...person} />
          </React.Fragment>
  )

};
export default Character;
