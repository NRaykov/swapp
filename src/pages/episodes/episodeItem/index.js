import React from 'react';
import {CardImg, CardText} from "reactstrap";
import styles from "./styles.module.css";

import Card from "../../../components/elements/card/card";
import Heading from "../../../components/elements/heading/heading";


const EpisodeItem = ({id, img, title, text}) => {
  return (
          <Card variant="primary" className={`${styles.cardPanel}`}>
            <CardImg top width="100%" src={img} className={`${styles.thumbnail} img-fluid`} alt="Episode" />
              <div className={`${styles.cardBody}`} >
                <Heading variant="primary" className={`${styles.title} title-global`}>{title}</Heading>
                <CardText className={`${styles.text}`} >{text}</CardText>
              </div>
          </Card>
  )
};
export default EpisodeItem;
