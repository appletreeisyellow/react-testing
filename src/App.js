import './App.css';
import { useState } from 'react';

const BLUE = 'blue';
const RED = 'red';

function App() {
  const [currentColor, setCurrentColor] = useState(RED)

  return (
    <div>
      <button style={{backgroundColor: currentColor}}
      onClick={() => setCurrentColor(currentColor === BLUE ? RED : BLUE)}>
        Change to {currentColor === BLUE ? RED : BLUE}
      </button>
    </div>
  );
}

export default App;
