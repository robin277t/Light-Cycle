import "./GameOver.css";
import React, { useState } from "react";
import GameLoop from "../grid/GameLoop.js";

const GameOver = ({ message }) => {
  const [isGameRestart, setIsGameRestart] = useState(false);

  const setRestartGame = () => {
    setIsGameRestart(true);
  };

  if (isGameRestart) {
    return (
      <GameLoop
        gridSide={50}
        trailLength={100}
        gameSpeed={30}
        player1={"player1"}
        player2={"player2"}
      />
    );
  } else {
    return (
      <div className="GameOver">
        <header className="GameOver-header">
          Game Over
          <p>{message}</p>
          <button className= "Button-1" onClick={setRestartGame}>PLAY AGAIN</button>
        </header>
      </div>
    );
  }
};

export default GameOver;
