import React from 'react';

export default function RealMoviesItem({ movie }) {
  return (
    <div>
      <h3>{movie.title}</h3>
      <p>Starring: {movie.stars.lead}, {movie.stars.supporting}</p>
      <p>Rating: {movie.rating}</p>
    </div>
  );
}

