import * as React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-elements";

export default ({ navigation }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#f4511e",
      }}
    >
      <Text style={{ color: "#fff", fontSize: 18 }}>Review Jobs</Text>
      <Button
        title="Settings"
        onPress={() => {
          navigation.navigate("Settings");
        }}
      />
    </View>
  );
};
