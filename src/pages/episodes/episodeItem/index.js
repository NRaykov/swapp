import React from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle, Col} from "reactstrap";
import styles from "./styles.module.css";

const EpisodeItem = ({img, title, text}) => {
  return (
          <Col md="4" className={ styles.episodeItem }>
            <Card className={styles.cardPanel}>
              <CardImg top width="100%" src={img} className={`${styles.thumbnail} img-fluid`} alt="Episode" />
              <CardBody className={`${styles.cardBody}`} >
                <CardTitle className={`${styles.title} title-global`}>{title}</CardTitle>
                <CardText className={`${styles.text}`} >{text}</CardText>
              </CardBody>
            </Card>
          </Col>
  )
};
export default EpisodeItem;
