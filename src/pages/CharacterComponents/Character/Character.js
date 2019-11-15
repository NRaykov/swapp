import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery} from '@apollo/react-hooks';
import { characterQuery } from "../../../client/queries";
import CharacterView from '../CharacterView/CharacterView';
import ErrorHandler from "../../../components/LoginSystem/guards/errorHandler";

const Character = () => {
  let { characterId } = useParams();

  const {data, loading, error} = useQuery(characterQuery, {
    variables: {characterId}
  });

  if (loading) return 'Loading ...';
  if (error)return (<ErrorHandler/>);

  const {...person} = data.person;
  console.log(data.person);

  return(
          <>
            <CharacterView  {...person} />
          </>
  )

};
export default Character;
