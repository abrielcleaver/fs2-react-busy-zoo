import './App.css';
import { useState } from 'react';
// App(): sets up & renders initial state for `isOpen`, `unicornSize`, `lionSize`, and `animals`
// App(): `isOpen`, `unicornSize`, `lionSize`, and `animals all change on button clicks 
function App() {
  // const [isOpen, setIsOpen] = useState('open');
  const [unicornSize, setUnicornSize] = useState(10);
  const [lionSize, setLionSize] = useState(10);


  return (
    <div className="App">
      <div className="fight">
        <div className="animal">
          <img src="unicorn.png" width={10 * unicornSize} />
          {/* the width of the unicorn should be ten times whatever the unicorn size is in state */}
          <div className="buttons">
            {/* when you click this button, the unicorn's size in state should go up by one */}
            <button>The unicorn is growing</button>
            {/* when you click this button, the unicorn's size in state should go down by one */}
            <button>The unicorn is shrinking</button>
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
    </div>
  );
}

export default App;
