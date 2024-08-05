import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ArtGallery from './components/ArtGallery';
import Artwork from './components/Artwork'; // Import Artwork component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Route for Home page */}
          <Route path="/art-gallery" element={<ArtGallery />} /> {/* Route for ArtGallery page */}
          <Route path="/art-gallery/:id" element={<Artwork />} /> {/* Route for Artwork page with ID */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
