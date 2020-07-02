import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: "#f0f0f8",
          },
        }}
      >
        <AppStack.Screen name="Tabbar" component={Tabbar} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
