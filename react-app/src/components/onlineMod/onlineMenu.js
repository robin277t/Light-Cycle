import React, { useEffect, useState } from "react";
import WSController from "./controller";
import OnlineGame from "./onlineGame";
import "./online.css";
const OnlineMenu = () => {
  const [bufer, setBufer] = useState("");
  const [gameOn, setGameOn] = useState(false);
  const [controller, setController] = useState(new WSController(setBufer));

  useEffect(() => {
    controller.wsConnect();
  }, []);

  useEffect(() => {
    if (bufer.action === "GRID") {
      setGameOn(true);
      console.log(bufer);
    }
  }, [bufer]);

  const quickGame = () => {
    if (controller != null) {
      controller.wsQuickGame();
      setGameOn(true)
    }
  }

  const createGame = () => {
    if (controller != null) {
      controller.wsNewGame();
      controller.wsGameGrid();
    }
  };

  return (
    <div className="menu-item">
      {gameOn ? (
        <>
          <OnlineGame bufer={bufer} controller = {controller}/>
        </>
      ) : (
        <div>
          <button type="button" className="button" onClick={quickGame}>
            Quick game
          </button>

          <button type="button" className="button" onClick={createGame}>
            Create Game
          </button>

          <button className="button" to={"/"}>
            Return
          </button>
        </div>
      )}
    </div>
  );
};

export default OnlineMenu;
