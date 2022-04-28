import React from 'react';
import RealMoviesItem from './RealMoviesItem';

export default function RealMoviesList({ realmovies }) {
  return (
    <div>
      {realmovies.map(movie => <RealMoviesItem key={realmovies.index} movie={movie}/>)}
    </div>
  );
}

