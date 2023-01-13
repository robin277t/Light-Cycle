import React, { useEffect, useState, useRef } from "react";
import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  View,
  Image,
  Alert,
  Modal,
  Pressable,
  Button,
} from "react-native";
import GameOver from "../menus/GameOver";
import { GameEngine } from "react-native-game-engine";

const OnlineGame = ({ bufer, controller, isWait }) => {
  const gridSideClone = Math.sqrt(bufer.data.length);
  // const gridColumns = "auto ".repeat(gridSideClone);
  // const gridStyle = { gridTemplateColumns: gridColumns };

  const MAX_WIDTH = Dimensions.get("screen").width;
  const gridPixelWidth = MAX_WIDTH;
  const cellSize = gridPixelWidth / gridSideClone;

  const backingGrid = useRef(null);
  const gridSize = gridSideClone * cellSize;

  const coordArrayConverter = (array) => {
    return array.map((value, index) => {
      let tempX = 0;
      let tempY = 0;
      let color = "orange";
      if (index < gridSideClone) {
        tempX = index;
      } else {
        tempX = index % gridSideClone;
        tempY = (index - tempX) / gridSideClone;
      }
      if (value === "*") {
        color = "#F39C12";
      } else if (value === 1) {
        color = "red";
      } else if (value === 2) {
        color = "blue";
      } else if (value === 8) {
        color = "#479FF8";
      } else if (value === 9) {
        color = "#A62B1";
      }
      return { value: value, x: tempX, y: tempY, color: color };
    });
  };

  // console.log(bufer.data);

  const handleDirectionChange = (event) => {
    switch (event.key) {
      case "a":
        controller.wsChangeDirection("left");
        break;
      case "d":
        controller.wsChangeDirection("right");
        break;
      case "w":
        controller.wsChangeDirection("top");
        break;
      case "s":
        controller.wsChangeDirection("bottom");
        break;
      default:
        break;
    }
  };

  if (bufer.action === "TIMER") {
    return (
      <View className="timer">
        {bufer.action === "TIMER" || isWait ? (
          <Text>Playing</Text>
        ) : (
          <Text>Waiting for another player</Text>
        )}
      </View>
    );
  } else if (bufer.action === "GRID") {
    return (
      <View>
        <GameEngine
          ref={backingGrid}
          style={{
            width: gridSize,
            height: gridSize,
            flex: null,
            backgroundColor: "#34495E",
            position: "relative",
            top: 0,
          }}
          key={"backingGrid"}
        >
          {coordArrayConverter(bufer.data).map((cell, index) => {
            return (
              <View
                style={{
                  width: cellSize,
                  height: cellSize,
                  backgroundColor: cell.color,
                  position: "absolute",
                  left: cell.x * cellSize,
                  top: cell.y * cellSize,
                }}
                key={index}
              >
                <Text>cell.value</Text>
              </View>
            );
          })}
        </GameEngine>
        <View style={styles.dpadtop}>
          <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
              controller.wsChangeDirection("top");
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
              controller.wsChangeDirection("left");
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
              controller.wsChangeDirection("right");
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
              controller.wsChangeDirection("bottom");
            }}
          >
            <Image
              style={styles.img}
              source={require("../../img/down_arrow.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  /////////
  else {
    return (
      <View>
        {isWait ? (
          <View className="game-message">{bufer.data}</View>
        ) : (
          <GameOver message={bufer.data} />
        )}
      </View>
    );
  }
  ///////////
};

export default OnlineGame;

const styles = StyleSheet.create({
  canvas: {
    flex: 1,
    // backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
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
