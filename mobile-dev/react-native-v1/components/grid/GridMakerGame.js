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
    <>
      <View style={styles.canvas}>
        <GameEngine
          ref={backingGrid}
          style={{
            width: gridSize,
            height: gridSize,
            flex: null,
            backgroundColor: "grey",
            position: "relative",
            top: -50,
          }}
          key={"backingGrid"}
        >
          {wall.map((value) => {
            if (value < 2) {
              return (
                <View
                  style={{
                    width: cellSize,
                    height: cellSize,
                    backgroundColor: "pink",
                    position: "absolute",
                    left: gridPixelWidth - cellSize,
                    top: 0,
                  }}
                  key={value}
                ></View>
              );
            }
          })}
          <View
            style={{
              width: cellSize,
              height: cellSize,
              backgroundColor: "red",
              position: "relative",
              left: 0,
              top: 0,
            }}
            key={"red"}
          ></View>
        <View>
          <Modal
            animationType="none"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>You clicked Top!</Text>
                <Pressable
                style={[styles.buttonOpen, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text>Hide</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
        </GameEngine>
        {/* <View>
          <Modal
            animationType="none"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>You clicked Right!</Text>
                <Pressable
                  style={[styles.buttonOpen, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text>Hide</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
        <View>
          <Modal
            animationType="none"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>You clicked Bottom!</Text>
                <Pressable
                  style={[styles.buttonOpen, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text>Hide</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
        <View>
          <Modal
            animationType="none"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>You clicked Left!</Text>
                <Pressable
                  style={[styles.buttonOpen, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text>Hide</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View> */}
        <View style={styles.dpadtop}>
          <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
            onPress={() => showModal(!modalVisible)}
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
            onPress={() => showModal(!modalVisible)}
          >
            <Image
              style={styles.img}
              source={require("../../img/left-filled.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.dpadmiddle}>
          <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
            onPress={() => showModal(!modalVisible)}
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
            onPress={() => showModal(!modalVisible)}
          >
            <Image
              style={styles.img}
              source={require("../../img/down_arrow.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
    
    <View style={styles.canvas}>
      <GameEngine
        ref={backingGrid}
        style={{
          width: gridSize,
          height: gridSize,
          flex: null,
          backgroundColor: "grey",
          position: "relative",
          top: -80,
        }}
        key={"backingGrid"}
      >
        {coordArrayConverter(wall).map((cell) => {
          return (
            <View
              style={{
                width: cellSize,
                height: cellSize,
                backgroundColor: "brown",
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
                  backgroundColor: "pink",
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
                  backgroundColor: "yellow",
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
            backgroundColor: "green",
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
    backgroundColor: "#000000",
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

  button: {
    borderRadius: 5,
    padding: 8,
    elevation: 1,
  },

  buttonOpen: {
    backgroundColor: "#6273248",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  buttonClose: {
    backgroundColor: "#D3D3D3",
  },

  img: {
    width: 20,
    height: 20,
  },

  dpadtop: {
    flex: 0,
    alignItems: "center",
  },

  dpadmiddle: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  dpadbottom: {
    flex: 1,
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

  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
