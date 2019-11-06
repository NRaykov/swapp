import React from 'react';
import { isAuthenticated } from '../../../guards/auth.js';
import {Link, withRouter} from 'react-router-dom';


import {Row, NavItem, Col} from 'reactstrap';
import EpisodeItem from "../episodeItem";
import styles from "./styles.module.css";


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
    {
      id: 5,
      title: "The Empire Strikes Back",
      text: "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader.",
      img: "https://via.placeholder.com/400x400"
    },
    {
      id: 6,
      title: "Return of the Jedi",
      text: "After a daring mission to rescue Han Solo from Jabba the Hutt, the Rebels dispatch to Endor to destroy the second Death Star. Meanwhile, Luke struggles to help Darth Vader back from the dark side without falling into the Emperor's trap.",
      img: "https://via.placeholder.com/400x400"
    },
];

const Episodes = withRouter(({ history }) =>
            isAuthenticated ? (
                    <React.Fragment>
                      <Row>
                        {/*TODO Fetch Data from DB*/}
                        { state.map((element) => {
                            return (
                            <Col md="4">
                              <Link key={element.id} to={`/episodes/${element.id}`} className={ styles.cardPanel }>
                                    <EpisodeItem
                                         key={element.id}
                                         title={element.title}
                                         text={element.text}
                                         img={element.img}/>
                              </Link>
                             </Col>
                            )
                          })
                        }
                      </Row>
                    </React.Fragment>

            ) : ( <EpisodeItem /> ),
        );
export default Episodes;
