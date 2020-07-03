import {
  View,
  StyleSheet,
  Image,
  Text,
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
            renderSize={0}
            renderColor="#E3724F"
            renderText="..."
            isCircle
            shouldReverse
          />
          <Draggable
            x={50}
            y={50}
            onDragRelease={() => navigation.navigate("Entry")}
          >
            <Image source={require("./../assets/Nuvem.png")} />
          </Draggable>
          <Text>Aperte, puxe ou pressione a nuvem!</Text>
          <Text>Vamos começar a sua jornada.</Text>
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
