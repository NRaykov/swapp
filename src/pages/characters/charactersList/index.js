import React from 'react';
import { isAuthenticated } from '../../../guards/auth.js';
import {Link, withRouter} from 'react-router-dom';
import CharacterItem from "../characterItem/index.js";
import {Col, Row} from "reactstrap";
import Button from "../../../components/elements/button/button";
import styles from "./styles.module.css";


//Placeholder
const state = [
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
  {
    id: 7,
    title: "Yoda 6",
    img: "https://via.placeholder.com/100"
  },
  {
    id: 8,
    title: "Yoda 7",
    img: "https://via.placeholder.com/100"
  },
  {
    id: 9,
    title: "Yoda 8",
    img: "https://via.placeholder.com/100"
  },
];

const Characters = withRouter(({ history }) =>
            isAuthenticated ? (
                    <React.Fragment>
                      <Row>
                        {/*TODO Fetch Data from DB*/}
                        { state.map((element) => {
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
                        <Col md="12">
                          <div className={`${styles.buttonPanel}`}>
                            <Button variant="primary" className={`${styles.btnLogin}`}>Load More</Button>
                          </div>
                        </Col>
                      </Row>
                    </React.Fragment>

            ) : ( <CharacterItem/> ),
        );
export default Characters;
