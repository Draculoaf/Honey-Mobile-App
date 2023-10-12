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
      <View style={{ top: 25, marginHorizontal: 15 }}>
        <SearchBar />
        <RecipeCategoriesategoriesList />
      </View>
      {/*remove margintTop if you want to remove the grey under header */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginHorizontal: 20, flex: 1, marginTop: 50 }}
        contentContainerStyle={{ paddingBottom: 30 }}
      >
        <Text style={{ fontSize: 25 }}>Recipes</Text>
        {/*<SearchBar />*/}

        <RecipeCard />
      </ScrollView>
    </SafeAreaView>
  );
}
