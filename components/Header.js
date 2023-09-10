import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: "#F0C59E",
        height: 70,

        flexDirection: "row",
        marginVertical: -20,
      }}
    >
      <Text
        style={{
          fontSize: 25,
          left: 150,
          top: 25,
          color: "white",
          fontWeight: 900,
        }}
      >
        Honey
      </Text>
      {/*
      <Image
        source={require("../assets/HoneyIcon.png")}
        style={{ height: 50, width: 50, top: 15, left: 29 }}
      />*/}
    </View>
  );
};

export default Header;
