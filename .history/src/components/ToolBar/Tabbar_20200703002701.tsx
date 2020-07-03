import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialIcons as Icon } from "@expo/vector-icons";
/** */
import Home from "../../pages/Toolbar/Home";
import Graduation from "../../pages/Toolbar/Graduation";
import Favorite from "../../pages/Toolbar/Favorite";
import Monitor from "../../pages/Toolbar/Monitor";
import Profile from "../../pages/Toolbar/Profile";

/** */

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
        component={Monitor}
        options={{
          tabBarLabel: "Monitoramento de pontos",
          tabBarAccessibilityLabel: "Pontos e informações de comunidades",
          tabBarIcon: ({ color }) => <Icon name="tv" color={color} size={25} />,
        }}
      />
      <Screen
        name="Graduation"
        component={Graduation}
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
                  size={27}
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
        component={Favorite}
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
        component={Profile}
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
    borderTopEndRadius: 1000,
    backgroundColor: "#fff",
    paddingTop: 2,
    paddingBottom: 12,
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
    shadowOpacity: 1,
    textShadowRadius: 10,
    textShadowOffset: { width: 0, height: 0.9 },
  },
});
export default Tabbar;
