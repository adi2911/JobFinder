import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import AuthScreen from "../screen/AuthScreen";
import WelcomeScreen from "../screen/WelcomeScreen";
import MainNavigation from "./MainNavigation";

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <NavigationContainer screenOptions={{ headerShown: false }}>
      <Tab.Navigator>
        <Tab.Screen name="Welcome" component={WelcomeScreen} />
        <Tab.Screen name="Auth" component={AuthScreen} />
        <Tab.Screen name="Main" component={MainNavigation} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
