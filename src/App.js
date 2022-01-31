import './App.css';
import { useState } from 'react';
import Parade from './Components/Parade';


// App(): sets up & renders initial state for `isOpen`, `unicornSize`, `lionSize`, and `animals`
// App(): `isOpen`, `unicornSize`, `lionSize`, and `animals all change on button clicks 
function App() {
  // const [isOpen, setIsOpen] = useState('open');
  const [unicornSize, setUnicornSize] = useState(10);
  const [lionSize, setLionSize] = useState(10);
  const [parade, setParade] = useState(['cheetah', 'elephant', 'zebra', 'gorilla']);


  return (
    <div className="App">
      <div className="fight">
        <div className="animal">
          <img src="unicorn.png" width={10 * unicornSize} />
          {/* the width of the unicorn should be ten times whatever the unicorn size is in state */}
          <div className="buttons">
            {/* when you click this button, the unicorn's size in state should go up by one */}
            <button onClick={() => setUnicornSize(unicornSize + 1)}>The unicorn is growing</button>
            {/* when you click this button, the unicorn's size in state should go down by one */}
            <button onClick={() => setUnicornSize(unicornSize - 1)}>The unicorn is shrinking</button>
          </div>
          <div className="animal">
            <img src="lion.png" width={10 * lionSize} />
            {/* the width of the lion should be ten times whatever the lion size is in state */}
            <div className="buttons">
              {/* when you click this button, the lion's size in state should go up by one */}
              <button onClick={() => setLionSize(lionSize + 1)}>The lion is growing</button>
              {/* when you click this button, the lion's size in state should go down by one */}
              <button onClick={() => setLionSize(lionSize - 1)}>The lion is shrinking</button>
            </div>
          </div>
        </div>
      </div>
      {/* 
      the Parade component takes in one prop: animals
      this prop should be an array of strings like ['lion', 'elephant', 'zebra', 'gorilla'].
      */}
      <Parade animals={parade} />
      <div className='buttons'>
        {/* On click, you should set the parade in state to be a copy of the same array that's already in state, but immutably add an animal to the end > 'cheetah' */}
        <button onClick={() => setParade([...parade, 'cheetah'])}>Cheetah</button>
        <button onClick={() => setParade([...parade, 'elephant'])}>Elephant</button>
        <button onClick={() => setParade([...parade, 'zebra'])}>Zebra</button>
        <button onClick={() => setParade([...parade, 'gorilla'])}>Gorilla</button>
      </div>
    </div>
  );
}

export default App;
