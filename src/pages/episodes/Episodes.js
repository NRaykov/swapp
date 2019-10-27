import React from 'react';
import Login from '../../components/Login/Login.js';
import { isAuthenticated, signout } from '../../guards/auth.js';
import { withRouter } from 'react-router-dom';

import { Row } from 'reactstrap';
import CardItem from "./CardItem";


//Placeholder
const state = [
    {
      id: 1,
      title: "The Phantom Menance",
      text: "Two Jedi escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to claim their old glory."
    },
    {
      id: 2,
      title: "Attack of the Clones",
      text: "Ten years after initially meeting, Anakin Skywalker shares a forbidden romance with Padmé Amidala, while Obi-Wan Kenobi investigates an assassination attempt on the senator and discovers a secret clone army crafted for the Jedi." },
    {
      id: 3,
      title: "Revenge of the Sith",
      text: "Three years into the Clone Wars, the Jedi rescue Palpatine from Count Dooku. As Obi-Wan pursues a new threat, Anakin acts as a double agent between the Jedi Council and Palpatine and is lured into a sinister plan to rule the galaxy." },
    {
      id: 4,
      title: "A New Hope",
      text: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader." },
    {
      id: 5,
      title: "The Empire Strikes Back",
      text: "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader." },
    {
      id: 6,
      title: "Return of the Jedi",
      text: "After a daring mission to rescue Han Solo from Jabba the Hutt, the Rebels dispatch to Endor to destroy the second Death Star. Meanwhile, Luke struggles to help Darth Vader back from the dark side without falling into the Emperor's trap." },
];

const Episodes = withRouter(({ history }) =>
            isAuthenticated ? (
                    <React.Fragment>
                      <Row>
                        {/*TODO Fetch Data from DB*/}
                        { state.map((element) => {
                            return (
                                  <CardItem key={element.id}
                                            title={element.title}
                                            text={element.text}/>
                            )
                          })
                        }
                      </Row>
                    </React.Fragment>

            ) : ( <Login/> ),
        );
export default Episodes;
