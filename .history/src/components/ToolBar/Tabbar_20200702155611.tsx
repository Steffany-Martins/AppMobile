import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialIcons as Icon } from "@expo/vector-icons";

import Home from "../../pages/Home";
import { StyleSheet } from "react-native";

const { Navigator, Screen } = createMaterialBottomTabNavigator();
/*Tab bar
Monitor  *
Graduation *
Home *
Heart *
Account-circle *
*/
const Tabbar = () => {
  return (
    <Navigator
      initialRouteName="Home"
      activeColor="#FC9272"
      inactiveColor="#ddd"
      labeled={false}
      barStyle={styles.barStyleShadow}
    >
      <Screen
        name="Monitor"
        component={Home}
        options={{
          tabBarLabel: "Monitoramento de pontos",
          tabBarAccessibilityLabel: "Pontos e informações de comunidades",
          tabBarIcon: ({ color }) => (
            <Icon name="trophy-award" color={color} size={26} />
          ),
        }}
      />
      <Screen
        name="Graduation"
        component={Home}
        options={{
          tabBarLabel: "Carreira",
          tabBarAccessibilityLabel: "Sua carreira e jornada",
          tabBarIcon: ({ color }) => (
            <Icon name="graduation-cap" color={color} size={26} />
          ),
        }}
      />
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Início",
          tabBarAccessibilityLabel: "Página Principal",
          tabBarIcon: ({ color }) => (
            <Icon name="home-circle" color={color} size={26} />
          ),
        }}
      />
      <Screen
        name="Favoritos"
        component={Home}
        options={{
          tabBarLabel: "Favoritos",
          tabBarAccessibilityLabel: "Os seus favoritos",
          tabBarIcon: ({ color }) => (
            <Icon name="heart" color={color} size={26} />
          ),
        }}
      />
      <Screen
        name="Perfil"
        component={Home}
        options={{
          tabBarLabel: "Perfil",
          tabBarAccessibilityLabel: "O seu perfil",
          tabBarIcon: ({ color }) => (
            <Icon name="account-circle" color={color} size={26} />
          ),
        }}
      />
    </Navigator>
  );
};
const styles = StyleSheet.create({
  barStyleShadow: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
});
export default Tabbar;
