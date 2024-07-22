import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import DeckScreen from "../screen/DeckScreen";
import MapScreen from "../screen/MapScreen";
import ReviewStackNavigation from "./ReviewStackNavigation";

const MainTab = createBottomTabNavigator();
export default () => {
  return (
    <MainTab.Navigator screenOptions={{ headerShown: false }}>
      <MainTab.Screen name="Map" component={MapScreen} />
      <MainTab.Screen name="Deck" component={DeckScreen} />
      <MainTab.Screen name="Saved" component={ReviewStackNavigation} />
    </MainTab.Navigator>
  );
};
