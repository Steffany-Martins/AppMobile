import {
  View,
  Text,
  StyleSheet,
  Button,
  //select do react-native
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const Entry = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text>Entry</Text>
      </View>
    </SafeAreaView>
  );
};

export default Entry;
