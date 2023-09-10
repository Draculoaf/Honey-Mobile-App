import { View, Text, Image } from "react-native";
import React from "react";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../components/SearchBar";
import CategoriesList from "../components/RecipeCategoriesList";

export default function Home(navigation) {
  return (
    <SafeAreaView>
      <Text>Welcome to Honey! Let the journey begin!</Text>
    </SafeAreaView>
  );
}
