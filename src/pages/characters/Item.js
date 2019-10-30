import React from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle, Col, Row} from "reactstrap";
import styles from "./styles.module.css";

const Item = ({img, title}) => {
  return (
          <Col md="4">
            <Card className={styles.cardPanel}>
              <CardImg width="170" src={img} className={`${styles.thumbnail} img-fluid`} alt="Card image cap" />
              <CardBody className={`${styles.cardBody}`}>
                <CardTitle className={styles.title}>{title}</CardTitle>
              </CardBody>
            </Card>
          </Col>
  )
};
export default Item;
