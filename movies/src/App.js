import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Error from './pages/Error';
import Home from './pages/Home';
import Avatar from './pages/Avatar';
import Drive from './pages/Drive';
import CoolRunnings from './pages/CoolRunnings';
import WakingLife from './pages/WakingLife';
import TheAvengers from './pages/TheAvengers'



const App = () => {
  return (
    <>
    <Router>
      <h1> This is Art and Andee's favorite movies </h1>
      <p>These are our favorite movies, click on any of them to find out more!</p>
    <Route exact path="/" component={ Home } />
    </Router>
    <Home/>
  </>
  );
}

export default App;
