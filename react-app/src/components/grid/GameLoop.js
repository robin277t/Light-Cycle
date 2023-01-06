import React, {useEffect, useState} from 'react';
import Cell from "./Cell.js";
import GridMaker from "./GridMaker.js";



const GameLoop = () => {
  const [cycle, setCycle] = useState(12);
  useEffect(() => {
    const interval = setInterval(() => {
        setCycle((prev) => prev + 1)
    }, 500);
    console.log(cycle);
    if (cycle > 100) {setCycle(1);}
    return () => clearInterval(interval);
  }, [cycle]);
  return (
    <>
    <GridMaker key="someKey" cycle={cycle}/>
    </>
  )
}
export default GameLoop;