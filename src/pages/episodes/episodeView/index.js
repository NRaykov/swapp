import React from 'react';

import {CardImg, Col, Row} from 'reactstrap';
import Heading from "../../../components/elements/heading/heading.js";
import Subheading from "../../../components/elements/subheading/subheading.js";
import styles from "./styles.module.css";
import CharacterItem from "../../characters/characterItem";
import Card from "../../../components/elements/card/card";
import {Link} from "react-router-dom";
import Button from "../../characters/charactersList";


const EpisodeView = ({...props}) => {

  const episode = {...props};


  const character = [
    {
      id: 1,
      title: "Yoda",
      img: "https://via.placeholder.com/100"
    },
    {
      id: 2,
      title: "Yoda 1",
      img: "https://via.placeholder.com/100"
    },

    {
      id: 3,
      title: "Yoda 2",
      img: "https://via.placeholder.com/100"
    },
    {
      id: 4,
      title: "Yoda 3",
      img: "https://via.placeholder.com/100"
    },
    {
      id: 5,
      title: "Yoda 4",
      img: "https://via.placeholder.com/100"
    },
    {
      id: 6,
      title: "Yoda 5",
      img: "https://via.placeholder.com/100"
    },
  ];



  return (
          <React.Fragment>
            <Card variant="primary" className={styles.cardPanel}>
                <Row>
                  <Col md="3">
                    <CardImg top width="100%" src={episode.img} className="img-fluid" alt="Episode" />
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
                      <Col md="12">{episode.text}</Col>
                  </Row>
              </Card>
              <Row>
                  { character.map((element) => {
                    return (
                        <Col md="4">
                          <Link key={element.id}
                                to={`/character/${element.id}`}
                                className={ styles.cardPanel }>
                            <CharacterItem key={element.id}
                                           title={element.title}
                                           img={element.img}/>
                          </Link>
                        </Col>
                    )
                  })
                  }
              </Row>
            <Row>
              <div className={`${styles.buttonPanel}`}>
                <Button variant="primary" className={`${styles.btnLogin}`}>Load More</Button>
              </div>
            </Row>
          </React.Fragment>
  )
};
export default EpisodeView
