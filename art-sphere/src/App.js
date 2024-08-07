// App.js

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ArtGallery from './components/ArtGallery';
import ArtWorks from './components/ArtWorks';
import Contacts from './components/Contacts';  // Ensure the path is correct
import Artist from './components/Artist'; // Correctly importing the Artist component
import Checkout from './components/Checkout';
import Reviews from './components/Reviews';  // Ensure the path is correct

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/art-gallery" element={<ArtGallery />} />
          <Route path="/art-works" element={<ArtWorks />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/artist/:artistId" element={<Artist />} /> {/* Corrected path */}
          <Route path="/reviews" element={<Reviews />} /> 
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
