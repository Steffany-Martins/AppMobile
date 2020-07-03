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
        <View>
          <Draggable
            x={100}
            y={100}
            renderSize={56}
            renderColor="black"
            renderText="Loading..."
            isCircle
            shouldReverse
            onShortPressRelease={() => navigation.navigate("Entry")}
          />
          <Draggable
            x={50}
            y={50}
            imageSource={require("./../assets/Nuvem.png")}
            onShortPressRelease={() => navigation.navigate("Entry")}
          ></Draggable>
        </View>
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
