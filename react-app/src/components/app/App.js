// import './App.css';
import GridMaker from "../grid/GridMaker.js";

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
      <GridMaker key="someKey" />
    </div>
  );
}

export default App;
