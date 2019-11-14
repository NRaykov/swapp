import React from 'react';
import {Radar} from 'react-chartjs-2';

import {CardImg, Col, Row } from "reactstrap";
import styles from "./styles.module.css";

import Card from "../../../components/elements/card/card";
import Heading from "../../../components/elements/heading/heading";
import Subheading from "../../../components/elements/subheading/subheading";
import Separator from "../../../components/elements/separator/separator";

import InfoText from "../../../components/elements/infotext/infotext";
import StarshipChart from "../chart/chart";


const StarshipView = ({...props}) => {


  const starship = { ...props };
  const placeholderImage = "https://i.etsystatic.com/17236199/r/il/598fda/1553216794/il_570xN.1553216794_ayds.jpg";

  return (
          <>
            <Row>
              <Col className="col-md-12">
                <Heading variant="primary" className={styles.title}>{starship.name}</Heading>
                <Subheading variant="primary" className={styles.subtitle}>{starship.name}</Subheading>
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
                  <Heading variant="primary" className={styles.cardTitle}>{starship.name}</Heading>
                  <CardImg src={starship.image === null ? placeholderImage : starship.image} className={`${styles.thumbnail} img-fluid w-100`} alt="Card image cap" />
                  <div className={`${styles.infoPanel}`}>
                    <ul className={`${styles.infoList}`}>
                      <li className={`${styles.infoListItem}`}>
                        Class: <InfoText variant="primary">{starship.starshipClass}</InfoText>
                      </li>
                      <li className={`${styles.infoListItem}`}>
                        Cost: <InfoText variant="primary">{starship.cost}</InfoText>
                      </li>
                      <li className={`${styles.infoListItem}`} >
                        Crew: <InfoText variant="primary">{starship.crew}</InfoText>
                      </li>
                      <li className={`${styles.infoListItem}`}>
                        Max Atmospheric Speed: <InfoText variant="primary">{starship.maxAtmosphericSpeed}</InfoText>
                      </li>
                      <li className={`${styles.infoListItem}`}>
                        Hyperdrive Rating: <InfoText variant="primary">{starship.hyperdriveRating}</InfoText>
                      </li>
                    </ul>
                  </div>
                </Card>
              </Col>
              <Col md="6">
                <Subheading variant="primary" className={styles.subtitle}>Compared to Starship Class Max</Subheading>
                <Card className={styles.chartPanel}>
                  <StarshipChart/>
                </Card>
              </Col>
            </Row>
          </>
  )
};
export default StarshipView;
