import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { recipeList, recipes } from "../constants/constants";
import { useNavigation } from "@react-navigation/native";

const RecipeCard = () => {
  const navigation = useNavigation();

  return (
    <View>
      <FlatList
        data={recipeList}
        renderItem={({ item }) => (
          <Pressable
            onPress={(item) =>
              navigation.navigate("RecipeDetails", {
                screen: "RecipeDetails",
                params: { item: item },
              })
            }
            style={{
              backgroundColor: "#FDF7F1",
              marginTop: 25,
              borderRadius: 10,
              color: "white",
              paddingVertical: 20,
              paddingHorizontal: 20,
              borderRadius: 10,
              shadowColor: "black",
              shadowOffset: { width: 1, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              alignItems: "center",
            }}
          >
            <Image
              source={item.image}
              style={{
                resizeMode: "center",
                width: 125,
                height: 150,
              }}
            />
            <Text style={{ bottom: 10 }}>{item.name}</Text>
          </Pressable>
        )}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
      />
    </View>
  );
};
export default RecipeCard;

const styles = StyleSheet.create({});
