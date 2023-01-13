import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  Modal,
  Pressable,
} from "react-native";
import GridMakerGame from "./GridMakerGame.js";
import GameOver from "../menus/GameOver.js";
import computerPlayer from "./ComputerPlayer";

const GameLoop = ({ gridSide, trailLength, gameSpeed, player1, player2 }) => {
  //player1 and player2 have values 'your_name' if a human player,  and 'computer' if either player is to be a bot

  const generateWall = (gridSide) => {
    let wallArray = [];
    for (let i = 0; i < gridSide ** 2; i++) {
      if (
        i < gridSide ||
        (i + 1) % gridSide === 0 ||
        i % gridSide === 0 ||
        i > gridSide ** 2 - gridSide
      ) {
        wallArray.push(i);
      }
    }
    return wallArray;
  };

  const generateRandomStartPosition = () => {
    let randNum = Math.ceil(Math.random() * gridSide) * gridSide;
    if (randNum < gridSide || randNum > gridSide ** 2 - gridSide) {
      return gridSide * 2;
    }
    return randNum;
  };

  const wall = generateWall(gridSide);
  const [cycle1, setCycle1] = useState(generateRandomStartPosition() + 1);
  const [cycle2, setCycle2] = useState(generateRandomStartPosition() - 2);
  const [direction1, setDirection1] = useState("right");
  const [direction2, setDirection2] = useState("left");
  const [trail1, setTrail1] = useState(Array(trailLength).fill(0));
  const [trail2, setTrail2] = useState(Array(trailLength).fill(0));
  const [cycle1LookAhead, setCycle1LookAhead] = useState(cycle1 + 1);
  const [cycle2LookAhead, setCycle2LookAhead] = useState(cycle2 - 1);
  const [gameStatus, setGameStatus] = useState("Ongoing");
  let collisionArray = [];

  const moveCycle = (playerNum, direction, position) => {
    let tempPos = position;
    switch (direction) {
      case "right":
        tempPos += 1;
        if (playerNum === 1) {
          setCycle1(tempPos);
          setCycle1LookAhead((tempPos += 1));
        } else if (playerNum === 2) {
          setCycle2(tempPos);
          setCycle2LookAhead((tempPos += 1));
        }
        break;
      case "left":
        tempPos -= 1;
        if (playerNum === 1) {
          setCycle1(tempPos);
          setCycle1LookAhead((tempPos -= 1));
        } else if (playerNum === 2) {
          setCycle2(tempPos);
          setCycle2LookAhead((tempPos -= 1));
        }
        break;
      case "top":
        tempPos -= gridSide;
        if (playerNum === 1) {
          setCycle1(tempPos);
          setCycle1LookAhead((tempPos -= gridSide));
        } else if (playerNum === 2) {
          setCycle2(tempPos);
          setCycle2LookAhead((tempPos -= gridSide));
        }
        break;
      case "bottom":
        tempPos += gridSide;
        if (playerNum === 1) {
          setCycle1(tempPos);
          setCycle1LookAhead((tempPos += gridSide));
        } else if (playerNum === 2) {
          setCycle2(tempPos);
          setCycle2LookAhead((tempPos += gridSide));
        }
        break;
      default:
    }
  };

  const checkCollision = () => {
    collisionArray = wall.concat(trail1, trail2);
    if (
      collisionArray.includes(cycle1LookAhead) &&
      collisionArray.includes(cycle2LookAhead)
    ) {
      setGameStatus("Both Players Died");
      return;
    }
    if (collisionArray.includes(cycle1LookAhead)) {
      setGameStatus(`${player2} won`);
      return;
    }
    if (collisionArray.includes(cycle2LookAhead)) {
      setGameStatus(`${player1} won`);
      return;
    }
  };

  const createCycleTrail = (playerNum, position, array) => {
    let newTrail = array;
    newTrail.shift();
    newTrail.push(position);
    if (playerNum === 1) {
      setTrail1(newTrail);
    } else if (playerNum === 2) {
      setTrail2(newTrail);
    }
  };

  useEffect(() => {
    if (gameStatus === "Ongoing") {
      const gameTick = setInterval(() => {
        checkCollision();
        createCycleTrail(1, cycle1, trail1);
        createCycleTrail(2, cycle2, trail2);
        moveCycle(1, direction1, cycle1);
        moveCycle(2, direction2, cycle2);

        if (player2 === "computer") {
          computerPlayer(direction2, cycle2LookAhead, collisionArray, gridSide);
        }
      }, gameSpeed);
      return () => clearInterval(gameTick);
    }
  }, [cycle1, cycle2, direction1, direction2]);

  if (gameStatus !== "Ongoing") {
    return <GameOver message={gameStatus} />;
  } else {
    return (
      <>
        <GridMakerGame
          key="someKey"
          cycle1={cycle1}
          cycle2={cycle2}
          gridSide={gridSide}
          trail1={trail1}
          trail2={trail2}
          wall={wall}
        />
        <View></View>
        <View style={styles.dpadtop}>
          <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
              if (direction1 !== "bottom") {
                setDirection1("top");
              }
            }}
          >
            <Image
              style={styles.img}
              source={require("../../img/up-filled.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.dpadmiddle}>
          <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
              if (direction1 !== "right") {
                setDirection1("left");
              }
            }}
          >
            <Image
              style={styles.img}
              source={require("../../img/left-filled.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
              if (direction1 !== "left") {
                setDirection1("right");
              }
            }}
          >
            <Image
              style={styles.img}
              source={require("../../img/right-filled.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.dpadbottom}>
          <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
              if (direction1 !== "top") {
                setDirection1("bottom");
              }
            }}
          >
            <Image
              style={styles.img}
              source={require("../../img/down_arrow.png")}
            />
          </TouchableOpacity>
        </View>
      </>
    );
  }
};
export default GameLoop;

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  buttonClose: {
    backgroundColor: "#D3D3D3",
  },

  img: {
    width: 30,
    height: 30,
  },

  dpadtop: {
    flex: 0,
    alignItems: "center",
    top: -10,
  },

  dpadmiddle: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    top: -10,
  },

  dpadbottom: {
    flex: 0,
    top: -10,
    alignItems: "center",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#AF4f41",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  buttonOpen: {
    backgroundColor: "#6273248",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
