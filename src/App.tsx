import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './Components/Map';
import ExternalStateExample from './Components/ExternalStateExample';



function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Shakil Rizvi Stock Limited
        </p>
      </header>
      <ExternalStateExample></ExternalStateExample>
     
    </div>
  );
}

export default App;
