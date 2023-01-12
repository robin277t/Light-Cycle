import React, { useState } from "react";
// import "../app/index.scss";
// import "../app/App.css";
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
          <button type="button" classname="button" onClick={() => selectMenu('offline')}>
              Player VS Ai
            </button>

            <button type="button" classname="button" onClick={() => selectMenu('multiplayer')}>
              Player VS Player
            </button>

            <button type="button" classname="button" onClick={() => selectMenu('online')}>
              Online
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
  }else if(menuSelect == 'online'){
    return(<div>
    <h1>This is online menu</h1>
    <button type="button" classname="button" onClick={() => selectMenu('host_game')}>
              Host Game
            </button>
    <button type="button" classname="button" onClick={() => selectMenu('join_game')}>
               Join Game
            </button>
    <button type="button" classname="button" onClick={() => selectMenu('none')}>
               Return
            </button>
    </div>);

   
  } else if(menuSelect == 'host_game'){
    return(<div>
    <h1>This is HOST menu</h1>
    <button type="button" classname="button" onClick={() => selectMenu('Start_online_game')}>
              Start Game
            </button>

    </div>);

    
   
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