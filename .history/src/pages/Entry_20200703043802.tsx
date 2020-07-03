import {
  View,
  Text,
  ActivityIndicator,

  //select do react-native
} from "react-native";
import React, { useRef, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Entry = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text>Entry</Text>
      </View>
    </SafeAreaView>
  );
};

export default Entry;
