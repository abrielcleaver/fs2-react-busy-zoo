import React from 'react';

export default function AnimalEmoji(props) {
  return <div>
    {props.animal === 'cheetah' && '🐆'}
    {props.animal === 'elephant' && '🐘'}
    {props.animal === 'zebra' && '🦓'}
    {props.animal === 'gorilla' && '🦍'}
  </div>; 
}
