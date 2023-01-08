import "./GameOver.css";
import React, { useState } from "react";
import GameLoop from "../grid/GameLoop.js";

const GameOver = ({ message }) => {
  const [isGameOver, setIsGameOver] = useState(false);

  const setRestartGame = () => {
    setIsGameOver(true);
  };

  if (isGameOver) {
    return (
      <GameLoop
        gridSide={60}
        trailLength={60}
        gameSpeed={70}
        player1={"yes"}
        player2={"computer"}
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
