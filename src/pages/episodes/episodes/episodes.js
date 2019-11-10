import React from 'react';
//import { isAuthenticated } from '../../../guards/auth.js';
import {Link} from 'react-router-dom';

import  Heading from "../../../components/elements/heading/heading";
import Card from "../../../components/elements/card/card"


import {Row, Col, CardImg, CardText} from 'reactstrap';

import styles from "./styles.module.css";


import { Query } from "react-apollo";
import { Link as RouterLink } from 'react-router-dom';

import gql from "graphql-tag";
import Loading from '../../../components/loginForm/Loading';

const Episodes = () => (

        <Query query={gql`
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
    `}
        >
          {({ loading, error, data }) => {
            if (loading) return <Loading/>;
            if (error) return 'Error';

            return data.allEpisodes.edges.map(({ node }) => (
                    <div key={node.episodeId} className="content">
                      <Link className={ styles.cardPanel }
                            as={RouterLink}
                            variant="nav"
                            key={node.episodeId}
                            to={`/episodes/${node.episodeId}`}>
                            <Card variant="primary" className={`${styles.cardPanel}`}>
                              <CardImg top width="100%" src={node.img} className={`${styles.thumbnail} img-fluid`} alt="Episode" />
                              <div className={`${styles.cardBody}`} >
                                <Heading variant="primary" className={`${styles.title} title-global`}>{node.title}</Heading>
                                <CardText className={`${styles.text}`} >{node.openingCrawl.substring(0, 221) + "..."}</CardText>
                              </div>
                            </Card>
                      </Link>
                    </div>
            ));
          }}
        </Query>);

export default Episodes;

