import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  Modal,
  Pressable,
} from "react-native";

export default function DPad() {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 1000);
  };

  return (
    <>
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
              <Text style={styles.modalText}>You clicked me!</Text>
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
      <View style={styles.dpadtop}>
        <TouchableOpacity
          style={[styles.button, styles.buttonClose]}
          onPress={() => showModal(!modalVisible)}
        >
          <Image style={styles.img} source={require("../img/up-filled.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.dpadmiddle}>
        <TouchableOpacity
          style={[styles.button, styles.buttonClose]}
          onPress={() => showModal(!modalVisible)}
        >
          <Image style={styles.img} source={require("../img/left-filled.png")} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonClose]}
          onPress={() => showModal(!modalVisible)}
        >
          <Image
            style={styles.img}
            source={require("../img/right-filled.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.dpadbottom}>
        <TouchableOpacity
          style={[styles.button, styles.buttonClose]}
          onPress={() => showModal(!modalVisible)}
        >
          <Image style={styles.img} source={require("../img/down_arrow.png")} />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  buttonClose: {
    backgroundColor: "#D3D3D3",
  },

  img: {
    width: 50,
    height: 50,
  },

  dpadtop: {
    flex: 0,
    alignItems: "center",
  },

  dpadmiddle: {
    flexDirection: "row",
    justifyContent: "space-between",
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

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  buttonOpen: {
    backgroundColor: "#6273248",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
