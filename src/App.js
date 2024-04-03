import logo from "./logo.svg";
import "./App.css";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>타이틀을 바꾸고 meta tag를 넣음</title>
        <meta property="og:title" content="og title" />
        <meta
          property="og:description"
          content="og description og description og description og description"
        />
        <meta
          property="og:image"
          content="https://source.unsplash.com/random/300×300"
        />
      </Helmet>
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
