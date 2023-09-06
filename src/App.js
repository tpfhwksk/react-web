import logo from './logo.svg';
import ReactGA from 'react-ga4';
import './App.css';

function App() {
  
  ReactGA.initialize("G-6JMSZQX2KZ");
  ReactGA.send("pageview")

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
