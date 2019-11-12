import React from 'react';
import {CardImg, Col, Row} from "reactstrap";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

import Card from "../../../components/elements/card/card";
import Heading from "../../../components/elements/heading/heading";
import Subheading from "../../../components/elements/subheading/subheading";
import Separator from "../../../components/elements/separator/separator";



import InfoText from "../../../components/elements/infotext/infotext"

const CharacterView = ({...props}) => {

  const person = { ...props };

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
                <CardImg src={person.image} className={`${styles.thumbnail} img-fluid`} alt="Card image cap" />
                <div className={`${styles.infoPanel}`}>
                  {/*<ul className={`${styles.infoList}`}>*/}
                    {/*<li className={`${styles.infoListItem}`}>*/}
                      {/*Height: <InfoText variant="primary">{person.height}</InfoText>*/}
                    {/*</li>*/}
                    {/*<li className={`${styles.infoListItem}`}>*/}
                      {/*Weight: <InfoText variant="primary">{person.mass}</InfoText>*/}
                    {/*</li>*/}
                    {/*<li className={`${styles.infoListItem}`} >*/}
                      {/*Species: <InfoText variant="primary">{person.species.name}</InfoText>*/}
                    {/*</li>*/}
                    {/*<li className={`${styles.infoListItem}`}>*/}
                      {/*Home World: <InfoText variant="primary">{person.homeworld.name}</InfoText>*/}
                    {/*</li>*/}
                  {/*</ul>*/}
                </div>
              </Card>
            </Col>
            <Col md="6">
                <Subheading variant="primary" className={styles.title}>Piloted Starships</Subheading>
                <Separator variant="primary"/>
              {/*<div>*/}
                {/*{*/}
                  {/*person.starships.edges.map(starship => { return (*/}
                        {/*<div key={starship.node.id} className="starship">*/}
                          {/*<Link className={ styles.starshipPanel }*/}
                                {/*variant="nav"*/}
                                {/*key={starship.node.id}*/}
                                {/*to={`/starships/${starship.node.id}`}>*/}
                            {/*<Card variant="primary" className={styles.cardPanel}>*/}
                              {/*<img src={starship.node.image} className={`${styles.thumbnail} img-fluid`} alt="" />*/}
                              {/*<div className={`${styles.cardBody}`}>*/}
                                {/*<Heading variant="primary" className={styles.primaryHeading}>{starship.node.name}</Heading>*/}
                              {/*</div>*/}
                            {/*</Card>*/}
                          {/*</Link>*/}
                        {/*</div>*/}
                    {/*)}*/}
                  {/*)}*/}
              {/*</div>*/}
            </Col>
          </Row>
          </>
  )
};
export default CharacterView;






















