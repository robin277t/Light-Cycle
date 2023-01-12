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

const StartMenu = () => {
  const [menuSelect, setMenuSelect] = useState("none");

  const selectMenu = (gamemode) => {
    setMenuSelect(gamemode);
  };

  if (menuSelect === "none") {
    return (
      <Button
        title="start a game dude"
        onPress={() => {
          selectMenu("multiplayer");
        }}
      ></Button>
    );
  } else {
    return (
      <GameLoop
        gridSide={40}
        trailLength={10}
        gameSpeed={20}
        player1={"player1"}
        player2={"player2"}
      />
    );
  }
};

export default StartMenu;
