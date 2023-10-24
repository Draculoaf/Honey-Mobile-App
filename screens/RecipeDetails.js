import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const RecipeDetails = ({ navigation, route }) => {
  const { item } = route.params.params;
  console.log(item);
  return (
    <SafeAreaView>
      <Header />
      <Pressable
        onPress={() => navigation.goBack()}
        style={{ marginHorizontal: 15, marginVertical: 15 }}
      >
        <Ionicons
          name="ios-chevron-back-circle-outline"
          size={50}
          color="#CA3C25"
        />
      </Pressable>
      <Text>{item.steps}</Text>
      <Image
        source={item.image}
        defaultSource={"../assets/icon.png"}
        style={{ maxHeight: 1000, maxWidth: 1000 }}
      />
    </SafeAreaView>
  );
};

export default RecipeDetails;

const styles = StyleSheet.create({});
