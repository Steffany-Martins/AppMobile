import {
  View,
  Text,
  StyleSheet,
  Button,
  //select do react-native
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Loader = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View>
        <Text>Loader</Text>
      </View>
    </SafeAreaView>
  );
};

export default Loader;
