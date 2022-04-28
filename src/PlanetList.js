import React from 'react';
import PlanetItem from './PlanetItem.js';

export default function PlanetList({ planets }) {
  return (
    <div>
      <p>Planets:</p>
      {planets.map(planet => <PlanetItem key={ planet.index} planet={planet}/>)}
    </div>
  );
}

