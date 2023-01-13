import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import GameLoop from "./components/grid/GameLoop";
import GridMakerGame from "./components/grid/GridMakerGame.js";
import StartMenu from "./components/menus/StartMenu.js";
import React, { Component } from "react";

export default function App() {
  return (
    <>
      <StatusBar hidden={true} />
      <View
        className="App-link"
        href="https://www.youtube.com/watch?v=cFuRPMjYKhs&t=181s"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Text>Light Cycle</Text>
      </View>
      <StartMenu />
    </>
  );
}
