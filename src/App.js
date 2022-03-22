import './App.css';
import { useState } from 'react';

const BLUE = 'blue';
const RED = 'red';

function App() {
  const [currentColor, setCurrentColor] = useState(RED)
  const newButtonColor = currentColor === BLUE ? RED : BLUE

  return (
    <div>
      <button style={{backgroundColor: currentColor}}
      onClick={() => setCurrentColor(newButtonColor)}>
        Change to {newButtonColor}
      </button>
    </div>
  );
}

export default App;
