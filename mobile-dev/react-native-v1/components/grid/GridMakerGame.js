import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
} from "react-native";
import { Component, useEffect, useRef, useState } from "react";
import { GameEngine } from "react-native-game-engine";
import { array } from "prop-types";

export default function GridMakerGame({
  gridSide,
  cycle1,
  cycle2,
  trail1,
  trail2,
  wall,
}) {
  const MAX_WIDTH = Dimensions.get("screen").width;
  const MAX_HEIGHT = Dimensions.get("screen").height; //These could be important for full width screen rendering
  const gridPixelWidth = MAX_WIDTH;
  const cellSize = gridPixelWidth / gridSide;

  const backingGrid = useRef(null);
  const gridSize = gridSide * cellSize;

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

  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 1000);
  };

  return (
    <View style={styles.canvas}>
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
        {coordArrayConverter(wall).map((cell) => {
          return (
            <View
              style={{
                width: cellSize,
                height: cellSize,
                backgroundColor: "#F39C12",
                position: "absolute",
                left: cell.x * cellSize,
                top: cell.y * cellSize,
              }}
              key={cell.value}
            ></View>
          );
        })}
        {coordArrayConverter(trail1).map((cell) => {
          if (cell.value > 0) {
            return (
              <View
                style={{
                  width: cellSize,
                  height: cellSize,
                  backgroundColor: "#A62B17",
                  position: "absolute",
                  left: cell.x * cellSize,
                  top: cell.y * cellSize,
                }}
                key={cell.value}
              ></View>
            );
          }
        })}
        {coordArrayConverter(trail2).map((cell) => {
          if (cell.value > 0) {
            return (
              <View
                style={{
                  width: cellSize,
                  height: cellSize,
                  backgroundColor: "#479FF8",
                  position: "absolute",
                  left: cell.x * cellSize,
                  top: cell.y * cellSize,
                }}
                key={cell.value}
              ></View>
            );
          }
        })}
        <View
          style={{
            width: cellSize,
            height: cellSize,
            backgroundColor: "red",
            position: "absolute",
            left: coordConverter(cycle1).x * cellSize,
            top: coordConverter(cycle1).y * cellSize,
          }}
          key={"cycle1"}
        ></View>
        <View
          style={{
            width: cellSize,
            height: cellSize,
            backgroundColor: "blue",
            position: "absolute",
            left: coordConverter(cycle2).x * cellSize,
            top: coordConverter(cycle2).y * cellSize,
          }}
          key={"cycle2"}
        ></View>
      </GameEngine>
    </View>
  );
}

const styles = StyleSheet.create({
  canvas: {
    flex: 1,
    // backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  
  cell: {
    backgroundColor: "#282c34",
    height: 5,
    width: 5,
  },
  head1: {
    backgroundColor: "#8a2be2",
    height: 5,
    width: 5,
  },
  head2: {
    backgroundColor: "#04722e",
    height: 5,
    width: 5,
  },
  wall: {
    backgroundColor: "#00ffff",
    height: 5,
    width: 5,
  },
  trail1: {
    backgroundColor: "#ff0000",
    height: 5,
    width: 5,
  },
  trail2: {
    backgroundColor: "#c8ee2e",
    height: 5,
    width: 5,
  },
});
