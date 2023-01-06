import React, {useEffect, useState} from 'react';
import Cell from "./Cell.js";
import GridMaker from "./GridMaker.js";
import "./GameLoop.css"

const GameLoop = ({gridSide}) => {
  const [cycle, setCycle] = useState(12);
  const [direction, setDirection] = useState('right')

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
          setCycle((prev) => prev + 1)
          break
        case 'left':
          setCycle((prev) => prev - 1)
          break
        case 'top':
          setCycle((prev) => prev - gridSide)
          break
        case 'bottom':
          setCycle((prev) => prev + gridSide)
          break
        default:;
      }
    }, 500);
    console.log(direction);
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
    <GridMaker key="someKey" cycle={cycle} gridSide = {gridSide}/>
    </>
  )
}
export default GameLoop;