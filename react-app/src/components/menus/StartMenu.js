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
        </div>
    );
  } else if (menuSelect == "online") {
    return (
      <>
        <OnlineMenu />
      </>
    );
  } else if (menuSelect === "offline") {
    return (
      <GameLoop
        gridSide={50}
        trailLength={100}
        gameSpeed={40}
        player1={"player1"}
        player2={"computer"}
      />
    );
  } else if (menuSelect === "multiplayer"){
    return (
      <GameLoop
        gridSide={50}
        trailLength={100}
        gameSpeed={40}
        player1={"player1"}
        player2={"player2"}
      />
    );
  }
};

export default StartMenu;
