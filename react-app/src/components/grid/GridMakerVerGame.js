import Cell from "./Cell.js";
import "./GridMaker.css";
// import "./Cell.css";
import { GameEngine } from "react-game-engine";
import { Dimensions, Component, useEffect, useRef, useState } from "react";

const GridMaker = ({ gridSide, cycle1, cycle2, trail1, trail2, wall }) => {
  const gridColumns = "auto ".repeat(gridSide);
  const gridStyle = { gridTemplateColumns: gridColumns };
  const generationArray = [];
  const backingGrid = useRef(null);

  // const MAX_WIDTH = Dimensions.get("screen").width;
  // const MAX_HEIGHT = Dimensions.get("screen").height; //This might only be mobile, or import dimensions?
  const gridPixelWidth = 700;
  const cellSize = gridPixelWidth / gridSide;
  const gridSize = gridSide * cellSize;

  for (let i = 0; i < gridSide ** 2; i++) {
    generationArray.push(i);
  }

  const coordConverter = (loc) => {
    let tempX = 0;
    let tempY = 0;
    if (loc < gridSide) {
      tempX = loc;
    } else {
      tempX = loc % gridSide;
      tempY = (loc - tempX) / gridSide;
    }
    return { value: loc, x: tempX, y: tempY };
  };

  const coordArrayConverter = (array) => {
    return array.map((value) => {
      let tempX = 0;
      let tempY = 0;
      if (value < gridSide) {
        tempX = value;
      } else {
        tempX = value % gridSide;
        tempY = (value - tempX) / gridSide;
      }
      return { value: value, x: tempX, y: tempY };
    });
  };

  return (
    <>
      <GameEngine
        ref={backingGrid}
        style={{
          width: gridSize,
          height: gridSize,
          flex: null,
          backgroundColor: "grey",
          position: "relative",
          top: 0,
        }}
        key={"backingGrid"}
      >
        {coordArrayConverter(wall).map((cell) => {
          return (
            <div
              style={{
                width: cellSize,
                height: cellSize,
                backgroundColor: "brown",
                position: "absolute",
                left: cell.x * cellSize,
                top: cell.y * cellSize,
              }}
              key={cell.value}
            ></div>
          );
        })}
        {coordArrayConverter(trail1).map((cell) => {
          if (cell.value > 0) {
            return (
              <div
                style={{
                  width: cellSize,
                  height: cellSize,
                  backgroundColor: "pink",
                  position: "absolute",
                  left: cell.x * cellSize,
                  top: cell.y * cellSize,
                }}
                key={cell.value}
              ></div>
            );
          }
        })}
        {coordArrayConverter(trail2).map((cell) => {
          if (cell.value > 0) {
            return (
              <div
                style={{
                  width: cellSize,
                  height: cellSize,
                  backgroundColor: "yellow",
                  position: "absolute",
                  left: cell.x * cellSize,
                  top: cell.y * cellSize,
                }}
                key={cell.value}
              ></div>
            );
          }
        })}
        <div
          style={{
            width: cellSize,
            height: cellSize,
            backgroundColor: "red",
            position: "absolute",
            left: coordConverter(cycle1).x * cellSize,
            top: coordConverter(cycle1).y * cellSize,
          }}
          key={"cycle1"}
        ></div>
        <div
          style={{
            width: cellSize,
            height: cellSize,
            backgroundColor: "green",
            position: "absolute",
            left: coordConverter(cycle2).x * cellSize,
            top: coordConverter(cycle2).y * cellSize,
          }}
          key={"cycle2"}
        ></div>
        ); })}
        {/* <div className="grid" style={gridStyle}>
          {generationArray.map((value) => {
            let isWall = wall.includes(value);
            let isHead1 = cycle1 === value;
            let isHead2 = cycle2 === value;
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
                <Cell />
              </div>
            );
          })}
        </div> */}
      </GameEngine>
    </>
  );
};

export default GridMaker;
