import React from 'react';
import {Card, CardBody, CardImg, CardTitle, Col } from "reactstrap";
import styles from "./styles.module.css";

const CharacterItem = ({img, title}) => {
  return (
          <Col md="4" className={ styles.characterItem }>
            <Card className={styles.cardPanel}>
                <CardImg src={img} className={`${styles.thumbnail} img-fluid`} alt="Card image cap" />
                <CardBody className={`${styles.cardBody}`}>
                  <CardTitle className={styles.primaryHeading}>{title}</CardTitle>
                </CardBody>
            </Card>
          </Col>
  )
};
export default CharacterItem;
