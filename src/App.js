import React from 'react';
import logo from './logo.svg';
import './App.css';
import MovieCard from './components/MovieCard';
import Movies from './components/Movies';
import { BrowserRouter, Link, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
   
     <BrowserRouter>
      <div>
        <ul>
          <li><Link to="/Movies">Products</Link></li>
        </ul>
        <Route path="/Movies" component={Movies}></Route>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
