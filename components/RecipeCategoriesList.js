import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { recipeCategories, colours } from "../constants/constants";

const RecipeCategoriesList = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {recipeCategories.map((category, index) => {
        return (
          <View>
            <Text
              style={{
                backgroundColor: "#CA3C25",
                fontSize: 15,
                paddingHorizontal: 20,
                marginRight: 10,
                marginLeft: 3,
                marginTop: 25,
                borderRadius: 10,
                paddingTop: 10,
                paddingBottom: 10,
                overflow: "hidden",
                color: "white",
              }}
            >
              {category.category}
            </Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default RecipeCategoriesList;

const styles = StyleSheet.create({});
