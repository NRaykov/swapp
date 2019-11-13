import React from 'react';
//import { isAuthenticated } from '../../../guards/auth.js';

import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";

import {CardImg, Col, Row} from "reactstrap";
import { Link } from 'react-router-dom';
import Button from "../../../components/elements/button/button";
import styles from "./styles.module.css";
import Card from "../../../components/elements/card/card";
import Heading from "../../../components/elements/heading/heading"


const charactersQuery = gql`
  query CharactersQuery($first: Int!, $after: String) {
    allPeople(first: $first, after: $after){
      edges{
        node{
          id
          image
          name
        }
      }
      pageInfo{
        hasNextPage
        endCursor
      }
    }
      
    }
`;

const Characters = () => {

  let first = 12;

  const { data, loading, error, fetchMore } = useQuery(charactersQuery, {
    variables: { first }
  });

  if (loading) return 'Loading ...';
  if (error)return (localStorage.clear());

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
                  <CardImg src={node.image} className={`${styles.thumbnail} img-fluid foo`} alt="Card image cap" />
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

