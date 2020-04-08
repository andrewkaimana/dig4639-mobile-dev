import React from "react";
import { ScrollView, StatusBar } from "react-native";

import magicKingdomQuestions from "../data/magicKingdom";

import { RowItem } from "../components/RowItem";

export default ({ navigation }) => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <RowItem
      name="Magic Kingdom"
      color="#ff93ac"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Magic Kingdom",
          questions: magicKingdomQuestions,
          color: "#ff93ac"
        })
      }
    />
  </ScrollView>
);
