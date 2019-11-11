import React from 'react';
//import { isAuthenticated } from '../../../guards/auth.js';
import  Heading from "../../../components/elements/heading/heading";
import Card from "../../../components/elements/card/card"
import {CardImg, CardText, Row, Col} from 'reactstrap';
import styles from "./styles.module.css";
import { Query } from "react-apollo";
import { Link as RouterLink } from 'react-router-dom';
import {Link} from 'rebass';
import gql from "graphql-tag";
import Loading from '../../../components/loginForm/loading';
import {useQuery} from "@apollo/react-hooks";



const episodesQuery = gql`
      {
       allEpisodes (first:8) {
          totalCount
          edges{
            node{
              episodeId
              title
              image
              openingCrawl
            }
          }
        }
      }
    `;

const Episodes = () => {

  const { data, loading, error } = useQuery(episodesQuery);

  if (loading) return 'Loading';
  if (error)return 'Error';

  const [...allEpisodes] = data.allEpisodes.edges;

  return (
          <Row>
              {
                allEpisodes.map(({ node }) => (
                        <Col md={4} key={node.episodeId}>
                          <Link className={ styles.cardPanel }
                                as={RouterLink}
                                variant="nav"
                                key={node.episodeId}
                                to={`/episodes/${node.episodeId}`}>
                            <Card variant="primary" className={`${styles.cardPanel}`}>
                              <CardImg top width="100%" src={node.image} className={`${styles.thumbnail} img-fluid`} alt="Episode" />
                              <div className={`${styles.cardBody}`} >
                                <Heading variant="primary" className={`${styles.title} title-global`}>{node.title}</Heading>
                                <CardText className={`${styles.text}`} >{node.openingCrawl.substring(0, 221) + "..."}</CardText>
                              </div>
                            </Card>
                          </Link>
                        </Col>
                       ))
              }
          </Row>);
};

export default Episodes;

