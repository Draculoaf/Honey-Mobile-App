import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Home, Recipes, Groceries, Skills } from "../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import RecipeDetails from "../screens/RecipeDetails";

const Stack = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: { backgroundColor: "#F0C59E", height: 60 },
};

export default function Navigation() {
  return (
    <NavigationContainer styles={{}}>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
          name="Home"
          component={Home}
          screenOptions={{ tabBarIconStyle: { display: "none" } }}
          options={{
            tabBarButton: () => null,
            tabBarStyle: { display: "none" },
          }}
        />
        <Stack.Screen
          name="RecipeDetails"
          component={RecipeDetails}
          screenOptions={{ tabBarIconStyle: { display: "none" } }}
          options={{
            tabBarButton: () => null,
          }}
        />
        <Stack.Screen
          name="Skills"
          component={Skills}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={navStyles.conatiner}>
                  <FontAwesome
                    name="graduation-cap"
                    size={35}
                    color={focused ? "#CA3C25" : "white"}
                  />
                </View>
              );
            },
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="Recipes"
          component={Recipes}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={navStyles.conatiner}>
                  <FontAwesome
                    name="book"
                    size={35}
                    color={focused ? "#CA3C25" : "white"}
                  />
                </View>
              );
            },
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="Groceries"
          component={Groceries}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={navStyles.conatiner}>
                  <FontAwesome
                    name="shopping-cart"
                    size={35}
                    color={focused ? "#CA3C25" : "white"}
                  />
                </View>
              );
            },
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const navStyles = StyleSheet.create({
  conatiner: { alignItems: "center", justifyContent: "center" },
});
