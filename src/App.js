import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import GamesPage from './GamesPage'
import GameFormPage from './GameFormPage'

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui three item menu">
          <Link className="item" to="/">Home</Link>
          <Link className="item" to="/games">Games</Link>
          <Link className="item" to="/game/new">Add New Games</Link>
        </div>
        <Switch>
          <Route exactly path="/games" component={GamesPage}/>
          <Route path="/game/new" component={GameFormPage}/>
          <Route path="/game/:_id" component={GameFormPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;