import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route } from 'react-router-dom';
import GamesPage from './GamesPage'
import GameForm from './GameForm'

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui three item menu">
          <Link className="item" activeClassName="active" activeOnlyWhenExact to="/">Home</Link>
          <Link className="item" activeClassName="active" activeOnlyWhenExact to="/games">Games</Link>
          <Link className="item" activeClassName="active" activeOnlyWhenExact to="/game/new">Add New Games</Link>
        </div>
        <Route exactly path="/games" component={GamesPage}/>
        <Route path="/game/new" component={GameForm}/>
      </div>
    );
  }
}

export default App;