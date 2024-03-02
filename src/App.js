import { useEffect, useState } from 'react';
import './App.css';
import Nav from './Nav';
import MovieList from './components/MovieList';
import Movies from './components/Movies';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Pagination from './components/Pagination';
import { movies } from "./idk/Api.jsx"

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" render={<Home movies={movies}/>}/>
        <Route path="/movielist" render={() => <MovieList movies={movies} />}/>
        <Route path=":id" Component={Movies}/>
      </Routes>
    </Router>
  );
}

export default App;
