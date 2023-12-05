import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Role() {
  return (
    <TypeAnimation
      sequence={[
        'Software Engineer',
        1000, 
        'Content Creator',
        1000,
        'Life-Long Learner',
        1000,
        'Chess Player',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block', fontFamily: 'monospace', color: 'white'}}
      repeat={Infinity}
    />
  );
};