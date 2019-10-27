import React from 'react';
import './App.css';
import Login from './components/Login/Login.js';
import { Container, Row, Col } from 'reactstrap';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className="container-fluid">
              <NavbarComponent/>
          </div>
      </header>
        <Container>
            <Login></Login>
        </Container>
    </div>
  );
}

export default App;
