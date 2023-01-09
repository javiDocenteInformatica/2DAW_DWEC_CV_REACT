import logo from "./assets/images/logo.svg";
import "./assets/css/App.css";

// Importar componentes
import NavBar from "./components/NavBar.js";

function App() {
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
      <section className="componentes">
        <NavBar />
      </section>
    </div>
  );
}

export default App;
