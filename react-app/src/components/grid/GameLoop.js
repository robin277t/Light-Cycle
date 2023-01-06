import React, {useEffect, useState} from 'react';
import Cell from "./Cell.js";
import GridMaker from "./GridMaker.js";
import "./GameLoop.css"

const GameLoop = ({gridSide}) => {
  const [cycle, setCycle] = useState(12);
  const [trail, setTrail] = useState(Array(10).fill(0))
  const [direction, setDirection] = useState('right')

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
        setDirection('right');
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      switch (direction) {
        case 'right':
          createTrail(cycle);
          setCycle((prev) => prev + 1)
          break
        case 'left':
          createTrail(cycle);
          setCycle((prev) => prev - 1)
          break
        case 'top':
          createTrail(cycle);
          setCycle((prev) => prev - gridSide)
          break
        case 'bottom':
          createTrail(cycle);
          setCycle((prev) => prev + gridSide)
          break
        default:;
      }
    }, 100);
    console.log(direction);
    console.log(trail);
    if (cycle > gridSide**2) {
      setCycle(cycle % gridSide ** 2);
    } else if (cycle < 1) {
      setCycle(1);
    }
    return () => clearInterval(interval);
  }, [cycle, direction]);


  return (
    <>
    <input className="grid-area" type="text" onKeyDown={handleDirectionChange}/>
    <GridMaker key="someKey" cycle={cycle} gridSide = {gridSide} trail = {trail}/>
    </>
  )
}
export default GameLoop;