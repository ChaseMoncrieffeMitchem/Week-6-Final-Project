import './App.css';
import Nav from './Nav';
import Movies from './components/Movies';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element= {<Home />}/>
        <Route path=":id" element= {<Movies />}/>
      </Routes>
    </Router>
  );
}

export default App;
