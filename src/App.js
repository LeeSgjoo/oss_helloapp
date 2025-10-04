import logo from './logo.svg';
import './App.css';
import Hello from './hello.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Handong/oss/code/helloapp</code> : 23학번 이승주의 페이지입니다.
        </p>
        <Hello />
        <a href='https://hisnet.handong.edu'>히즈넷 링크</a>
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
