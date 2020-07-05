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
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { ScrollView } from "react-native-gesture-handler";

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;
const DEVICE_FONT = Dimensions.get("window").fontScale;

const Profile = () => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View style={styles.container}>
        <LinearGradient
          colors={["#FF5B7F", "#FC9272"]}
          style={{
            left: 0,
            right: 0,
            top: 0,
            flex: 1,
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
          }}
        >
          <View style={styles.header}>
            <Text style={styles.titleProfile} accessibilityLabel="Perfil">
              Perfil
            </Text>
            <Icon
              name="setting"
              size={30}
              style={{ marginLeft: DEVICE_WIDTH - 40 }}
              color="white"
            />

            <ProgressCircle
              percent={50}
              radius={62}
              borderWidth={12}
              color="#3F5CC8"
              shadowColor="#fff"
              bgColor="#fff"
            >
              <Image
                source={require("./../../assets/Profile/foto_perfil.png")}
                style={{ height: 120 }}
                accessibilityLabel="Imagem Perfil"
                accessibilityHint="Imagem de perfil pressione trocar foto"
              />
            </ProgressCircle>
            <Text style={styles.titleName}>Letícia Oliveira</Text>
            <Text style={styles.detailName}>LV 16</Text>
            <Text style={styles.detailName}>300/600 XP</Text>
            <Icon
              name="Trophy"
              size={40}
              color="white"
              style={{ marginTop: 10 }}
            />
          </View>
        </LinearGradient>

        <View style={{ margin: 1 }}>
          <View style={styles.boxAbout}>
            <Text
              style={{
                color: "#515C6F",
                marginLeft: 22,
                fontSize: 20,
                fontFamily: "Poppins_700Bold",
              }}
            >
              Sobre
            </Text>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                marginLeft: 15,
                flex: 1,
              }}
            >
              <View style={styles.boxIcon}>
                <Image
                  source={require("./../../assets/Profile/design_icon.png")}
                />

                <Text style={styles.titleCareer}>Design</Text>
                <Text style={styles.titleInterest}>Área de interesse</Text>
              </View>
              <View style={styles.boxIcon}>
                <Image
                  source={require("./../../assets/Profile/xp.png")}
                  style={{ width: 18, height: 25 }}
                />

                <Text style={styles.titleCareer}>4950</Text>
                <Text style={styles.titleInterest}>Total de XP</Text>
              </View>
              <View style={styles.boxIcon}>
                <Image
                  source={require("./../../assets/Profile/trophy_2.png")}
                />

                <Text style={styles.titleCareer}>01</Text>
                <Text style={styles.titleInterest}>Suas Conquistas</Text>
              </View>
              <View style={styles.boxIcon}>
                <Image
                  source={require("./../../assets/Profile/quiz_icon.png")}
                />

                <Text style={styles.titleCareer}>18</Text>
                <Text style={styles.titleInterest}>Quizes Concluídos</Text>
              </View>
            </View>
          </View>
          <View style={styles.boxQuiz}>
            <Text
              style={{
                color: "#757575",
                margin: 20,
                marginTop: 30,
                marginLeft: 10,
                fontFamily: "Poppins_700Bold",
                fontSize: 20,
              }}
            >
              Quizes concluídos
            </Text>
            <View style={styles.imageQuiz}>
              <ScrollView></ScrollView>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    height: DEVICE_HEIGHT - 100,
    width: DEVICE_WIDTH,
    backgroundColor: "#fff",
  },
  header: {
    marginTop: 22,
    alignItems: "center",
  },
  titleProfile: {
    position: "absolute",
    color: "#fff",
    fontSize: 16,
    fontFamily: "Poppins_400Regular" || DEVICE_FONT,
  },
  titleName: {
    marginTop: 4,
    color: "#fff",
    fontSize: 20,
    fontFamily: "Poppins_500Medium" || DEVICE_FONT,
  },
  detailName: {
    fontFamily: "Poppins_400Regular" || DEVICE_FONT,
    color: "#fff",
    fontSize: 14,
  },

  boxAbout: {
    padding: 20,
    paddingLeft: 2,
    marginBottom: 20,
  },
  titleCareer: {
    color: "#757575",
    paddingLeft: 5,
  },
  titleInterest: {
    fontFamily: "Poppins_700Bold" || DEVICE_FONT,
    color: "#515C6F",
  },
  boxQuiz: {
    margin: 15,
    paddingLeft: 1,
    paddingTop: 35,
    marginBottom: 20,
  },
  boxIcon: {
    backgroundColor: "white",
    marginBottom: 12,
    paddingTop: 4,
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    height: 50,
    paddingHorizontal: 20,
    width: 160,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },

  imageQuiz: {
    height: 20,
    width: 30,
  },
});

export default Profile;
