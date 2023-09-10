import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import RecipeCategoriesategoriesList from "../components/RecipeCategoriesList";
import RecipeCard from "../components/RecipeCard";

export default function Recipes() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Header />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ top: 45, marginHorizontal: 20, flex: 1 }}
        contentContainerStyle={{ paddingBottom: 70 }}
      >
        <Text style={{ fontSize: 25 }}>Recipes</Text>
        {/*<SearchBar />*/}

        <RecipeCard />
      </ScrollView>
    </SafeAreaView>
  );
}
