import React from 'react';
import './App.css';
import { HashRouter, Switch, Route } from "react-router-dom";
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <HashRouter basename='/'>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
