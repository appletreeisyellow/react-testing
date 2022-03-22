import './App.css';
import { useState } from 'react';

const BLUE = 'blue';
const RED = 'red';

function App() {
  const [currentColor, setCurrentColor] = useState(RED)
  const [disabled, setDisabled] = useState(false)
  const newButtonColor = currentColor === BLUE ? RED : BLUE

  return (
    <div>
      <button
        style={{backgroundColor: currentColor}}
        onClick={() => setCurrentColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
