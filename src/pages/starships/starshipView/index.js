import React from 'react';
import {CardImg, Col } from "reactstrap";
import styles from "./styles.module.css";

import Card from "../../../components/elements/card/card";
import Heading from "../../../components/elements/heading/heading";
import Subheading from "../../../components/elements/subheading/subheading";
import Separator from "../../../components/elements/separator/separator";

import InfoText from "../../../components/elements/infotext/infotext";
import Row from "reactstrap/es/Row";


const Starship = ({}) => {

  //Placeholder
  const starshipDetails = [
    {
      id: "1",
      class: "Starfighter",
      description: "Delta-7 Aethersprite-class interceptor",
      img: "https://via.placeholder.com/560",
      cost: "1800000 credits",
      crew: 1,
      speed: 1150,
      rating: 1
    }
  ];

//TODO Chart Data






  return (
          <>
            <Row>
              <Col className="col-md-12">
                <Heading variant="primary" className={styles.title}>{starshipDetails[0].class}</Heading>
                <Subheading variant="primary" className={styles.subtitle}>({starshipDetails[0].description})</Subheading>
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
                  <Heading variant="primary" className={styles.cardTitle}>{starshipDetails[0].class}</Heading>
                  <CardImg src={starshipDetails[0].img} className={`${styles.thumbnail} img-fluid`} alt="Card image cap" />
                  <div className={`${styles.infoPanel}`}>
                    <ul className={`${styles.infoList}`}>
                      <li className={`${styles.infoListItem}`}>
                        Class: <InfoText variant="primary">{starshipDetails[0].class}</InfoText>
                      </li>
                      <li className={`${styles.infoListItem}`}>
                        Cost: <InfoText variant="primary">{starshipDetails[0].cost}</InfoText>
                      </li>
                      <li className={`${styles.infoListItem}`} >
                        Crew: <InfoText variant="primary">{starshipDetails[0].crew}</InfoText>
                      </li>
                      <li className={`${styles.infoListItem}`}>
                        Max Atmospheric Speed: <InfoText variant="primary">{starshipDetails[0].speed}</InfoText>
                      </li>
                      <li className={`${styles.infoListItem}`}>
                        Hyperdrive Rating: <InfoText variant="primary">{starshipDetails[0].rating}</InfoText>
                      </li>
                    </ul>
                  </div>
                </Card>
              </Col>
              <Col md="6">
                  <div className={styles.chartPanel}>

                  </div>
              </Col>
            </Row>
          </>
  )
};
export default Starship;
