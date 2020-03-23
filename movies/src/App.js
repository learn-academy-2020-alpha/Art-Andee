import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Error from './pages/Error';
import Home from './pages/Home';
import Movies from './pages/Movies';


const App = () => {
  return (
    <Router>
      <div>
        <h1> This is Art and Andee's favorite movies </h1>
          <nav>
              <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/movies/">Movies</Link>
                </li>
              </ul>
            </nav>
            <Switch>
            <Route path="/movies/" component={ Movies } />
            <Route exact path="/" component={ Home } />
            <Route component={ Error } />
            </Switch>
     </div>
    </Router>
  );
}

export default App;
