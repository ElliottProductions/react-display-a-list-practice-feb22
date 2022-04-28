import React from 'react';

export default function PodcastItem({ name, host, date }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{host}</p>
      <p>{date}</p>
    </div>
  );
}
