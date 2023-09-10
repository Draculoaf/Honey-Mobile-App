import { View, Text } from "react-native";
import React from "react";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Groceries() {
  return (
    <SafeAreaView>
      <Header />
      <View style={{ alignItems: "center", top: 45, marginHorizontal: 20 }}>
        <Text style={{ top: 45, marginHorizontal: 20 }}>
          I am the grocery list, but I do not have anything yet
        </Text>
      </View>
    </SafeAreaView>
  );
}
