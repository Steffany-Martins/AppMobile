import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialIcons as Icon } from "@expo/vector-icons";

import Home from "../../pages/Home";
import { Platform } from "react-native";

const { Navigator, Screen } = createMaterialBottomTabNavigator();
/*Tab bar
Monitor 
Graduation
Home
Heart *
Account-circle *
*/
const Tabbar = () => {
  return (
    <Navigator
      initialRouteName="Home"
      activeColor="#FC9272"
      inactiveColor="#dddd"
      labeled={false}
      barStyle={{ backgroundColor: "#fff" }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Início",
          tabBarAccessibilityLabel: "Página Principal",
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
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
            <Icon name="heart-circle" color={color} size={26} />
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
export default Tabbar;
