import React from 'react';
import AnimalEmoji from './AnimalEmoji';
{/* this component takes in a prop called animals, which is an array of animal strings */}
{/* map through the animals array in props */}
{/* for each item render an Animal component. Pass the vehicle string as a prop called vehicle to the Vehicle component.  */}
export default function Parade(props) {
  return <div>
    {props.animals.map((animal, i) => 
      <AnimalEmoji key={animal = i} animal={animal} />
    )}
  </div>;
}
