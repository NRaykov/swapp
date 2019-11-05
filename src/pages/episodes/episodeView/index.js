import React from 'react';

import {CardImg, Col, Row} from 'reactstrap';
import Heading from "../../../components/elements/heading/heading.js";
import Subheading from "../../../components/elements/subheading/subheading.js";
import styles from "./styles.module.css";
import CharacterItem from "../../characters/characterItem";
import Card from "../../../components/elements/card/card";


const Episode = () => {

  //Placeholder
  const state = [
    {
      id: 1,
      title: "The Phantom Menance",
      text: "Two Jedi escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to claim their old glory.",
      img: "https://via.placeholder.com/400x400"
    },
    {
      id: 2,
      title: "Attack of the Clones",
      text: "Ten years after initially meeting, Anakin Skywalker shares a forbidden romance with Padmé Amidala, while Obi-Wan Kenobi investigates an assassination attempt on the senator and discovers a secret clone army crafted for the Jedi.",
      img: "https://via.placeholder.com/400x400"
    },

    {
      id: 3,
      title: "Revenge of the Sith",
      text: "Three years into the Clone Wars, the Jedi rescue Palpatine from Count Dooku. As Obi-Wan pursues a new threat, Anakin acts as a double agent between the Jedi Council and Palpatine and is lured into a sinister plan to rule the galaxy.",
      img: "https://via.placeholder.com/400x400"
    },
    {
      id: 4,
      title: "A New Hope",
      text: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
      img: "https://via.placeholder.com/400x400"
    },
  ];

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
  ];



  return (
          <React.Fragment>
            <Card variant="primary" className={styles.cardPanel}>
                <Row>
                  <Col md="3">
                    <CardImg top width="100%" src={state[0].img} className="img-fluid" alt="Episode" />
                  </Col>
                  <Col md="9">
                    <div className={`${styles.headingPanel}`}>
                      <Heading variant="primary" className={`${styles.title}`}>{state[0].title}</Heading>
                      <Subheading variant="primary" className={`${styles.subtitle}`}>{state[0].title}</Subheading>
                    </div>
                  </Col>
                </Row>
              </Card>
              <Card variant="primary" className={styles.textPanel}>
                  <Row>
                      <Col md="12">{state[0].text}</Col>
                  </Row>
              </Card>
              <Row>
                {
                  character.map((element) => {
                    return (
                            <CharacterItem key={element.id}
                                         title={element.title}
                                         text={element.text}
                                         img={element.img}/>
                    )
                  })
                }
              </Row>
          </React.Fragment>
  )
};
export default Episode
