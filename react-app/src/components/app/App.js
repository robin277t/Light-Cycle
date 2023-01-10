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
          href="https://www.youtube.com/watch?v=cFuRPMjYKhs&t=23s"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcomet to Light Cycle is AWESOME!!! Check out a video of it here... note not actual gameplay
        </a>
      </header>
      <StartMenu />
      {/* <GameOver message="Ignore above message-- click 'PLAY AGAIN' to start a new game" /> */}
    </div>
  );
}

export default App;
