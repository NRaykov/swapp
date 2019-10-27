import React from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle, Col, Row} from "reactstrap";
import styles from "./styles.module.css";

const CardItem = (props) => {
  return (
          <Col md="4">
            <Card className={styles.cardPanel}>
              <CardImg top width="100%" src="https://via.placeholder.com/400x400" className="img-fluid" alt="Card image cap" />
              <CardBody>
                <CardTitle className={styles.title}>{props.title}</CardTitle>
                <CardText>{props.text}</CardText>
              </CardBody>
            </Card>
          </Col>
  )
};
export default CardItem;
