import React from 'react';
import { BrowseRouter, Route, Switch } from 'react-router-dom';
import ArtworkDetails from './components/ArtworkDetails';
import LabelContentButton from './components/DeactivateUserButton';
import DeactivateUserButton from './components/LabelContentButton';
import Notifications from './components/Notifications';

function App() {
  return (
    <BrowserRouter>
    {/* <Navbar /> */}
    <Switch>
      <Route path="/artworkdetails" component={ArtworkDetails} />
      <Route path="/deactivateuserbutton" component={DeactivateUserButton} />
      <Route path="/labelcontentbutton" component={LabelContentButton} />
      <Route path="/notifications" component={Notifications} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;