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

const RecipeCarousel = ({ navigation }) => {
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
      </View>
      <View></View>
    </SafeAreaView>
  );
};

export default RecipeCarousel;

const styles = StyleSheet.create({
  instructionText: {
    fontSize: 20,
  },
});
