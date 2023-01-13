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
  );
}
