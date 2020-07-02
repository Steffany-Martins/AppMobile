import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialIcons as Icon } from "@expo/vector-icons";

import Home from "../../pages/Home";
import {
  StyleSheet,
  Dimensions,
  useWindowDimensions,
  View,
} from "react-native";

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
          tabBarIcon: ({ color }) => <Icon name="tv" color={color} size={25} />,
        }}
      />
      <Screen
        name="Graduation"
        component={Home}
        options={{
          tabBarLabel: "Carreira",
          tabBarAccessibilityLabel: "Sua carreira e jornada",
          tabBarIcon: ({ color }) => (
            <Icon name="school" color={color} size={26} />
          ),
        }}
      />
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Início",
          tabBarAccessibilityLabel: "Página Principal",

          tabBarIcon: ({ color, focused }) => {
            if (focused === true) {
              return (
                <Icon
                  name="home"
                  style={styles.iconFocused}
                  color={color}
                  size={28}
                />
              );
            } else {
              return <Icon name="home" color={color} size={25} />;
            }
          },
        }}
      />
      <Screen
        name="Favoritos"
        component={Home}
        options={{
          tabBarLabel: "Favoritos",
          tabBarAccessibilityLabel: "Os seus favoritos",
          tabBarIcon: ({ color }) => (
            <Icon name="favorite" color={color} size={26} />
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
    paddingTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  iconFocused: {
    shadowColor: "#000",
    shadowOpacity: 0.53,
    shadowRadius: 5,

    // Android
    shadowOffset: {
      width: 0, // Same rules apply from above
      height: 1, // Can't both be 0
    },
  },
});
export default Tabbar;
