import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home1 from './pages/Home1';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/"></Link>
        <Link to="/Home"></Link>
        <Link to="/ProductDetail"></Link>
        <Link to="/About"></Link>
      </nav>
    <Routes>
      <Route path='/' element={<Home1 />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/ProductDetail' element={<ProductDetail />} />
      <Route path='/About' element={<About />} />
    </Routes>
    </div>
  );
}

export default App;
