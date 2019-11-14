import React from 'react';
import { useParams} from 'react-router-dom';
import { useQuery} from '@apollo/react-hooks';
import { episodeQuery } from "../../../client/Queries";

import EpisodeView from '../EpisodeView/EpisodeView';
import Button from '../../../components/StylesComponents/elements/button/button'
import styles from './styles.module.css';
import ErrorHandler from "../../../components/LoginSystem/guards/errorHandler";


const Episode = () => {
    let { episodeId } = useParams() ;
     episodeId = 'films.'+episodeId;

     //Display first 6 items
     let first = 6;
    
    const {data, loading, error, fetchMore} = useQuery(episodeQuery, {
        variables: {episodeId, first}
    });

    if (loading) return 'Loading ...';
    if (error)return (<ErrorHandler/>);

    const {...episode} = data.episode;
    let {hasNextPage, endCursor} = episode.people.pageInfo;

    console.log(data.episode);


    console.log('Episode');

    const loadMore = () => {
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
            <>
              <EpisodeView  {...episode} />
              {hasNextPage && (
                    <div className={styles.buttonPanel}>
                      <Button variant="primary" onClick={ loadMore } className={styles.btnLogin}>Load More</Button>
                    </div>
              )}
            </>
    )

};
export default Episode;
