import React, { useState } from "react";
import "../app/index.scss";
import "../app/App.css";
import GameLoop from "../grid/GameLoop.js";

const StartMenu = () => {
  const [menuSelect, setMenuSelect] = useState('none');

  const selectMenu = (gamemode) => {
    setMenuSelect(gamemode);
  };

  if (menuSelect === 'none') {
    return (
      <div classname="menu-container">
        <h2 className="menu-item">
          <body>
            <button type="button" className="button" onClick={() => selectMenu('multiplayer')}>
              Multiplayer
            </button>
            {/* <button>
            <a href='/Multiplayer'>Multiplayer</a>
          </button>
          <button>
            <a href='/Options'>Options</a>
          </button>
          <button>
            <a href='/Leaderboard'>Leaderboard</a>
          </button> */}
          </body>
        </h2>
      </div>
    );
  } else {
    return (
      <GameLoop
        gridSide={50}
        trailLength={100}
        gameSpeed={30}
        player1={"player1"}
        player2={"player2"}
      />
    );
  }
};

export default StartMenu;