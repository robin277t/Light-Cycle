const computerPlayer = (direction, nextPos, collisionArray, gridSide) => {
  let computerLookAhead = nextPos;
  let newDir = "";

  const choiceRandomMovements = () => {
    //Set direction to random pick of 1 of the 2 available options, using setLookAhead and
    //checkLookAhead and reverting to incoming if it's a collision.
    //Run this a certain percentage of the time (make a drivable var)
    //set newDir to this or don't
  };

  const setLookAhead = () => {
    //take direction and position and set the next cell position that will happen
    if (direction === "right") {
      computerLookAhead += 1;
    }
    if (direction === "left") {
      computerLookAhead -= 1;
    }
    if (direction === "top") {
      computerLookAhead += gridSide;
    }
    if (direction === "bottom") {
      computerLookAhead -= gridSide;
    }
  };

  const checkLookAhead = () => {
    if (collisionArray.includes(computerLookAhead)) {
      changeCycleDirIfNeeded();
    }
  };

  const changeCycleDirIfNeeded = () => {
    //if checkLookAhead is true, change dir to 1 of 2 available options (randomly selected), set those
    //2 options as variables, and then setLookAhead and checkLookAhead again, if also true, run them again
    //with the other direction option. If still getting a true then don't change dir, else set newDir
  };

  // prior to loop do the random choice change, and log this so can allow doing nothing
  // 0. set + on lookahead depending on direction
  // 1. check if look ahead is a problem, if it is not then don't do nothing
  // 2. if it is, do a random change on direction and repeat steps 0, 1, hopefully no longer a problem and set newDir
  // 3. if still a problem then switch to the only other availble direction, and repeat steps 1 and 2, hopefully no longer a problem and set newDir
  // 4. if still a problem again, then do nothing

  choiceRandomMovements();
  setLookAhead();
  checkLookAhead();
  return newDir;
};

export default computerPlayer;
