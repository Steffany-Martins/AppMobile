/*Bar*/
import { StatusBar } from "react-native";
/**/
/*React*/
import React from "react";
/** */
/*App Loading*/
import { AppLoading } from "expo";
/***/
/*Fontes */
import { Ubuntu_700Bold, useFonts } from "@expo-google-fonts/ubuntu";
import { Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto";
/***/
/*Routes*/
import Routes from "./src/routes";
/** */

export default function App() {
  const [fontsLoaded] = useFonts({
    Ubuntu_700Bold,
    Roboto_400Regular,
    Roboto_500Medium,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </>
  );
}
