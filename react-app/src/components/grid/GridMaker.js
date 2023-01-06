import Cell from "./Cell.js";
import "./GridMaker.css";
import "./Cell.css";

const GridMaker = ({cycle, gameState, gridSide}) => {

  const gridColumns = 'auto '.repeat(gridSide)
  const gridStyle = {gridTemplateColumns: gridColumns}
  // const generationArray = [];
  // for (let i = 1; i <= gridSide ** 2; i++) {
  //   generationArray.push(i);
  // }

  return (
    <div className="grid" style={gridStyle}>
      {gameState.map((value, index) => {
        return <div key={index} >
          <Cell trail={value} id={index} cycle={cycle}/>
        </div>
      })}
    </div>
  );
};

export default GridMaker;

// {for 1 to 100 return block with Cell in}
// Change edge cells to be Wall = true
