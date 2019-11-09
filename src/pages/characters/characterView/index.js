import React from 'react';
import {CardImg, Col } from "reactstrap";
import styles from "./styles.module.css";

import Card from "../../../components/elements/card/card";
import Heading from "../../../components/elements/heading/heading";
import Subheading from "../../../components/elements/subheading/subheading";
import Separator from "../../../components/elements/separator/separator";

import InfoText from "../../../components/elements/infotext/infotext";
import Row from "reactstrap/es/Row";
import StarshipItem from "../../starships/starshipItem";
import { Link } from "react-router-dom";

const Character = ({...props}) => {

const characterDetails = [
  {
    id: "1",
    name: "Obi-Wan Kenobi",
    img: "https://via.placeholder.com/460",
    height: 182,
    weight: 77,
    species: "Human",
    planet: "Sewjon"
  }
];

const starships = [
      {
        id: "0",
        img: "https://via.placeholder.com/100",
        model: "Jedi Starfighter"
      },
      {
        id: "1",
        img: "https://via.placeholder.com/100",
        model: "Naboo Star Skiff"
      },
      {
        id: "2",
        img: "https://via.placeholder.com/100",
        model: "Trade federation cruiser"
      },
      {
        id: "3",
        img: "https://via.placeholder.com/100",
        model: "Jedi Interceptor"
      },
      {
        id: "4",
        img: "https://via.placeholder.com/100",
        model: "Belbullab-22 starfigter"
      },
];

  return (
          <>
          <Row>
            <Col className="col-md-12">
              <Heading variant="primary" className={styles.title}>{characterDetails[0].name}</Heading>
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
                <Heading variant="primary" className={styles.cardTitle}>Character</Heading>
                <CardImg src={characterDetails[0].img} className={`${styles.thumbnail} img-fluid`} alt="Card image cap" />
                <div className={`${styles.infoPanel}`}>
                  <ul className={`${styles.infoList}`}>
                    <li className={`${styles.infoListItem}`}>
                      Height: <InfoText variant="primary">{characterDetails[0].height}</InfoText>
                    </li>
                    <li className={`${styles.infoListItem}`}>
                      Weight: <InfoText variant="primary">{characterDetails[0].weight}</InfoText>
                    </li>
                    <li className={`${styles.infoListItem}`} >
                      Species: <InfoText variant="primary">{characterDetails[0].species}</InfoText>
                    </li>
                    <li className={`${styles.infoListItem}`}>
                      Home World: <InfoText variant="primary">{characterDetails[0].planet}</InfoText>
                    </li>
                  </ul>
                </div>
              </Card>
            </Col>
            <Col md="6">
                <Subheading variant="primary" className={styles.title}>Piloted Starships</Subheading>
                <Separator variant="primary"/>
                  {/*TODO Fetch Data from DB*/}
                  { starships.map((element) => {
                    return (
                            <div>
                              <Link key={element.id} to={`/starship/${element.id}`} className={ styles.starshipPanel }>
                                <StarshipItem key={element.id}
                                              model={element.model}
                                              img={element.img}/>
                              </Link>
                            </div>
                    )
                  })
                  }
            </Col>
          </Row>
          </>
  )
};
export default Character;
