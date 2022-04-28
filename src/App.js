import React from 'react';
import logo from './logo.svg';
import './App.css';
// import your arrays here
import { podcasts } from './podcasts.js';
import PodcastList from './PodcastList.js';


function App() {
  return (
    <div className="App">
      <PodcastList podcasts={podcasts}/>
    </div>
  );
}

export default App;
