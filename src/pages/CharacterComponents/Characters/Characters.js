import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {charactersQuery} from "../../../client/queries";

import {CardImg, Col, Row} from "reactstrap";
import { Link } from 'react-router-dom';
import Button from "../../../components/StylesComponents/elements/button/button";
import styles from "./styles.module.css";
import Card from "../../../components/StylesComponents/elements/card/card";
import Heading from "../../../components/StylesComponents/elements/heading/heading"
import ErrorHandler from "../../../components/LoginSystem/guards/errorHandler";


const Characters = () => {

  const placeholderImage = "https://i.etsystatic.com/17236199/r/il/598fda/1553216794/il_570xN.1553216794_ayds.jpg";

  let first = 12;
  const { data, loading, error, fetchMore } = useQuery(charactersQuery, {
    variables: { first }
  });

  if (loading) return 'Loading ...';
  if (error)return (<ErrorHandler/>);

  const [...allPeople] = data.allPeople.edges;
  let { hasNextPage, endCursor } = data.allPeople.pageInfo;

  const loadMore = () => {
    fetchMore({
      variables: {
        after: endCursor,
        first: 12
      },
      updateQuery: (prev, { fetchMoreResult: { allPeople } }) => {

        return {
          allPeople: {
            ...allPeople,
            edges: [
              ...prev.allPeople.edges,
              ...allPeople.edges]
          },
        };
      },
    });
  };
        const characters = allPeople.map(({ node }) => (
            <Col md="4" key={node.id}>
              <Link className={ styles.cardPanel }
                    variant="nav" key={node.id}
                    to={`/characters/${node.id}`}>
                <Card variant="primary" className={styles.cardPanel}>
                  <CardImg src={node.image === null ? placeholderImage : node.image} className={`${styles.thumbnail} img-fluid foo`} alt="Card image cap" />
                  <div className={`${styles.cardBody}`}>
                    <Heading variant="primary" className={styles.primaryHeading}>{node.name}</Heading>
                  </div>
                </Card>
              </Link>
            </Col>
        ));




  return (
          <React.Fragment>
              <Row>
                {characters}
              </Row>
              {hasNextPage && (

              <Col md="12">
                <div className={`${styles.buttonPanel}`}>
                  <Button variant="primary" className={`${styles.btnLogin}`} onClick={loadMore}>Load More</Button>
                </div>
              </Col>
              )}
          </React.Fragment>



  );
};
export default Characters;

