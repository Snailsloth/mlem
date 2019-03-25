import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import './styles/global.scss'

import Home from './Views/Home/Home'
import Contacts from './Views/Contacts/Contacts'
import ErrorPage from './Views/Error/Error'

import Navpanel from './components/Navpanel/Navpanel'
import GitCard from './components/Cards/GitCard/GitCard'
import TwitterCard from './components/Cards/TwitterCard/TwitterCard'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navpanel/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contacts" component={Contacts} />
            <Route component={ErrorPage} />
          </Switch>
          <footer className="footer margin--large-top">
            <div className="container">
              <GitCard user="Snailsloth"/>
              <TwitterCard user="SnailslothPug"/>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
