import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchComponent from "./components/SearchComponent";
import SavedComponent from "./components/SavedComponent";


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={SearchComponent} />
          <Route exact path="/api/books" component={SavedComponent} />
        </Switch>
      </Router>
    )
  }
}

// function App() {
//   return <SearchComponent />;
// }

export default App;