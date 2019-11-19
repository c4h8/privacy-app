import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MapContainer from './Components/MapContainer'
import AppBar from './Components/AppBar'
import DataSourceView from './Views/DataSourcesView/DataSourcesView'

function App() {
  return (
    <Router>
      <div className="px-0 App container">
      <AppBar />
        <Switch>
          <Route path="/settings">
            <DataSourceView />
          </Route>
          <Route exact path="/">
            <div className="row">
              <MapContainer />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
