import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import MainLayout from 'components/common/MainLayout';
import MenuLayout from './pages/MenuLayout'
import LoginPage from './pages/LoginPage'


import Localizer from './components/core/Localizer'
import './styles/styles.scss'
import ProtectedRoute from './components/common/ProtectedRoute';
import { isTokenInformed } from 'services/jwtService';


function App() {
  return (
    <Provider store={store}>
      <Localizer>

        <Router>
          <div className="parent-container">
            <Fragment>
                <Switch>
                  <Route path="/login" component={LoginPage} />
                  <ProtectedRoute exact path="/layout" component={()=><MainLayout><MenuLayout/></MainLayout>} />
                </Switch>
            </Fragment>
            {!isTokenInformed() ? <Redirect to="/login"></Redirect> : null}
          </div>
        </Router>
      </Localizer>
    </Provider>
  );
}

export default App;
