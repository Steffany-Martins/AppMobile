import {
  View,
  Text,
  StyleSheet,
  //select do react-native
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Favorite = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text>Entry</Text>
      </View>
    </SafeAreaView>
  );
};

export default Favorite;
