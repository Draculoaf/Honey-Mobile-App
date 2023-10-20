import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import Task from "../components/Task";
import { Feather } from "@expo/vector-icons";

export default function Groceries() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const handeladdTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Header />
        <Text
          style={{
            fontSize: 25,
            padding: 20,
            marginBottom: 10,
            marginTop: 5,
          }}
        >
          Grocery List
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 90 }}
        style={{ paddingHorizontal: 15, felx: 1 }}
      >
        <View style={styles.items}>
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      <View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writesTaskWrapper}
        >
          <TextInput
            style={styles.inputText}
            placeholder="Write your grocery item here"
            value={task}
            onChangeText={(text) => setTask(text)}
          />
          <TouchableOpacity onPress={() => handeladdTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>
                <Feather name="plus-circle" size={50} color="#CA3C25" />
              </Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  items: {},
  inputText: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 15,
    maxWidth: 275,
    borderRadius: 10,
    width: 275,
    fontSize: 15,
    backgroundColor: "white",
    borderColor: "#CA3C25",
  },
  addWrapper: {},
  addText: {},
  writesTaskWrapper: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
