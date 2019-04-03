import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import './styles/global.scss'

import Home from './Views/Home/Home'
import Contacts from './Views/Contacts/Contacts'
import ErrorPage from './Views/Error/Error'

import Navpanel from './components/Navpanel/Navpanel'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>

          <header className="container">
            <Navpanel/>
          </header>


            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/contacts" component={Contacts} />
              <Route component={ErrorPage} />
            </Switch>


          <footer className="footer">
            <div className="container">
              <b className="text--center">@snsl {new Date().getFullYear()}</b>


            </div>
          </footer>

        </>
      </BrowserRouter>
    );
  }
}

export default App;
