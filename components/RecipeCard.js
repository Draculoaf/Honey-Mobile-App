import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { myRecipes } from "../constants/cardStuff";

const RecipeCard = () => {
  const navigation = useNavigation();

  return (
    <View>
      <FlatList
        data={myRecipes}
        renderItem={({ item }) => (
          <Pressable
            onPress={(item) =>
              navigation.navigate("RecipeDetails", {
                screen: "RecipeDetails",
                params: { item: item },
              })
            }
            style={{
              backgroundColor: "white",
              marginTop: 10,
              borderRadius: 10,
              color: "white",
              paddingVertical: 20,
              paddingHorizontal: 20,

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
            <Text style={{ bottom: 10, flexWrap: "wrap", fontSize: 15 }}>
              {item.name}
            </Text>
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
