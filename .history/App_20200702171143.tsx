import React from "react";
import { StyleSheet, Text, View } from "react-native";
/*Bar*/
import { StatusBar } from "react-native";
/** */
/*App Loading*/
import { AppLoading } from "expo";
/***/
/*Fontes */
import { useFonts, Inter_700Bold } from "@expo-google-fonts/inter";
import { Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto";
/***/
/*Routes*/
import Routes from "./src/routes";
/** */

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_700Bold,
    Roboto_400Regular,
    Roboto_500Medium,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar barStyle="default" backgroundColor="transparent" translucent />
      <Routes />
    </>
  );
}
