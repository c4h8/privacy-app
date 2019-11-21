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
import Login from './Views/LoginView.jsx'
import LandingPage from './Views/LandingPage'
import ProfileView from './Views/ProfileView/ProfileView'

function App() {
  return (
    <Router>
      <AppBar />
        <Switch>
          <Route path="/connected-services">
            <div className="App container">
              <div className="row">
                <DataSourceView />
              </div>
            </div>
          </Route>
          <Route path="/location-map">
            <div className="App container-fluid">
              <div className="row">
                <MapContainer />
              </div>
            </div>
          </Route>
          <Route path="/profile">
            <div className="App container">
              <div className="row">
                <ProfileView />
              </div>
            </div>
          </Route>
          <Route exact path="/">
            <div className="App container">
              <LandingPage />
            </div>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
