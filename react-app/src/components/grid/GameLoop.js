import React, {useState} from 'react';
import Cell from "./Cell.js";
import GridMaker from "./GridMaker.js";



const GameLoop = () => {
  const [cycle, setCycle] = useState(12);
  // setInterval((cycle) => {
  //   let temp = cycle;
  //   setCycle();
  //   console.log(cycle);
  // },1000)
  return (
    <>
    <GridMaker key="someKey" cycle={cycle}/>
    {setInterval(() => {setCycle(cycle + 1)}, 400)}
    </>
  )
}
export default GameLoop;