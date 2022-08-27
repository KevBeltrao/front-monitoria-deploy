import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [name, setName] = useState('');

  useEffect(() => {
    const getName = async () => {
      const data = await fetch(`${process.env.REACT_APP_API}/name`);
      const { name } = await data.json();
      setName(name);
    }

    getName();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {name}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
