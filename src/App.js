import { useState } from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {
const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1 onClick={() => setCount(count + 1)}>Clicks: {count}</h1>
        <p>
          <button style={{backgroundColor:"#008000"}} onClick={() => setCount(count + 1)}>Click</button>
          <br></br>
          <button onClick={() => setCount(0)}>Reset</button>
        </p>
        
      </header>
    </div>
  );
}

export default App;
