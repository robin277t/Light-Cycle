import "./GameOver.css";
import React, { useState } from "react";
import GameLoop from "../grid/GameLoop.js";
import StartMenu from "./StartMenu"

const GameOver = ({ message }) => {
  const [gameRestart, setIsGameRestart] = useState('no');

  const setRestartGame = (status) => {
    setIsGameRestart(status)
    ;
  };

  if (gameRestart === 'yes') {
    return (
      <GameLoop
        gridSide={50}
        trailLength={100}
        gameSpeed={2000}
        player1={"player1"}
        player2={"player2"}
      />
    );
  } else if (gameRestart === 'no'){
    return (
      <div className="GameOver">
        <header className="GameOver-header">
          Game Over
          <p>{message}</p>
          <button className= "Button-1" onClick={() => setRestartGame('yes')}>PLAY AGAIN</button>
          <button className= "Button-1" onClick={() => setRestartGame('startMenu')}>RETURN TO MAIN MENU</button>
        </header>
      </div>
    );
  } else if (gameRestart === 'startMenu'){
    return (
      <StartMenu />
    );
  }
};

export default GameOver;
