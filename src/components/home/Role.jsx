import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Role() {
  return (
    <TypeAnimation
      sequence={[
        'Software Engineer',
        800, 
        'Content Creator',
        800,
        'Chess Player',
        800,
        'Fight On Trojans!',
        800,
      ]}
      wrapper="span"
      speed={60}
      style={{ fontSize: '2em', display: 'inline-block', fontFamily: 'monospace', color: 'white'}}
      repeat={Infinity}
    />
  );
};