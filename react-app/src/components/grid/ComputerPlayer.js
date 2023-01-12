import React, { useState } from "react";

export default function ComputerPlayer(
  direction,
  nextPos,
  collisionArray,
  gridSide
) {
  let computerLookAhead = nextPos;
  let newDir = direction;
  let turnOption1 = "top";
  let turnOption2 = "bottom";
  let tempDirChoice = "";
  let choiceAttempts = 0;
  const lookAheadValue = 1;

  const choiceRandomMovements = () => {
    //Set direction to random pick of 1 of the 2 available options, using setLookAhead and
    //checkLookAhead and reverting to incoming if it's a collision.
    //Run this a certain percentage of the time (make a drivable var)
    //set newDir to this or don't
    // newDir = turnOption1;
  };

  const setLookAhead = (directionToSet) => {
    console.log("set look ahead being called");
    console.log(directionToSet);

    if (directionToSet === "right") {
      computerLookAhead += lookAheadValue;
    }
    if (directionToSet === "left") {
      computerLookAhead -= lookAheadValue;
    }
    if (directionToSet === "top") {
      computerLookAhead += gridSide * lookAheadValue;
      turnOption1 = "right";
      turnOption2 = "left";
    }
    if (directionToSet === "bottom") {
      computerLookAhead -= gridSide * lookAheadValue;
      turnOption1 = "right";
      turnOption2 = "left";
    }
  };

  const checkLookAhead = (computerLookAhead) => {
    // console.log("checkLookAhead being called");

    if (collisionArray.includes(computerLookAhead)) {
      changeCycleDirIfNeeded();
    }
  };

  const changeCycleDirIfNeeded = () => {
    if (choiceAttempts === 0) {
      if (Math.random() < 0.5) {
        tempDirChoice = turnOption1;
      } else {
        tempDirChoice = turnOption2;
      }
        newDir = tempDirChoice

        console.log(`changeCycleDirIfNeeded called ${choiceAttempts}x times `);
        console.log(newDir);
        
    }
    // if (choiceAttempts === 1) {
    //   if (tempDirChoice === turnOption1) {
    //     tempDirChoice = turnOption2;
    //   } else {
    //     tempDirChoice = turnOption1;
    //   }
    // }
    // console.log(choiceAttempts);

    // choiceAttempts += 1;
    //   console.log(choiceAttempts);
    //   console.log(turnOption1);
      

    // // if (choiceAttempts < 3) {
    // //   setLookAhead(tempDirChoice);
    // //   checkLookAhead();
    // //   newDir = tempDirChoice;
    // // } else if (choiceAttempts === 3) {
    // //   newDir = direction;
    // // }
  };

  // choiceRandomMovements();
  setLookAhead(direction);
  checkLookAhead(computerLookAhead);
  return newDir;
}
