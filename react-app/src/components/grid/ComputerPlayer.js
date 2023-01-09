// const computerPlayer = (direction, nextPos, collisionArray, gridSide) => {
//   let computerLookAhead = nextPos;
//   let newDir = direction;
//   let turnOption1 = "top";
//   let turnOption2 = "bottom";
//   let tempDirChoice = "";
//   // let choiceAttempts = 0;

//   const choiceRandomMovements = () => {
//     //Set direction to random pick of 1 of the 2 available options, using setLookAhead and
//     //checkLookAhead and reverting to incoming if it's a collision.
//     //Run this a certain percentage of the time (make a drivable var)
//     //set newDir to this or don't
//     newDir = turnOption1;
//   };

//   const setLookAhead = (directionToSet) => {
//     if (direction === "right") {
//       computerLookAhead += 1;
//     }
//     if (direction === "left") {
//       computerLookAhead -= 1;
//     }
//     if (direction === "top") {
//       computerLookAhead += gridSide;
//       turnOption1 = "right";
//       turnOption2 = "left";
//     }
//     if (direction === "bottom") {
//       computerLookAhead -= gridSide;
//       turnOption1 = "right";
//       turnOption2 = "left";
//     }
//   };

//   const checkLookAhead = () => {
//     if (collisionArray.includes(computerLookAhead)) {
//       changeCycleDirIfNeeded();
//     }
//   };

//   const changeCycleDirIfNeeded = () => {
//     if (Math.random() < 0.5) {
//       tempDirChoice = turnOption1;
//     } else {
//       tempDirChoice = turnOption2;
//     }
//     choiceAttempts += 1;
//     setLookAhead(tempDirChoice);
//     checkLookAhead();
//     // if (choiceAttempts < 3) {
//     //   newDir = tempDirChoice;
//     // }
//   };

//   choiceRandomMovements();
//   setLookAhead(direction);
//   checkLookAhead(computerLookAhead);
//   return newDir;
// };

// export default computerPlayer;
