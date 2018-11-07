import React, { Component, Fragment } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Posts from './Posts';
import Todos from './Todos';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route path = {process.env.PUBLIC_URL + '/'} component={Home} />
        <Route exact path="/users/:userID/posts" component={Posts} />
        <Route exact path="/users/:userID/todos" component={Todos} />
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
