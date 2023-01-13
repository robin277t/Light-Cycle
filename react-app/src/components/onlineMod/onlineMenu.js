import React, { useEffect, useState } from "react";
import WSController from "./controller";
import OnlineGame from "./onlineGame";
import StartMenu from "../menus/StartMenu";

import "./online.css";
const OnlineMenu = () => {
  const [bufer, setBufer] = useState("");
  const [gameOn, setGameOn] = useState(false);
  const [controller, setController] = useState(new WSController(setBufer));
  const [isWait, setIsWait] = useState(false);
  const [isStartMenu, setIsStartMenu] = useState(false);
  const [gameResult, setGameResult] = useState(null)

  useEffect(() => {
    controller.wsConnect();
  }, []);

  useEffect(() => {
    if (bufer.action === "GRID") {
      setGameOn(true);
      setIsWait(false);
    } else if (bufer.action === 'WINNER') {
      setGameOn(false);
      setGameResult(bufer.data)
    }

  }, [bufer]);

  const quickGame = () => {
    if (controller != null) {
      controller.wsQuickGame();
      setGameOn(true);
    }
  };

  const createGame = () => {
    if (controller != null) {
      controller.wsNewGame();
      setIsWait(true);
      // controller.wsGameGrid();
    }
  };

  const startMenu = () => {
    setIsStartMenu(true);
  };

  if (isStartMenu === true) {
    return <StartMenu />;
  }

  return (
    <div className="menu-item">
      {gameOn ? (
        <>
          <OnlineGame bufer={bufer} controller={controller} isWait={isWait} />
        </>
      ) : isWait && bufer.action === "TIMER" ? (
        <>
        <p>{bufer.data}</p>
          
        </>
      ) : isWait ? (
        <>
          <p>Waiting for another user...</p>
        </>
      ) : (
        <div>
          {(gameResult !== null) && <p>{gameResult}</p>}
          <button type="button" className="button" onClick={quickGame}>
            Join game
          </button>

          <button type="button" className="button" onClick={createGame}>
            Create Game
          </button>

          <button type="button" className="button" onClick={() => startMenu()}>
            Return
          </button>
        </div>
      )}
    </div>
  );
};

export default OnlineMenu;
