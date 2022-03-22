import './App.css';
import { useState } from 'react';

const MediumVioletRed = 'MediumVioletRed';
const MidnightBlue = 'MidnightBlue';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

function App() {
  const [currentColor, setCurrentColor] = useState(MediumVioletRed)
  const [disabled, setDisabled] = useState(false)
  const newButtonColor = currentColor === MidnightBlue ? MediumVioletRed : MidnightBlue
  const newButtonColorName = replaceCamelWithSpaces(newButtonColor)

  return (
    <div>
      <button
        style={{backgroundColor: disabled ? 'gray' : currentColor}}
        onClick={() => setCurrentColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {newButtonColorName}
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
