import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import { isTokenInformed } from 'services/jwtService';
import SideMenu from 'components/SideMenu';
import Header from 'components/HeaderControl'
import MenuLayout from './pages/MenuLayout'
import LoginPage from './pages/LoginPage'

import Localizer from './components/core/Localizer'
import './styles/styles.scss'

function App() {
  return (
    <Provider store={store}>
      <Localizer>

        <Router>
          <div className="parent-container">


            {isTokenInformed() ? <Fragment>
              <Header />
              <SideMenu className="side-menu" selectedIndex={1} titlelabelId="messages.menuTitle" />

              <div className="page-container">
                <Switch>
                  <Route path="/" component={MenuLayout} />
                </Switch>
              </div>
            </Fragment> : <LoginPage />}

          </div>
        </Router>
      </Localizer>
    </Provider>
  );
}

export default App;
