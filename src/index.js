import React from 'react';
import ReactDOM from 'react-dom';
/* Bootstrap 4.3 */
import 'bootstrap/dist/css/bootstrap.css';
/* Global Styles */
import './index.css';
import * as serviceWorker from './serviceWorker';



/* Import Apollo Server */
import ApolloClient, { gql} from 'apollo-boost'



import './fonts/SfDistantGalaxy-0l3d.ttf';
import { RouteNavigation } from './App';


const client = new ApolloClient({
  uri: "http://api.spacex.land/graphql/"
});

const QUERY = gql`
query {
    missions {
      id
      name
      description
      wikipedia
    }
  }
`;


ReactDOM.render(<RouteNavigation  />, document.getElementById('root'));


client.query({query: QUERY}).then(data => {
  console.log(data)
  window.addEventListener('load', ()=> {
    document.getElementById("app").innerHTML = JSON.stringify(data)
  });

});



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
