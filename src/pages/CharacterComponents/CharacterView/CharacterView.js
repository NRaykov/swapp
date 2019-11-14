import React from 'react';
import {CardImg, Col, Row} from "reactstrap";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

import Card from "../../../components/StylesComponents/elements/card/card";
import Heading from "../../../components/StylesComponents/elements/heading/heading";
import Subheading from "../../../components/StylesComponents/elements/subheading/subheading";
import Separator from "../../../components/StylesComponents/elements/separator/separator";

import InfoText from "../../../components/StylesComponents/elements/infotext/infotext"

const CharacterView = ({...props}) => {

  const person = { ...props };

  const placeholderImage = "https://i.etsystatic.com/17236199/r/il/598fda/1553216794/il_570xN.1553216794_ayds.jpg";
  console.log(person.image);

  return (
          <>
            <Row>
              <Col className="col-md-12">
                <Heading variant="primary" className={styles.title}>{person.name}</Heading>
              </Col>
            </Row>
            <Row>
              <Col className="col-md-12">
                <Separator variant="primary"/>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <Card variant="primary" className={styles.cardPanel}>
                  <Heading variant="primary" className={styles.cardTitle}>Character</Heading>
                  <CardImg src={person.image === null ? placeholderImage : person.image } className={`${styles.thumbnail} img-fluid w-100`} alt="Card image cap" />
                  <div className={`${styles.infoPanel}`}>
                    <ul className={`${styles.infoList}`}>
                      <li className={`${styles.infoListItem}`}>
                        Height: <InfoText variant="primary">{person.height}</InfoText>
                      </li>
                      <li className={`${styles.infoListItem}`}>
                        Weight: <InfoText variant="primary">{person.mass}</InfoText>
                      </li>
                      <li className={`${styles.infoListItem}`} >
                        Species: <InfoText variant="primary">{person.species.name}</InfoText>
                      </li>
                      <li className={`${styles.infoListItem}`}>
                        Home World: <InfoText variant="primary">{person.homeworld.name}</InfoText>
                      </li>
                    </ul>
                  </div>
                </Card>
              </Col>
              <Col md="6">
                <Subheading variant="primary" className={styles.title}>Piloted Starships</Subheading>
                <Separator variant="primary"/>
                <div>
                  {
                    person.starships.edges.map(starship => { return (
                                    <div key={starship.node.id} className="starship">
                                      <Link className={ styles.starshipPanel }
                                            variant="nav"
                                            key={starship.node.id}
                                            to={`/starships/${starship.node.id}`}>
                                        <Card variant="primary" className={styles.cardPanel}>
                                          <img src={starship.node.image} className={`${styles.thumbnail} img-fluid`} alt="" />
                                          <div className={`${styles.cardBody}`}>
                                            <Heading variant="primary" className={styles.primaryHeading}>{starship.node.name}</Heading>
                                          </div>
                                        </Card>
                                      </Link>
                                    </div>
                            )}
                    )}
                </div>
              </Col>
            </Row>
          </>
  )
};
export default CharacterView;
