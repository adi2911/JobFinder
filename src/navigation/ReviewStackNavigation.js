import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import ReviewScreen from "../screen/ReviewScreen";
import SettingsScreen from "../screen/SettingsScreen";
export default () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Review" component={ReviewScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};
