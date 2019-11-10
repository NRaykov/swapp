import React from 'react';
import gql from "graphql-tag";
import { useParams} from 'react-router-dom';
import { Box, Button } from 'rebass';
import { useQuery} from '@apollo/react-hooks';

import EpisodeView from '../episodeView';
import Loading from '../../../components/loginForm/loading';
//import RedirectToLogin from '../components/RedirectToLogin';

const episodeQuery = gql`
  query EpisodeQuery($episodeId: ID!, $first: Int, $after: String) {
    episode(id: $episodeId) {
        id
        title
        image
        director
        releaseDate
        openingCrawl
        people(first: $first, after: $after) {
          totalCount
          pageInfo{
            hasNextPage
            endCursor
          }
          edges{
            cursor
            node{   
              id
              name
              image
            }
          }
        }
      }
    }
`;


const Episode = () => {
    let { episodeId } = useParams() ;
     episodeId = 'films.'+episodeId;
     //number of characters to display on page load
     let first = 5;
    
    const {data, loading, error, fetchMore} = useQuery(episodeQuery, {
        variables: {episodeId, first}
    });

    if (loading) return <Loading/>;
    if (error)return 'Error';


    const {...episode} = data.episode;
    let {hasNextPage, endCursor} = episode.people.pageInfo;
    console.log(data.episode);


    console.log('Episode')
    

    const loadMorePeople = () => {
      fetchMore({
        variables: {
          after: endCursor,
          first: 5
        },
        updateQuery: (prev, { fetchMoreResult: {episode}}) => {
                  
          return {
            episode: {
              ...episode, 
              people: {
                ...episode.people,
                edges: [
                ...prev.episode.people.edges, 
                ...episode.people.edges]}
            },
          };
        },
      });
    };
    
    return(
            <EpisodeView  {...episode} my={2} />
    )

};
export default Episode;
