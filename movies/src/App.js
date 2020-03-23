import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Error from './pages/Error';
import movies from './movies/movies';
import Movie from './pages/Movie'





class App extends Component {
  constructor(){
    super()
    this.state = {
      allMovies: movies
    }
  }
  
  
  render() {
  return (
      <>
    <Router>
      <div>
        <h1> This is Art and Andee's favorite movies! </h1>
        <p>These are our favorite movies, click on any of them to find out more!</p>
        <ul>
          { this.state.allMovies.map((movie, index) => 
          <li key={ index }>
            <Link to={`/movies/${movie.id}`}>
            {movie.name }
            </Link>
            </li>
            )}
        </ul>
        <Switch>
          <Route
          path="/movies/:id"
          render={ ( props ) => <Movie { ...props } movies={ this.state.allMovies } /> }
          />
        </Switch>
      </div>
    </Router>
  </>
  );
 }
}

export default App;
