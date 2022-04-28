import React from 'react';
import PodcastItem from './PodcastItem';

export default function PodcastList({ podcasts }) {
  return (
    <div>
      <p>Podcasts:</p>
      {podcasts.map(pod => <PodcastItem key={pod.name} {...pod}/>)}
    </div>
  );
}
