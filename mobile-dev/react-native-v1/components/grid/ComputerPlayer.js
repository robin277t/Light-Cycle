const computerPlayer = (direction, nextPos, collisionArray, gridSide) => {
  let computerLookAhead = nextPos;
  let newDir = direction;
  let turnOption1 = "top";
  let turnOption2 = "bottom";
  let tempDirChoice = "";

//   const choiceRandomMovements = () => {
//     //Set direction to random pick of 1 of the 2 available options, using setLookAhead and
//     //checkLookAhead and reverting to incoming if it's a collision.
//     //Run this a certain percentage of the time (make a drivable var)
//     //set newDir to this or don't
//     newDir = turnOption1;
//   };

  const setLookAhead = (directionToSet) => {
    if (direction === "right") {
      computerLookAhead += 2;
    }
    if (direction === "left") {
      computerLookAhead -= 2;
    }
    if (direction === "top") {
      computerLookAhead += gridSide *2;
      turnOption1 = "right";
      turnOption2 = "left";
    }
    if (direction === "bottom") {
      computerLookAhead -= gridSide*2;
      turnOption1 = "right";
      turnOption2 = "left";
    }
  };

  const checkLookAhead = () => {
    if (collisionArray.includes(computerLookAhead)) {
      changeCycleDirIfNeeded();
    }
      newDir = tempDirChoice
  };

  const changeCycleDirIfNeeded = () => {
    if (Math.random() < 0.5) {
      tempDirChoice = turnOption1;
    } else {
      tempDirChoice = turnOption2;
    }
    setLookAhead(tempDirChoice);
    checkLookAhead();
  };

//   choiceRandomMovements();
//   setLookAhead(direction);
//   checkLookAhead(computerLookAhead);
  return "right";
};

export default computerPlayer;
