import "./Cell.css";

const Cell = ({ id, wall, trail, cycle}) => {
  // if (cycle === id){
  //   trail = 10;
  // }

  return (
    <>
    <div className={ cycle === id ? "head" : ""} >{id}</div>
    {/* {console.log(id) } */}
  </>
  )
};

export default Cell;

// Cell.ID
// Cell.Wall
// Cell.Trail
