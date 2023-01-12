import React, { useState } from "react";

import "../app/App.css";

import GameLoop from "../grid/GameLoop.js";
import OnlineMenu from "../onlineMod/onlineMenu";

const StartMenu = () => {
  const [menuSelect, setMenuSelect] = useState("none");

  const selectMenu = (gamemode) => {
    setMenuSelect(gamemode);
  };

  if (menuSelect === "none") {
    return (
      <div className="menu-container">
        <div className="menu-item">
            <button
              type="button"
              className="button"
              onClick={() => selectMenu("offline")}
            >
              Player VS Ai
            </button>

            <button
              type="button"
              className="button"
              onClick={() => selectMenu("multiplayer")}
            >
              Player VS Player
            </button>

            <button
              type="button"
              className="button"
              onClick={() => selectMenu("online")}
            >
              Online
            </button>
            {/* <button>
            <a href='/Multiplayer'>Multiplayer</a>
          </button>

          <button
            type="button"
            className="button"
            onClick={() => selectMenu("online")}
          >
            Online
          </button>
          <button>
            <a href='/Leaderboard'>Leaderboard</a>
          </button> */}
        </div>
      </div>
    );
  } else if (menuSelect == "online") {
    return (
      <>
        <OnlineMenu />
      </>
    );
  } else if (menuSelect == "host_game") {
    return (
      <>
        <h1>This is HOST menu</h1>
        <button
          type="button"
          className="button"
          onClick={() => selectMenu("Start_online_game")}
        >
          Start Game
        </button>
      </>
    );
  } else {
    return (
      <GameLoop
        gridSide={50}
        trailLength={100}
        gameSpeed={200}
        player1={"player1"}
        player2={"player2"}
      />
    );
  }
};

export default StartMenu;
