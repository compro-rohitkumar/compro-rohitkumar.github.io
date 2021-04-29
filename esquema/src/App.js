import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  

  React.useEffect(() => {
    fetch("https://60895b1f8c8043001757e9d9.mockapi.io/esquema").then(data =>data.json()).then(response => {
      document.title = `${response.bundleDetails.title} | fooDLS`;
      console.log(response);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
