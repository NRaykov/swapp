import React from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle, Col, Row} from "reactstrap";
import styles from "./styles.module.css";

const Item = ({img, title, text}) => {
  return (
          <Col md="4">
            <Card className={styles.cardPanel}>
              <CardImg top width="100%" src={img} className="img-fluid" alt="Card image cap" />
              <CardBody>
                <CardTitle className={styles.title}>{title}</CardTitle>
                <CardText>{text}</CardText>
              </CardBody>
            </Card>
          </Col>
  )
};
export default Item;
