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

function App() {
  return (
    <Router>
      <div className="px-0 App container">
      <AppBar />
        <Switch>
          <Route path="/settings">
            <div className="row">
              <DataSourceView />
            </div>
          </Route>
          <Route exact path="/">
            <div className="row">
              <MapContainer />
            </div>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
