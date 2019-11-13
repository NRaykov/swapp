import React from 'react';

import {CardImg, Col, Row} from 'reactstrap';
import Heading from "../../../components/elements/heading/heading.js";
import Subheading from "../../../components/elements/subheading/subheading.js";

import styles from "./styles.module.css";
import Card from "../../../components/elements/card/card";
import { Link, Link as RouterLink } from 'react-router-dom';

const EpisodeView = ({...props}) => {

  const episode = {...props};

  console.log('EpisodeView');

  const characters = episode.people.edges;
  console.log(episode);

  return (
          <>
            <Card variant="primary" className={styles.cardPanel}>
                <Row>
                  <Col md="3">
                    <CardImg top width="100%" src={episode.image} className="img-fluid" alt="" />
                  </Col>
                  <Col md="9">
                    <div className={`${styles.headingPanel}`}>
                      <Heading variant="primary" className={`${styles.title}`}>{episode.title}</Heading>
                      <Subheading variant="primary" className={`${styles.subtitle}`}>{episode.title}</Subheading>
                    </div>
                  </Col>
                </Row>
              </Card>
              <Card variant="primary" className={styles.textPanel}>
                  <Row>
                      <Col md="12">{episode.openingCrawl}</Col>
                  </Row>
              </Card>


              <Row key={characters.id} className={styles.charactersWrapper}>
                  { characters.map((character) => {
                    return (
                        <Col md="4"  key={character.node.id}>
                          <Link to={`/characters/${character.node.id}`}
                                key={character.node.id}
                                className={ styles.cardPanel }
                                as={RouterLink}>
                              <Card variant="primary" className={styles.characterPanel}>
                                <CardImg src={character.node.image} className={`${styles.characterThumb} img-fluid`} alt="Card image cap" />
                                <div className={`${styles.cardBody}`}>
                                  <Heading variant="primary" className={styles.primaryHeading}>{character.node.name}</Heading>
                                </div>
                              </Card>

                          </Link>
                        </Col>
                    )
                  })
                  }
              </Row>
          </>
  )
};
export default EpisodeView
