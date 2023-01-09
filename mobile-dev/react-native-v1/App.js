import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default function App() {
  const testFunction = () => {
    return <Text>LeftMate</Text>;
  };
  return (
    <>
      <View style={styles.container}>
        <Text>Welcome to the Light Cycle mobile app</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.container2}>
        <Text>Welcome to the Light Cycle mobile app</Text>
        <StatusBar style="auto" />
      </View>
      <TouchableOpacity onPress={() => testFunction}>
        <Image style={styles.img} source={require("./left-filled.png")} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => testFunction}>
        <Image style={styles.img} source={require("./right-filled.png")} />
      </TouchableOpacity>
    </>
  );
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
    width: 50,
    height: 50,
  },
});
