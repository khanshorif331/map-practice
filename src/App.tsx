import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './Components/Map';
import ExternalStateExample from './Components/ExternalStateExample';
import { Button } from '@mantine/core';



function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Shakil Rizvi Stock Limited
          <Button>Click Me</Button>
        </p>
      </header>
      <ExternalStateExample></ExternalStateExample>
     
    </div>
  );
}

export default App;
