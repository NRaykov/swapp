import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login.js';
import { Container, Row, Col } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
        <Container>
            <Login></Login>
        </Container>
    </div>
  );
}

export default App;
