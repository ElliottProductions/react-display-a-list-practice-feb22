import React from 'react';
import PodcastItem from './PodcastItem';

export default function PodcastList({ podcasts }) {
  return (
    <div>
      {podcasts.map(pod => <PodcastItem key={pod.name} {...pod}/>)}
    </div>
  );
}
