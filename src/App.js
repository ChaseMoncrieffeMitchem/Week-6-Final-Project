import { useEffect, useState } from 'react';
import './App.css';
import Nav from './Nav';
import MovieList from './components/MovieList';
import Movies from './components/Movies';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  async function pageMovies() {
    setLoading(true)
    const response= await axios.get(`http://www.omdbapi.com/?apikey=f5bbb04b&page=1`)
    setLoading(false)
    setMovies(response.data)
  }

  useEffect(() => {
    pageMovies()
  }, [])

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = movies.slice(firstPostIndex, lastPostIndex)

  return (
    <Router>
      <Routes>
        <Route path="/" element= {<Home />}/>
        <Route path=":id" element= {<Movies />}/>
        <Route path=":pageNumber" element={<MovieList movies={currentPosts}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
