import React, { Component } from 'react';
import './App.scss';
import { Switch, Route }  from "react-router-dom";

import HeaderContainer    from './components/Header/HeaderContainer';
import LogIn              from     './pages/LogIn';
import RedirectedIPs      from     './pages/RedirectedIPs';
import Visitors           from     './pages/Visitors';

class App extends Component {

  render () {
    return (
      <>
        <HeaderContainer /> 
        <Switch>

          <Route exact path="/">
            <LogIn />
          </Route>
          <Route path="/redirected-ips">
            <RedirectedIPs />
          </Route>
          <Route path="/visitors">
            <Visitors />
          </Route>
          
        </Switch>
      </>
    );
  }
}

export default App;