import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import Tabbar from "./components/ToolBar/Tabbar";
import Entry from "./pages/Entry";

import Loader from "./components/Loader";
import App from "../App";

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        initialRouteName="Loader"
        screenOptions={{
          cardStyle: {
            backgroundColor: "#f0f0f8",
          },
        }}
      >
        <AppStack.Screen name="Loader" component={Loader} />
        <AppStack.Screen name="Entry" component={Entry} />
        <AppStack.Screen name="Tabbar" component={Tabbar} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
