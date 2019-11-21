import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MapContainer from './Components/MapContainer'
import AppBar from './Components/AppBar'
import DataSourceView from './Views/DataSourcesView/DataSourcesView'
import LandingPage from './Views/LandingPage'

function App() {
  return (
    <Router>
      <AppBar />
        <Switch>
          <Route path="/settings">
            <div className="App container">
              <div className="row">
                <DataSourceView />
              </div>
            </div>
          </Route>
          <Route path="/landing-page">
            <div className="App container">
                <LandingPage />
            </div>
          </Route>
          <Route exact path="/">
            <div className="App container-fluid">
              <div className="row">
                <MapContainer />
              </div>
            </div>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
