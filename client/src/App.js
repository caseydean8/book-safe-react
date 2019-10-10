import React from "react";
import SearchComponent from "./components/SearchComponent";
require('dotenv').config();

const APIKEY = `${process.env.REACT_APP_API_KEY}`;
console.log(APIKEY);

function App() {
  return <SearchComponent />;
}

export default App;