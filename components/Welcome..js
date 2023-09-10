import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Welcome = () => {
  return (
    <View>
      <Text>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
        .
      </Text>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
