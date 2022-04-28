import React from 'react';
import PlanetItem from './PlanetItem.js';

export default function PlanetList({ planets }) {
  return (
    <div>
      {planets.map(planet => <PlanetItem key={ planet.index} planet={planet}/>)}
    </div>
  );
}

