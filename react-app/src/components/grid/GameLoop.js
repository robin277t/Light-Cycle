import React, {useEffect, useState} from 'react';
import GridMaker from "./GridMaker.js";
import "./GameLoop.css"

const GameLoop = ({gridSide, trailLength, gameSpeed}) => {
  const [cycle1, setCycle] = useState(12);
  const [trail, setTrail] = useState(Array(trailLength).fill(0))
  const [direction, setDirection] = useState('right')

  //make game adjustable for required parameters
  //make random start positions for cycle1
  //make whole game multiplayer easily, with auto key bindings for player 2,3,4 
  //make key bindings a JSobj or make switch function smaller
  //and a checker for player type(computer player)
  //build a computer player option

  const createTrail = (position) => {
    let newTrail = trail;
    newTrail.shift();
    newTrail.push(position);
    setTrail(newTrail)
  }

  const handleDirectionChange = (event) =>{
    switch (event.key) {
      case 'a' :
        setDirection('left')
      break;
      case 'd' :
        setDirection('right');
        break;
      case 'w' :
        setDirection('top');
        break;
      case 's' :
        setDirection('bottom');
        break;
      default:
        // setDirection('right');
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      switch (direction) {
        case 'right':
          createTrail(cycle1);
          setCycle((prev) => prev + 1)
          //collisionChecker function here
          break
        case 'left':
          createTrail(cycle1);
          setCycle((prev) => prev - 1)
          break
        case 'top':
          createTrail(cycle1);
          setCycle((prev) => prev - gridSide)
          break
        case 'bottom':
          createTrail(cycle1);
          setCycle((prev) => prev + gridSide)
          break
        default:;
      }
    }, gameSpeed);
    if (cycle1 > gridSide**2) {
      setCycle(cycle1 % gridSide ** 2);
    } else if (cycle1 < 1) {
      setCycle(1);
    }
    return () => clearInterval(interval);
  }, [cycle1, direction]);


  return (
    <>
    <input className="grid-area" type="text" onKeyDown={handleDirectionChange}/>
    <GridMaker key="someKey" cycle1={cycle1} gridSide = {gridSide} trail = {trail}/>
    </>
  )
}
export default GameLoop;