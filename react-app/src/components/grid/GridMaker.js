import Cell from "./Cell.js";
import "./GridMaker.css";
import "./Cell.css";

const GridMaker = ({gridSide, cycle1, cycle2, trail1, trail2, wall}) => {
  
  const gridColumns = 'auto '.repeat(gridSide)
  const gridStyle = {gridTemplateColumns: gridColumns}
  const generationArray = [];
  for (let i = 0; i < gridSide ** 2; i++) {
    generationArray.push(i);
  }

  return (
    <div className="grid" style={gridStyle}>
      {generationArray.map((value) => {
        let isWall = wall.includes(value);
        let isHead1 = (cycle1 === value)
        let isHead2 = (cycle2 === value)
        let isTrail1 = trail1.includes(value);
        let isTrail2 = trail2.includes(value);


        return (
          <div
            className={
                isWall
                ? "cell wall"
                : isTrail1
                ? "cell trail1"
                : isTrail2
                ? "cell trail2"
                : isHead1
                ? "cell head1"
                : isHead2
                ? "cell head2"
                : "cell"
            }
            key={value}
          >
            <Cell/>
          </div>
        );
      })}
    </div>
  );
};

export default GridMaker;

