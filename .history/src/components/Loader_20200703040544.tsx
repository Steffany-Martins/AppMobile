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
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Image source={require("./../assets/Nuvem.png")} />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    justifyContent: "center",
    alignContent: "center",
  },
});
export default Loader;
