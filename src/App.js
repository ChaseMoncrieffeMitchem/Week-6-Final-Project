import { useEffect, useState } from 'react';
import './App.css';
import Nav from './Nav';
import MovieList from './components/MovieList';
import Movies from './components/Movies';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Pagination from './components/Pagination';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element= {<Home />}/>
        <Route path=":id" element= {<Movies />}/>
        <Route path="/movielist" Component={MovieList}/>
      </Routes>
    </Router>
  );
}

export default App;
