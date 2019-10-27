import React from 'react';
import Login from '../../components/Login/Login.js';
import { isAuthenticated, signout } from '../../guards/auth.js';
import { withRouter } from 'react-router-dom';

import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import styles from './styles.module.css';


//Placeholder
const episodes = [0,1,2,3,4,5];

const Episodes = withRouter(({ history }) =>
            isAuthenticated ? (
                    <React.Fragment>
                      <Row>
                        {/*TODO Fetch Data from DB*/}
                        { episodes.map((index) => {
                          return (
                            <Col md="4" key={index}>
                              <Card className={styles.cardPanel}>
                                <CardImg top width="100%" src="https://via.placeholder.com/400x400" className="img-fluid" alt="Card image cap" />
                                <CardBody>
                                  <CardTitle className={styles.title}>Card title</CardTitle>
                                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </CardBody>
                              </Card>
                            </Col>
                          )
                        }) }

                      </Row>
                    </React.Fragment>

            ) : ( <Login/> ),
        );
export default Episodes;
