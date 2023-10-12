import { View, Text } from "react-native";
import React from "react";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Skills() {
  return (
    <SafeAreaView>
      <Header />
      <View style={{ alignItems: "center", top: 45, marginHorizontal: 20 }}>
        <Text>I am the skills page, and I am similar to the recipes page</Text>
      </View>
    </SafeAreaView>
  );
}
