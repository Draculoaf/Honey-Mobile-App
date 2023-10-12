import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";

const RecipeDetails = ({ navigation, route }) => {
  const { item } = route.params.params;
  console.log(item);
  return (
    <SafeAreaView>
      <Header />
      <Text>Hello I am the details screen</Text>
      <Pressable onPress={() => navigation.goBack()}>
        <Text>the icon</Text>
      </Pressable>
      <Text>{item.steps}</Text>
      <Image source={item.image} style={{ maxHeight: 1000, maxWidth: 1000 }} />
    </SafeAreaView>
  );
};

export default RecipeDetails;

const styles = StyleSheet.create({});
