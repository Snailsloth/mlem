import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles/global.scss";

import Home from "./Views/Home/Home";
import Contacts from "./Views/Contacts/Contacts";
// import ErrorPage from "./Views/Error/Error";
import NotFound from "./Views/NotFound/NotFound";

import Navpanel from "./components/Navpanel/Navpanel";

class App extends Component {
  state = {
    pageName: ""
  };

  /* Весь этот гемморой с функцией в пропсы и хуком в функциональном компоненте
  начался только из за того что мне захотелось сделать имя страницы 
  не в самом загружаемом компоненте страницы, а в хедере. 
  Скорее всего есть пути и легче но пока что вот как то так вот так.
  Я верю, что когда-нибудь ты поумнеешь, Олежа */
  onPageSwitch = pageName => {
    this.setState({
      pageName: pageName
    });
  };

  render() {
    return (
      <BrowserRouter>
        <>
          <header className='container'>
            <Navpanel activePage={this.state.pageName} />
          </header>

          <div className='container content of--hidden'>
            <div className='shadow-wrapper'>
              <Switch>
                <Route
                  exact
                  path='/'
                  render={routeProps => (
                    <Home
                      {...routeProps}
                      pageSwitchHandler={this.onPageSwitch}
                    />
                  )}
                />

                <Route
                  exact
                  path='/contacts'
                  render={routeProps => (
                    <Contacts
                      {...routeProps}
                      pageSwitchHandler={this.onPageSwitch}
                    />
                  )}
                />

                <Route
                  render={routeProps => (
                    <NotFound
                      {...routeProps}
                      pageName={"404"}
                      pageSwitchHandler={this.onPageSwitch}
                    />
                  )}
                />
              </Switch>
            </div>
          </div>

          <footer className='footer'>
            <div className='container'>
              <b className='text--center'>_od {new Date().getFullYear()}</b>
            </div>
          </footer>
        </>
      </BrowserRouter>
    );
  }
}

export default App;
