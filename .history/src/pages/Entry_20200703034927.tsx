import {
  View,
  Text,
  StyleSheet,
  Button,
  Animated,
  //select do react-native
} from "react-native";
import React, { useRef, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Entry = () => {
  useEffect(() => {
    /* completion callback */
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text>Entry</Text>
      </View>
    </SafeAreaView>
  );
};

export default Entry;