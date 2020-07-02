import {
  View,
  Text,
  StyleSheet,
  //select do react-native
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <View>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
