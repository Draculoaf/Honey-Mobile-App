import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "react-native";
import { TouchableOpacity } from "react-native";

const RecipeDetails = ({ navigation, route }) => {
  const { item } = route.params.params;

  console.log(item);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ede4dd" }}>
      <Header />
      <View>
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
        {/* <Text>{item.steps}</Text> */}
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 200 }}
          style={{ paddingHorizontal: 15, felx: 1 }}
        >
          <Image
            source={require("../assets/lemonade.png")}
            style={{
              maxHeight: 250,
              maxWidth: 250,
              top: -75,
              marginLeft: 20,
            }}
          />
          <Text style={{ fontSize: 50, top: -100, marginLeft: 20 }}>
            {item.name} Lemonade
          </Text>

          <View
            style={{
              backgroundColor: "white",
              top: -50,
              maxWidth: 300,
              paddingTop: 30,
              paddingBottom: 30,
              paddingLeft: 30,
              paddingRight: 30,

              borderRadius: 10,
              shadowColor: "black",
              shadowOffset: { width: 1, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
            }}
          >
            <Text styles={styles.instructionText}>
              {item.ingredients}Ingredients:{"\n"}Serves 5{"\n"}- 4 limes
              {"\n"}- 0,5 cups sweetened condensed milk (more if you want it
              sweeter){"\n"}- 4 cups of water{"\n"}- *Optionally, ice and lime
              slices to serve
            </Text>
          </View>
          <View
            style={{
              borderRadius: 10,
              shadowColor: "black",
              shadowOffset: { width: 1, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              backgroundColor: "red",
              maxWidth: 150,
              paddingTop: 30,
              paddingBottom: 30,
              paddingLeft: 30,
              paddingRight: 30,
              marginLeft: 65,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("RecipeCarousel")}
            >
              <Text style={{ color: "white" }}>Start Making!</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default RecipeDetails;

const styles = StyleSheet.create({
  instructionText: {
    fontSize: 20,
  },
});
