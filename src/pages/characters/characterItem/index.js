import React from 'react';
import {CardImg, Col } from "reactstrap";
import styles from "./styles.module.css";

import Card from "../../../components/elements/card/card";
import Heading from "../../../components/elements/heading/heading";


// TODO ***** Merge StarshipItem and CharacterItem into one component
const CharacterItem = ({img, title}) => {
  return (
          <Col md="4" className={ styles.characterItem }>
            <Card variant="primary" className={styles.cardPanel}>
                <CardImg src={img} className={`${styles.thumbnail} img-fluid`} alt="Card image cap" />
                <div className={`${styles.cardBody}`}>
                  <Heading variant="primary" className={styles.primaryHeading}>{title}</Heading>
                </div>
            </Card>
          </Col>
  )
};
export default CharacterItem;
