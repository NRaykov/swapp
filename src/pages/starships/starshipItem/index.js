import React from 'react';
import styles from "./styles.module.css";

import Card from "../../../components/elements/card/card";
import Heading from "../../../components/elements/heading/heading";



// TODO ***** Merge StarshipItem and CharacterItem into one component
const StarshipItem = ({img, model}) => {
  return (
          <Card variant="primary" className={styles.cardPanel}>
            <img src={img} className={`${styles.thumbnail} img-fluid`} alt="Card image cap" />
            <div className={`${styles.cardBody}`}>
              <Heading variant="primary" className={styles.primaryHeading}>{model}</Heading>
            </div>
          </Card>
  )
};
export default StarshipItem;
