import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from './Components/dashboard/Dashboard'
import SignIn from './Components/auth/SignIn'
import SignUp from './Components/auth/SignUp'
import FriendList from './Components/pages/FriendList';
import Events from './Components/pages/Events';
import Challenge from './Components/pages/Challenge';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/'component={Dashboard} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/friendlist' component={FriendList} />
            <Route path='/events' component={Events} />
            <Route path='/challenge' component={Challenge} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
