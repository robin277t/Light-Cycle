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
import OnlineMenu from "./onlineMenu.js";

const StartMenu = () => {
  const [menuSelect, setMenuSelect] = useState("none");

  const selectMenu = (gamemode) => {
    setMenuSelect(gamemode);
  };

  if (menuSelect === "none") {
    return (
      <View>
        <Button
          title="Player VS Ai"
          onPress={() => {
            selectMenu("offline");
          }}
        ></Button>
        <Button
          title="Online Multiplayer"
          onPress={() => {
            selectMenu("online");
          }}
        ></Button>
      </View>
    );
  } else if (menuSelect === "online") {
    return <OnlineMenu />;
  } else if (menuSelect === "offline") {
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
