import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles/global.scss";

import Home from "./Views/Home/Home";
import Contacts from "./Views/Contacts/Contacts";
// import ErrorPage from "./Views/Error/Error";
import NotFound from "./Views/NotFound/NotFound";

import Navpanel from "./components/Navpanel/Navpanel";

/*Matthew's wavy url
http://matthewrayfield.com/articles/animating-urls-with-javascript-and-emojis/#%E2%96%81%E2%96%82%E2%96%84%E2%96%86%E2%96%88%E2%96%88%E2%96%88%E2%96%87%E2%96%85%E2%96%83
*/
// function loop() {
//   var i,
//     n,
//     s = "";

//   for (i = 0; i < 10; i++) {
//     n = Math.floor(Math.sin(Date.now() / 200 + i / 2) * 4) + 4;

//     s += String.fromCharCode(0x2581 + n);
//   }

//   document.title = `Mlem! ${s}`;

//   setTimeout(loop, 10);
// }

// loop();

class App extends Component {
  state = {
    pageName: ""
  };

  /* Весь этот гемморой с функцией в пропсы и хуком в функциональном компоненте
  начался только из за того что мне приперло сделать имя страницы 
  не в самом загружаемом компоненте страницы, а в хедере. 
  Скорее всего есть пути и легче но пока что вот как то так вот так. Я верю, что когда-нибудь ты поумнеешь, Олежа */
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

          <Switch>
            <Route
              exact
              path='/'
              render={routeProps => (
                <Home {...routeProps} pageSwitchHandler={this.onPageSwitch} />
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
