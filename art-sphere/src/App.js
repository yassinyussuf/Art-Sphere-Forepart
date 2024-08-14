import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ArtGallery from './components/ArtGallery';
import Artwork from './components/Artwork';
import Orders from './components/Orders';
import PaymentForm from './components/PaymentForm';
import GenerateCertificate from './components/GenerateCertificate';
import ArtworkList from './components/ArtworkList';
import PurchaseForm from './components/PurchaseForm';
import AddArtist from './components/AddArtist';
import ArtistList from './components/ArtistList';
import FollowArtist from './components/FollowArtist';
import Comments from './components/Comments';
import UserComponent from './components/UserComponent'; // Import the UserComponent

function App() {
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [artworkId, setArtworkId] = useState(null);
  const [artists, setArtists] = useState([]);
  const [orderId, setOrderId] = useState(null);
  const [userId, setUserId] = useState(null);

  const handleSelectArtwork = (artwork) => {
    setSelectedArtwork(artwork);
    setArtworkId(artwork.id);
  };

  const handlePurchase = () => {
    // Simulate setting orderId after purchase
    const newOrderId = Math.floor(Math.random() * 1000); // Example: Random order ID
    setOrderId(newOrderId);
    alert('Purchase completed successfully!');
    setSelectedArtwork(null);
  };

  const addArtist = (newArtist) => {
    setArtists([...artists, newArtist]);
  };

  const handleUserLogin = (id) => {
    setUserId(id); // Set userId after successful login or registration
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/art-gallery" element={<ArtGallery />} />
          <Route path="/art-gallery/:id" element={<Artwork />} />
          <Route path="/orders" element={<Orders userId={userId} />} />
        </Routes>
        <header className="App-header">
          <h1>User Management</h1>
        </header>
        <main>
          <UserComponent onLogin={handleUserLogin} />
        </main>
        <header className="App-header">
          <h1>Order Tracking & Digital Certificates</h1>
        </header>
        <main>
          <GenerateCertificate />
        </main>
        <header className="App-header">
          <h1>Purchase Artwork</h1>
        </header>
        <main>
          <ArtworkList onSelectArtwork={handleSelectArtwork} />
          {selectedArtwork && (
            <PurchaseForm
              artwork={selectedArtwork}
              onPurchase={handlePurchase}
            />
          )}
        </main>
        <header className="App-header">
          <h1>Follow Your Favorite Artists</h1>
        </header>
        <main>
          <FollowArtist />
        </main>
        <header className="App-header">
          <h1>Comments</h1>
        </header>
        <main>
          {artworkId && <Comments artworkId={artworkId} />}
        </main>
        <header className="App-header">
          <h1>Add and List Artists</h1>
        </header>
        <main>
          <AddArtist onAddArtist={addArtist} />
          <ArtistList artists={artists} />
        </main>
        <header className="App-header">
          <h1>Make a Payment</h1>
        </header>
        <main>
          <PaymentForm orderId={orderId} userId={userId} />
        </main>
      </div>
    </Router>
  );
}

export default App;
