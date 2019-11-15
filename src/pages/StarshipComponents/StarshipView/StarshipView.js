import React from 'react';
import {CardImg, Col, Row } from "reactstrap";
import styles from "./styles.module.css";

import Card from "../../../components/StylesComponents/elements/card/card";
import Heading from "../../../components/StylesComponents/elements/heading/heading";
import Subheading from "../../../components/StylesComponents/elements/subheading/subheading";
import Separator from "../../../components/StylesComponents/elements/separator/separator";
import InfoText from "../../../components/StylesComponents/elements/infotext/infotext";

import { useQuery} from '@apollo/react-hooks';
import { starshipsQuery } from "../../../client/queries";
import StarshipChart from "../Chart/Chart";
import ErrorHandler from "../../../components/LoginSystem/guards/errorHandler";


const StarshipView = ({...props}) => {


  const starship = { ...props };
  const placeholderImage = "https://i.etsystatic.com/17236199/r/il/598fda/1553216794/il_570xN.1553216794_ayds.jpg";

  const {starshipClass} = starship;
  const {data, loading, error} = useQuery(starshipsQuery, {
    variables: {starshipClass}
  });

  if (loading) return 'Loading...';
  if (error)return (<ErrorHandler/>);

  console.log(starship);

  return (
          <>
            <Row>
              <Col className="col-md-12">
                <Heading variant="primary" className={styles.title}>{starship.name}</Heading>
                <Subheading variant="primary" className={styles.subtitle}>{starship.starshipClass}</Subheading>
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
                  <StarshipChart starship={starship} data={data}/>
                </Card>
              </Col>
            </Row>
          </>
  )
};
export default StarshipView;
