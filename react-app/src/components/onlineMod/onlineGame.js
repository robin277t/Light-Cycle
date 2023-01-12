import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './online.css'
const OnlineGame = ({bufer}) => {

 
  console.log(bufer.data);



  return (
    <>
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