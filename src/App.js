import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Login } from './components/pages/Login';
import { Home } from './components/pages/Home';
import { Signup } from './components/pages/Signup';

import './App.css';
import { Subject } from './components/pages/Subject';

function App() {
  const [log, setLog] = useState('');
  const [user, setUser] = useState('');

  const getLog = (log) => setLog(log);

  const getUser = (user) => setUser(user);

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/login' />
          </Route>
          <Route
            exact
            path='/login'
            render={(props) => (
              <Login {...props} getLog={getLog} getUser={getUser} />
            )}
          />
          <Route
            exact
            path='/home'
            render={(props) => <Home {...props} user={user} />}
          />
          <Route exact path='/register' component={Signup} />
          <Route exsct psth='/subject/:slug' component={Subject} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
