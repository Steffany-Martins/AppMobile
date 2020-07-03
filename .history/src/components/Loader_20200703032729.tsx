import {
  View,
  StyleSheet,
  Image,
  //select do react-native
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SvgUri from "react-native-svg-uri";

const Loader = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <SvgUri
          width="200"
          height="200"
          source={require("./project/assest/images/test.svg")}
        />
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
