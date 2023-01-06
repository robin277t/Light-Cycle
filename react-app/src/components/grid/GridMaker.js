import Cell from "./Cell.js";
import "./GridMaker.css";
import "./Cell.css";

const GridMaker = ({cycle, gridSide}) => {
  //gridSize is the variable to alter to edit overall grid size
  const gridSize = gridSide;

  const gridColumns = 'auto '.repeat(gridSize)
  const gridStyle = {gridTemplateColumns: gridColumns}
  const generationArray = [];
  for (let i = 1; i <= gridSize ** 2; i++) {
    generationArray.push(i);
  }

  return (
    <div className="grid" style={gridStyle}>
      {generationArray.map((value) => {
        let isWall = false;
        if (value <= gridSize || 
          ((value - 1) % gridSize === 0) ||
          (value % gridSize === 0) || 
          (value > (gridSize ** 2 - gridSize))) {
            isWall = true;
          }
        return <div className={isWall ? "cell wall" : "cell" } key={value} >
          <Cell wall={isWall} trail={0} id={value} cycle={cycle}/>
        </div>
      })}
    </div>
  );
};

export default GridMaker;

// {for 1 to 100 return block with Cell in}
// Change edge cells to be Wall = true
