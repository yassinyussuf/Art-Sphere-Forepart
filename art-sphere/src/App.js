// App.js

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ArtGallery from './components/ArtGallery';
import ArtWorks from './components/ArtWorks';
import ArtworkDetails from './components/ArtworkDetails';
import Contacts from './components/Contacts';
import Artist from './components/Artist';
import Checkout from './components/Checkout';
import Reviews from './components/Reviews';
import { NotificationProvider } from './context/NotificationContext';

function App() {
  return (
    <NotificationProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/art-gallery" element={<ArtGallery />} />
            <Route path="/art-works" element={<ArtWorks />} />
            <Route path="/art-gallery/:id" element={<ArtworkDetails />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/artist/:artistId" element={<Artist />} /> {/* Corrected path */}
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </Router>
    </NotificationProvider>
  );
}

export default App;
