import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav"
import Jumbotron from "./components/Jumbotron"
import SearchComponent from "./components/SearchComponent";
import SavedComponent from "./components/SavedComponent";


class App extends Component {
  render() {
    return (
      <div className='container'>
        <Nav/>
        <Jumbotron/>
          <Router>
            <Switch>
              <Route exact path="/" component={SearchComponent} />
              <Route exact path="/api/books" component={SavedComponent} />
              <Route path="/api/books/:id"></Route>
            </Switch>
          </Router>
      </div>
    )
  }
}

export default App;