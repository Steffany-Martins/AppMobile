import {
  View,
  Text,
  StyleSheet,
  Button,
  //select do react-native
} from "react-native";
import React, { Fragment, useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import { SafeAreaView } from "react-native-safe-area-context";

const Loader = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text>Loader</Text>
      </View>
    </SafeAreaView>
  );
};

export default Loader;
