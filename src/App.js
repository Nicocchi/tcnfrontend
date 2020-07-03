import React from 'react';
import { withRouter, Switch } from "react-router-dom";
import TopBar from './Components/Navigation/TopBar';
import Header from './Components/Header';
import NavBar from './Components/Navigation/NavBar';
import './App.scss';
import routes from "./routes";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <NavBar />
      <div className="App-content">
      <Switch>{routes}</Switch>
      </div>
    </div>
  );
}

export default withRouter(App);
