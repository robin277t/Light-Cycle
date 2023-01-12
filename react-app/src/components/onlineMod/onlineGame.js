import React, { useEffect, useState } from "react";
import './online.css'
const OnlineGame = ({bufer, controller}) => {
  console.log(bufer.data);
  const handleDirectionChange = (event) => {
    switch (event.key) {
      case "a":
        controller.wsChangeDirection("left");
        break;
      case "d":
        controller.wsChangeDirection("right");
        break;
      case "w":
        controller.wsChangeDirection("top");
        break;
      case "s":
        controller.wsChangeDirection("bottom");
        break
      default:
        break;
    }
  };


  return (
    <>
      <input
          className="grid-area"
          type="text"
          onKeyDown={handleDirectionChange}
          autoFocus
        />
      <div className="game-grid">
        <p>{bufer.data}</p>
        <p className="timer">
          {bufer.action === 'TIMER' ? bufer.data : 'Wait another player'}
        </p>
      </div>
      
    </>
  )


}

export default OnlineGame;