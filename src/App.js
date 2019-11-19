import React from 'react';
import logo from './logo.svg';
import './App.css';
import MapContainer from './Components/MapContainer'
import AppBar from './Components/AppBar'

function App() {
  return (
    <div className="App container">
      <AppBar />
      <div className="row">
          <MapContainer />
      </div>
    </div>
  );
}

export default App;
