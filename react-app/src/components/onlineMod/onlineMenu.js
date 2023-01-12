import React, { useEffect, useState } from "react";
import WSController from "./controller";
import OnlineGame from "./onlineGame";

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

  const createGame = () => {
    if (controller != null) {
      controller.wsNewGame();
      controller.wsGameGrid();
    }
  };

  return (
    <div className="container">
      {gameOn ? (
        <>
          <OnlineGame bufer={bufer} />
        </>
      ) : (
        <div>
          <h1>This is online menu</h1>
          <button type="button" className="button" onClick={setGameOn(true)}>
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
