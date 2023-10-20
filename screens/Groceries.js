import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import Task from "../components/Task";

export default function Groceries() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Header />
        <Text
          style={{ fontSize: 25, padding: 15, marginBottom: 10, marginTop: 10 }}
        >
          Grocery List
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: 15 }}>
          <View style={styles.items}>
            <Task
              text={
                "long lgong irnjhjnf ih f j k jkkj jk fkf jf fjknf f jk fjj j fkn fnf    fklnfjkhfjk bkf  f"
              }
            />
            <Task text={"long text"} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ items: {} });
