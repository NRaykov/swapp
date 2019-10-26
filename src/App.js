import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">SWAPP</h1>
      </header>
        <main>
            <Login></Login>
        </main>
    </div>
  );
}

export default App;
