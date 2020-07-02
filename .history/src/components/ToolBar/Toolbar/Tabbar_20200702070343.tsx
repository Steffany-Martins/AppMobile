import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const { Navigator, Screen } = createMaterialBottomTabNavigator();

const Tabbar = () => {
  return (
    <Navigator>
      <Screen name="Home" component={} />
      <Screen name="Settings" component={} />
    </Navigator>
  );
};
export default Tabbar;
