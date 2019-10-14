import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "./components/Container"
import Nav from "./components/Nav"
import Jumbotron from "./components/Jumbotron"
import SearchComponent from "./components/SearchComponent";
import SavedComponent from "./components/SavedComponent";


class App extends Component {
  render() {
    return (
      <div>
        <Container>
        <Nav/>
        
          <Jumbotron/>
          <Router>
            <Switch>
              <Route exact path="/" component={SearchComponent} />
              <Route exact path="/api/books" component={SavedComponent} />
              <Route path="/api/books/:id"></Route>
            </Switch>
          </Router>
          </Container>
      </div>
    )
  }
}

// function App() {
//   return <SearchComponent />;
// }

export default App;