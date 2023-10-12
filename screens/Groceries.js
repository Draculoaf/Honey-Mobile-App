import { View, Text } from "react-native";
import React from "react";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Groceries() {
  return (
    <SafeAreaView>
      <Header />
      <View>
        <Text>I am the grocery list, but I do not have anything yet</Text>
      </View>
    </SafeAreaView>
  );
}
