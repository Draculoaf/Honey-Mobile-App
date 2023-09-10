import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";

const RecipeDetails = () => {
  return (
    <SafeAreaView>
      <Header />
      <Text>Hello I am the details screen</Text>
    </SafeAreaView>
  );
};

export default RecipeDetails;

const styles = StyleSheet.create({});
