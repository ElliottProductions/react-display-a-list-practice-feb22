import React from 'react';

export default function PlanetItem({ planet }) {
  return (
    <div>
      <h2>{planet.name}</h2>
      <p>Radius: {planet.size} miles</p>
      <p>Documented Species:</p>
      <ul>{planet.species.map(specie => <li key={specie.index}>{specie}</li>)}</ul>
    </div>
  );
}

