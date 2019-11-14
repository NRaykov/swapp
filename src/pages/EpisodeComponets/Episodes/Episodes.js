import React from 'react';
import  Heading from "../../../components/StylesComponents/elements/heading/heading";
import Card from "../../../components/StylesComponents/elements/card/card"
import {CardImg, CardText, Row, Col} from 'reactstrap';
import styles from "./styles.module.css";
import { Link, Link as RouterLink } from 'react-router-dom';
import {useQuery} from "@apollo/react-hooks";
import {episodesQuery} from "../../../client/Queries";
import ErrorHandler from "../../../components/LoginSystem/guards/errorHandler";

const Episodes = () => {

  const { data, loading, error } = useQuery(episodesQuery);

  if (loading) return 'Loading ...';
  if (error)return (<ErrorHandler/>);

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

