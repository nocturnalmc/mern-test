import logo from './logo.svg';
import './App.css';

function App() {
  const reactEnv = process.env.REACT_APP_ENV;

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload. {reactEnv}
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React Yan nak trigger
        </a>
      </header>
    </div>
  );
}

export default App;
