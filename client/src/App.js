import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Nav from "./components/layout/header/Nav/Nav";
import Intro from "./components/main/Intro/Intro";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Nav/>
            <Switch>
              <Route exact path="/" component={Intro}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
