import React from 'react';
import { BrowseRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/HomePage';
import GalleryList from './components/GalleryList';
import ArtworkDetails from '/components/ArtworkDetails';
import Cart from './components/Profile';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/galleries" component={GalleryList} />
      
    </Switch>
    </BrowserRouter>
  )
}