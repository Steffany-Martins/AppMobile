<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
=======
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
=======
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
>>>>>>> parent of 707e2fd... Revert "svg toolbar button"

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
<<<<<<< HEAD

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
>>>>>>> parent of af84f30... svg toolbar button
=======
>>>>>>> parent of 707e2fd... Revert "svg toolbar button"
