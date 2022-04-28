import React from 'react';
import './App.css';
// import your arrays here
import { podcasts } from './podcasts.js';
import PodcastList from './PodcastList.js';
import { sayings } from './sayings-data.js';
import SayingsList from './SayingsList.js';
import { realmovies } from './RealMovies.js';
import RealMoviesList from './RealMoviesList.js';
import { planets } from './planets-data.js';
import PlanetsList from './PlanetList';


function App() {
  return (
    <div className="App">
      <PodcastList podcasts={podcasts}/>
      <SayingsList sayings={sayings}/>
      <RealMoviesList realmovies={realmovies}/>
      <PlanetsList planets={planets}/>
    </div>
  );
}

export default App;
