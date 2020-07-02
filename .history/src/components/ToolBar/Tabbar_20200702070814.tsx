import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "../../pages/Home";

const { Navigator, Screen } = createMaterialBottomTabNavigator();

const Tabbar = () => {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
      <Screen name="Settings" component={Home} />
    </Navigator>
  );
};
export default Tabbar;
