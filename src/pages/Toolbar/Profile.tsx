import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  StatusBar,
  //select do react-native
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign as Icon } from "@expo/vector-icons";
import ProgressCircle from "react-native-progress-circle";
import { LinearGradient } from "expo-linear-gradient";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;
const DEVICE_FONT = Dimensions.get("window").fontScale;

const Profile = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <LinearGradient
            colors={["#FF5B7F", "#FC9272"]}
            style={{
              left: 0,
              right: 0,
              top: 0,
              height: DEVICE_HEIGHT,
              flex: 1,
            }}
          >
            <Text accessibilityLabel="Perfil">Perfil</Text>
            <ProgressCircle
              percent={30}
              radius={50}
              borderWidth={8}
              color="#3F5CC8"
              shadowColor="#999"
              bgColor="#fff"
            >
              <Icon name="setting" size={20} color="white" />
              <Image
                source={require("./../../assets/Profile/design icon.png")}
                accessibilityLabel="Imagem Perfil"
                accessibilityHint="Imagem de perfil pressione trocar foto"
              />
            </ProgressCircle>
          </LinearGradient>
          <View></View>
        </View>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    height: DEVICE_HEIGHT,
    width: DEVICE_WIDTH,
  },
  header: {
    height: DEVICE_HEIGHT - 500,
    width: DEVICE_WIDTH,
  },
  titleProfile: {
    color: "#fff",
    fontFamily: "Poppins_400Regular" || DEVICE_FONT,
  },
  titleName: {
    color: "#fff",
    fontFamily: "Poppins_500Medium" || DEVICE_FONT,
  },
  detailName: {
    fontFamily: "Poppins_400Regular" || DEVICE_FONT,
    fontSize: 12,
  },
  box: {
    margin: 15,
    marginBottom: 20,
  },
  boxAbout: {
    marginBottom: 10,
  },
  boxIcon: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
  },
  imageQuiz: {
    height: 20,
    width: 30,
  },
});

export default Profile;
