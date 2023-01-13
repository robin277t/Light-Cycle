import React, { useEffect, useState } from "react";
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
import WSController from "../grid/controller";
import OnlineGame from "../grid/onlineGame";
import StartMenu from "../menus/StartMenu";

const OnlineMenu = () => {
  const [bufer, setBufer] = useState("");
  const [gameOn, setGameOn] = useState(false);
  const [controller, setController] = useState(new WSController(setBufer));
  const [isWait, setIsWait] = useState(false);
  const [isStartMenu, setIsStartMenu] = useState(false);

  useEffect(() => {
    controller.wsConnect();
  }, []);

  useEffect(() => {
    if (bufer.action === "GRID") {
      setGameOn(true);
      setIsWait(false);
      console.log(bufer);
    }
  }, [bufer]);

  const quickGame = () => {
    if (controller != null) {
      controller.wsQuickGame();
      setGameOn(true);
    }
  };

  const createGame = () => {
    if (controller != null) {
      controller.wsNewGame();
      setIsWait(true);
      // controller.wsGameGrid();
    }
  };

  const startMenu = () => {
    setIsStartMenu(true);
  };

  if (isStartMenu === true) {
    return <StartMenu />;
  }

  return (
    <View className="menu-item">
      {gameOn ? (
        <>
          <OnlineGame bufer={bufer} controller={controller} isWait={isWait} />
        </>
      ) : isWait ? (
        <>
          <Text>Waiting for another user...</Text>
        </>
      ) : bufer.action === "TIMER" ? (
        <>
          <p>{bufer.data}</p>
        </>
      ) : (
        <View>
          <Button
            title="Join Game"
            type="button"
            className="button"
            onPress={quickGame}
          ></Button>

          <Button
            title="Create Game"
            type="button"
            className="button"
            onPress={createGame}
          ></Button>

          <Button
            title="Return to Start Menu"
            type="button"
            className="button"
            onPress={() => startMenu()}
          ></Button>
        </View>
      )}
    </View>
  );
};

export default OnlineMenu;
