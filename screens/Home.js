import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import Icon from "../assets/HoneyIcon.png";

export default function Home(navigation) {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        textAlign: "Right",
      }}
    >
      <Text>Hey there,</Text>
      <Text>Honey.</Text>
      <Pressable>
        <Text>Let's get making!</Text>
      </Pressable>
    </View>
  );
}
