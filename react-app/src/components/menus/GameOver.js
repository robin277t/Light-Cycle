import "./GameOver.css";
import React, { useState } from "react";
import GameLoop from "../grid/GameLoop.js";
import StartMenu from "./StartMenu"

const GameOver = ({ message, player2 }) => {
  const [gameRestart, setIsGameRestart] = useState('no');

  const setRestartGame = (status) => {
    setIsGameRestart(status)
    ;
  };

  if (gameRestart === 'yes' && player2 !== "computer") {
    return (
      <GameLoop
        gridSide={50}
        trailLength={100}
        gameSpeed={40}
        player1={"player1"}
        player2={"player2"}
      />
    );
  }  else if (gameRestart === "yes" && player2 === "computer") {
    return (
      <GameLoop
        gridSide={50}
        trailLength={100}
        gameSpeed={40}
        player1={"player1"}
        player2={"computer"}
      />
    );
  } else if (gameRestart === "no") {
    return (
      <div className="menu-item">
        <header className="GameOver-header">
          Game Over
          <p>{message}</p>
        </header>
        <button className="button" onClick={() => setRestartGame("yes")}>
          PLAY AGAIN
        </button>
        <button className="button" onClick={() => setRestartGame("startMenu")}>
          RETURN TO MAIN MENU
        </button>
      </div>
    );
  } else if (gameRestart === "startMenu") {
    return <StartMenu />;
  }
};

export default GameOver;
