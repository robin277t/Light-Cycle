////////////////////
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  Modal,
  Pressable,
  Button,
} from "react-native";
import GameLoop from "../grid/GameLoop.js";
import StartMenu from "./StartMenu";

export default function GameOver({ message }) {
  const [gameRestart, setIsGameRestart] = useState("no");

  const setRestartGame = (status) => {
    setIsGameRestart(status);
  };

  if (gameRestart === "yes") {
    return (
      <GameLoop
        gridSide={40}
        trailLength={10}
        gameSpeed={20}
        player1={"player1"}
        player2={"player2"}
      />
    );
  } else if (gameRestart === "no") {
    console.log("plain game over screen");

    return (
      <View style={styles.modalView}>
        <Text>Why me</Text>
        <Button
          title="Restart GAME"
          style={[styles.button, styles.buttonClose]}
          onPress={() => {
            console.log("yay");
            setRestartGame("yes");
          }}
        >
          <Text style={styles.textStyle}>Restart Game</Text>
        </Button>
        <Pressable
          title="pressme"
          style={[styles.button, styles.buttonClose]}
          onPress={() => setRestartGame("startMenu")}
        >
          <Text style={styles.textStyle}>Return to Start Menu</Text>
        </Pressable>
      </View>
    );
  } else if (gameRestart === "startMenu") {
    return <StartMenu />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f39c12",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    flex: 1,
    backgroundColor: "#34495e",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 100,
    height: 120,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
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
    alignContent: "center",
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
