import "./App.css";
import "./index.scss";
import "./StartMenu";
// import GameLoop from "../grid/GameLoop.js";
import GameOver from "../menus/GameOver.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=cFuRPMjYKhs&t=181s"
          target="_blank"
          rel="noopener noreferrer"
        >
          Light Cycle is gonna be AWESOME!!! Check out a video of it here...
        </a>
      </header>
      <GameOver message="Ignore above message-- click 'PLAY AGAIN' to start a new game" />
    </div>
  );
}

export default App;
