import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Modal,
  Pressable,
} from "react-native";

export default function Countdown(props) {
  const [time, setTime] = React.useState(props.initialValue || 3);
    console.log(time)
  const timerRef = React.useRef(time);

  const [modalVisible, setModalVisible] = useState(true);

  const showModal = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 4000);
  };

  React.useEffect(() => {
    const timerId = setInterval(() => {
      timerRef.current -= 1;
      if (timerRef.current < 0) {
        clearInterval(timerId);
      } else {
        setTime(timerRef.current);
      }
    }, 1000);
    return (
      showModal()
    )
  }, []);

  return ( 
    <>
    <View style={styles.container2}>
      <Text>Hey look, you can read this!</Text>
      <StatusBar style="auto" />
    </View>
    <View>
      <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("modal has been closed");
        setModalVisible(!modalVisible)
      }}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}> {time} </Text>
        </View>
      </Modal>
    </View>
  </>
  )
}

const styles = StyleSheet.create({
 container2: {
    flex: 1,
    backgroundColor: "#34495e",
    alignItems: "center",
    justifyContent: "center",
  },

  modalView: {
    margin: 20,
    backgroundColor: "#009f23",
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
    color: '#FFFFFF'
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  buttonClose: {
    backgroundColor: "#2196F3",
  },

  textStyle: {
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
  },
})
