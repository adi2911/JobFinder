import * as React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";

//Platform helps to identify which platform the application is running on : ios, android, windows etc

export default ({ navigation }) => {
  return (
    <View
      style={{
        marginTop: Platform.OS === "android" ? 24 : 0,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
      }}
    >
      <Text style={{ color: "black", fontWeight: "bold", fontSize: 18 }}>
        Review Jobs
      </Text>
      <Button
        title="Settings"
        onPress={() => {
          navigation.navigate("Settings");
        }}
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.titleStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "rgba(0,0,0,0)",
    borderColor: "black",
    borderWidth: 2,
  },
  titleStyle: { color: "black" },
});
