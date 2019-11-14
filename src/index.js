import React from 'react';
import ReactDOM from 'react-dom';
import { AppComponent } from './App';
/* Bootstrap 4.3 */
import 'bootstrap/dist/css/bootstrap.css';
/* Global Styles */
import './index.css';
import './assets/fonts/SfDistantGalaxy-0l3d.ttf';

import * as serviceWorker from './serviceWorker';


ReactDOM.render(<AppComponent  />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
