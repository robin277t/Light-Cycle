import "./App.css";
import "./index.scss";
import "../menus/StartMenu";
// import GameLoop from "../grid/GameLoop.js";
import GameOver from "../menus/GameOver.js";
import StartMenu from "../menus/StartMenu";

function App() {
  return (
    <div className="App">
      <header className="App-headerBoilerplate">
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=cFuRPMjYKhs&t=181s"
          target="_blank"
          rel="noopener noreferrer"
        >
          Light Cycle
        </a>
      </header>
      <StartMenu />
      {/* <GameOver message="Ignore above message-- click 'PLAY AGAIN' to start a new game" /> */}
    </div>
  );
}

export default App;
