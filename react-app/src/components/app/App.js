// import './App.css';
import GridMaker from "../grid/GridMaker.js";
import GameLoop from "../grid/GameLoop.js";

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

      <GameLoop gridSide={60} trailLength={20} gameSpeed={20} players={{2}} />
    </div>
  );
}

export default App;
