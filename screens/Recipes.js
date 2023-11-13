import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import RecipeCategoriesategoriesList from "../components/RecipeCategoriesList";
import RecipeCard from "../components/RecipeCard";

export default function Recipes() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ede4dd" }}>
      <View>
        <Header />
        <Text style={{ fontSize: 25, padding: 25 }}>Recipes</Text>
      </View>
      <View style={{ top: 25, marginHorizontal: 15 }}></View>
      {/*remove margintTop if you want to remove the grey under header */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginHorizontal: 15, flex: 1, marginTop: -10 }}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        <RecipeCard />
      </ScrollView>
    </SafeAreaView>
  );
}
