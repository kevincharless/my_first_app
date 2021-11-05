import logo from "./cc-uib-08.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>How to Git ?</p>
        <a
          className="App-link"
          href="http://cc.uib.ac.id/"
          target="_blank"
          rel="noopener noreferrer"
        >
          http://cc.uib.ac.id/
        </a>
      </header>
    </div>
  );
}

export default App;
