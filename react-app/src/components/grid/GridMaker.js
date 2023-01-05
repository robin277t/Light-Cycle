import Cell from "./Cell.js";
import "./GridMaker.css";
import "./Cell.css";

const GridMaker = () => {
  //gridSize is the variable to alter to edit overall grid size
  const gridSize = 25;

  const gridColumns = 'auto '.repeat(gridSize)
  const gridStyle = {gridTemplateColumns: gridColumns}
  const generationArray = [];
  for (let i = 1; i <= gridSize ** 2; i++) {
    generationArray.push(i);
  }

  return (
    <div className="grid" style={gridStyle}>
      {generationArray.map((value) => {
        return <div className="cell">
          <Cell className="cell" key={value} wall={false} trail={0} id={value} />
        </div>
      })}
    </div>
  );
};

export default GridMaker;

// {for 1 to 100 return block with Cell in}
// Change edge cells to be Wall = true
