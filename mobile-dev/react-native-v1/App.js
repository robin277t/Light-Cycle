import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import GameLoop from "./components/grid/GameLoop";
import GridMakerGame from "./components/grid/GridMakerGame.js";
import StartMenu from "./components/menus/StartMenu.js";

export default function App() {
  return (
    <>
      <StatusBar hidden={true}/>
      <StartMenu />
    </>
    // <GridMakerGame
    //   key="someKey"
    //   cycle1={17}
    //   cycle2={34}
    //   gridSide={10}
    //   trail1={[16, 15]}
    //   trail2={[35, 36]}
    //   wall={[
    //     0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 19, 20, 29, 30, 39, 40, 49, 50, 59,
    //     60, 69, 70, 79, 80, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99,
    //   ]}
    // />
  );
}
