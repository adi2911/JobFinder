import React from "react";
import { View } from "react-native";
import Slides from "../components/Slides";
import { SLIDES_DATA } from "../constant";

export default ({ navigation }) => {
  const onSlideComplete = () => {
    navigation.navigate("Auth");
  };
  return (
    <View>
      <Slides slideData={SLIDES_DATA} onComplete={onSlideComplete} />
    </View>
  );
};
