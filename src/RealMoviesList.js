import React from 'react';
import RealMoviesItem from './RealMoviesItem';

export default function RealMoviesList({ realmovies }) {
  return (
    <div>
      <p>Definitely Real Movies:</p>
      {realmovies.map(movie => <RealMoviesItem key={realmovies.index} movie={movie}/>)}
    </div>
  );
}

