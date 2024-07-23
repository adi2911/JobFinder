import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";

//Dimension to get full SCREEN_WIDTH

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default ({ slideData, onComplete }) => {
  const renderLastSlides = (index) => {
    if (index === slideData.length - 1) {
      return (
        <Button
          buttonStyle={styles.lastButtonStyle}
          title="Onwards!"
          raised
          onPress={onComplete}
        />
      );
    }
  };
  const renderSlides = () =>
    slideData.map((slide, index) => (
      <View
        style={[styles.slideStyle, { backgroundColor: slide.color }]}
        key={slide.text}
      >
        <Text style={styles.textStyle}>{slide.text}</Text>
        {renderLastSlides(index)}
      </View>
    ));

  //pagingEnabled enables the scroll to only stop when one content is done.

  return (
    <ScrollView
      pagingEnabled
      horizontal
      indicatorStyle="black"
      contentContainerStyle={styles.container}
    >
      {renderSlides()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "black",
    alignItems: "center",
  },
  slideStyle: {
    flex: 1,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  lastButtonStyle: {
    backgroundColor: "#0288D1",
    //marginTop: 15,
  },
});
