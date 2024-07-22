import * as React from "react";
import { StyleSheet } from "react-native";
import HomeNavigation from "./src/navigation/HomeNavigation";

export default function App() {
  return <HomeNavigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
