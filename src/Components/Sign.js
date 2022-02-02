import React from 'react';

export default function Sign(props) {
  return <div>
    {props.isOpen ? <p>Open</p> : <p>Close</p>}
  </div>;
}
