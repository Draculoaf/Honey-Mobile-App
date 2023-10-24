import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const SearchBar = (search, placeholder) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        flexDirection: "row",
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        shadowColor: "black",
        shadowOffset: { width: 10, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 7,
      }}
    >
      <FontAwesome name="search" size={24} color="#CA3C25" />
      <TextInput style={{ fontSize: 15, paddingLeft: 10, color: "gray" }}>
        {"Got something in mind?..."}
      </TextInput>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
