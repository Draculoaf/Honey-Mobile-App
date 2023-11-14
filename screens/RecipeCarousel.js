import { Pressable, StyleSheet, View, ScrollView, Text } from "react-native";
import React from "react";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";

//This stepper is from https://www.npmjs.com/package/react-native-stepper-ui
const RecipeCarousel = ({ navigation, props }) => {
  const buttonTextStyle = {
    color: "#4bb543",
    fontWeight: "bold",
  };
  const prevTextStyle = { color: "white" };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ede4dd" }}>
      <Header />
      <View>
        <Pressable
          onPress={() => navigation.goBack()}
          style={{ marginHorizontal: 15, marginVertical: 15, zindex: 0 }}
        >
          <Ionicons
            name="ios-chevron-back-circle-outline"
            size={50}
            color="#CA3C25"
          />
        </Pressable>
        <View style={{ zindex: 0 }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 200 }}
            style={{ paddingHorizontal: 15, felx: 1 }}
          >
            <ProgressSteps
              disabledStepIconColor={"white"}
              progressBarColor={"white"}
              disabledStepNumColor={"black"}
              labelColor={"black"}
              topOffset={5}
              marginBottom={40}
            >
              <ProgressStep
                label="Cut"
                nextBtnTextStyle={buttonTextStyle}
                previousBtnTextStyle={prevTextStyle}
              >
                <View style={{ alignItems: "center" }}>
                  <Text
                    style={{
                      marginBottom: 10,
                      backgroundColor: "white",
                      padding: 30,
                      paddingVertical: 100,
                      borderRadius: 10,
                      overflow: "hidden",
                    }}
                  >
                    Slice the 4 limes into pieces that can fit in the blender.
                  </Text>
                </View>
              </ProgressStep>
              <ProgressStep
                label="Blend"
                nextBtnTextStyle={buttonTextStyle}
                previousBtnTextStyle={prevTextStyle}
              >
                <View style={{ alignItems: "center" }}>
                  <Text
                    style={{
                      marginBottom: 10,
                      backgroundColor: "white",
                      padding: 30,
                      paddingVertical: 100,
                      borderRadius: 10,
                      overflow: "hidden",
                    }}
                  >
                    Blend the sliced limes with the water and sweetened
                    condensed milk. Do not blend for too long as this will make
                    the lemonade bitter.
                  </Text>
                </View>
              </ProgressStep>
              <ProgressStep
                label="Strain"
                nextBtnTextStyle={buttonTextStyle}
                previousBtnTextStyle={prevTextStyle}
              >
                <View style={{ alignItems: "center" }}>
                  <Text
                    style={{
                      marginBottom: 10,
                      backgroundColor: "white",
                      padding: 30,
                      paddingVertical: 100,
                      borderRadius: 10,
                      overflow: "hidden",
                    }}
                  >
                    Take the lemonade, and pour it through a strainer to get rid
                    of the pulp. Make sure that the liquid is strained into a
                    jug.
                  </Text>
                </View>
              </ProgressStep>
              <ProgressStep
                label="Serve"
                finishBtnText={"All done!"}
                nextBtnDisabled={true}
                nextBtnTextStyle={buttonTextStyle}
                previousBtnTextStyle={prevTextStyle}
              >
                <View style={{ alignItems: "center" }}>
                  <Text
                    style={{
                      marginBottom: 10,
                      backgroundColor: "white",
                      padding: 30,
                      paddingVertical: 100,
                      borderRadius: 10,
                      overflow: "hidden",
                    }}
                  >
                    Fill a cup with ice and pour the lemonade in. Garish the rim
                    of the cup with a slice of lime or place a lime rind on top
                    of the drink.
                  </Text>
                </View>
              </ProgressStep>
            </ProgressSteps>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RecipeCarousel;

const styles = StyleSheet.create({
  instructionText: {
    fontSize: 20,
  },
});
