import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
/*Bar*/
import { StatusBar } from "react-native";
/** */
/*App Loading*/
import { AppLoading } from "expo";
/***/
/*Fontes */
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
/***/
/*Routes*/
import Routes from "./src/routes";
/** */
export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_500Medium,
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
