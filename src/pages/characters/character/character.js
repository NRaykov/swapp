import React from 'react';
import gql from "graphql-tag";
import { useParams } from 'react-router-dom';
import { useQuery} from '@apollo/react-hooks';
import CharacterView from '../characterView/characterView';

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

  if (loading) return 'Loading ...';
  if (error)return (localStorage.clear());

  const {...person} = data.person;
  console.log(data.person);

  return(
          <>
            <CharacterView  {...person} />
          </>
  )

};
export default Character;
