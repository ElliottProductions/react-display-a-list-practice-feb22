import React from 'react';
import SayingsItem from './SayingsItem.js';

export default function SayingsList({ sayings }) {
  return (
    <div>
      {sayings.map(saying => <SayingsItem key={ saying.index } prop={saying}/>)}
    </div>
  );
}

