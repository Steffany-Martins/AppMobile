import {
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
  //select do react-native
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Draggable from "react-native-draggable";

const Loader = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Image source={require("./../assets/Nuvem.png")} />
        <ActivityIndicator
          size="large"
          color="#FA3E7C"
          onTouchMove={() => navigation.navigate("Entry")}
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
