import React, { useEffect } from "react";
/*Bar*/
import { StatusBar, Platform } from "react-native";
/** */
/*App Loading*/
import { AppLoading } from "expo";
/***/
/*Fontes */
import { useFonts, Inter_700Bold } from "@expo-google-fonts/inter";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import SplashScreen from "react-native-splash-screen";
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
      {Platform.OS === "ios" && <StatusBar barStyle="light-content" />}

      <Routes />
    </>
  );
}
