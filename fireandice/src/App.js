import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BookDetails from "./BookDetails";
import Home from "./Home";
import CharacterDetails from "./CharacterDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/character/:key" component={CharacterDetails} exact />;
      </Switch>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;
