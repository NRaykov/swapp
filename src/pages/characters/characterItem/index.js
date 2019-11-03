import React from 'react';
import {CardBody, CardImg, CardTitle, Col } from "reactstrap";
import styles from "./styles.module.css";

import Card from "../../../components/elements/card/card";

const CharacterItem = ({img, title}) => {
  return (
          <Col md="4" className={ styles.characterItem }>
            <Card variant="primary" className={styles.cardPanel}>
                <CardImg src={img} className={`${styles.thumbnail} img-fluid`} alt="Card image cap" />
                <div className={`${styles.cardBody}`}>
                  <CardTitle className={styles.primaryHeading}>{title}</CardTitle>
                </div>
            </Card>
          </Col>
  )
};
export default CharacterItem;
