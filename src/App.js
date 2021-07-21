import logo from './logo.svg';
import './App.css';
import { count, length } from './number';

const day=14;
const dayOfWeek='Tuesday';
const currentYear=2021;
const yearOfBirth=1989;
let flag=true;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div style={{textAlign: 'left'}}>
        <p>Произвндение чисел = {count*length}</p>
        </div>

        
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
