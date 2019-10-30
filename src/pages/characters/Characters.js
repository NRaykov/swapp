import React from 'react';
import Login from '../../components/Login/Login.js';
import { isAuthenticated, signout } from '../../guards/auth.js';
import { withRouter } from 'react-router-dom';
import Item from "./Item.js";
import {Row} from "reactstrap";


//Placeholder
const state = [
  {
    id: 1,
    title: "Yoda",
    img: "https://via.placeholder.com/80"
  },
  {
    id: 2,
    title: "Yoda 1",
    img: "https://via.placeholder.com/80"
  },

  {
    id: 3,
    title: "Yoda 2",
    img: "https://via.placeholder.com/80"
  },
  {
    id: 4,
    title: "Yoda 3",
    img: "https://via.placeholder.com/80"
  },
  {
    id: 5,
    title: "Yoda 4",
    img: "https://via.placeholder.com/80"
  },
  {
    id: 6,
    title: "Yoda 5",
    img: "https://via.placeholder.com/80"
  },
  {
    id: 7,
    title: "Yoda 6",
    img: "https://via.placeholder.com/80"
  },
  {
    id: 8,
    title: "Yoda 7",
    img: "https://via.placeholder.com/80"
  },

  {
    id: 9,
    title: "Yoda 8",
    img: "https://via.placeholder.com/80"
  },
  {
    id: 10,
    title: "Yoda 9",
    img: "https://via.placeholder.com/80"
  },
  {
    id: 11,
    title: "Yoda 10",
    img: "https://via.placeholder.com/80"
  },
  {
    id: 12,
    title: "Yoda 11",
    img: "https://via.placeholder.com/80"
  },
];

const Characters = withRouter(({ history }) =>
            isAuthenticated ? (
                    <React.Fragment>
                      <Row>
                        {/*TODO Fetch Data from DB*/}
                        { state.map((element) => {
                          return (
                                  <Item key={element.id}
                                        title={element.title}
                                        img={element.img}/>
                          )
                        })
                        }
                      </Row>
                    </React.Fragment>

            ) : ( <Login/> ),
        );
export default Characters;
