import {
  View,
  StyleSheet,
  Image,
  //select do react-native
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Loader = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ justifyContent: "center", alignContent: "center" }}>
        <Image
          style={{ alignSelf: "center" }}
          source={require("./../assets/Nuvem_logo.png")}
        />
      </View>
    </SafeAreaView>
  );
};

export default Loader;
