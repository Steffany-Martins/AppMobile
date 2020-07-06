import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  //select do react-native
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { AntDesign as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const DEVICE_HEIGHT = Dimensions.get("window").height;
const DEVICE_FONT = Dimensions.get("window").fontScale;
const DEVICE_WIDTH = Dimensions.get("window").width;

const Home = () => {
  const navigation = useNavigation();
  function handleGoBack() {
    return navigation.goBack();
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ height: DEVICE_HEIGHT + 700 }}>
          <View style={styles.boxTitle}>
            <TouchableOpacity
              onPress={handleGoBack}
              onAccessibilityTap={handleGoBack}
              accessible={true}
              accessibilityLabel="Voltar"
              accessibilityHint="Pressione para voltar"
            >
              <Icon
                name="arrowleft"
                size={20}
                color="black"
                style={{ marginTop: 10, position: "absolute", paddingLeft: 10 }}
              />
              <Text style={styles.title}>Meu Feed</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.boxImage}>
            <Image
              source={require("./../../assets/nãoMeFacaPensa.png")}
              accessibilityLabel="Livro Não Me Faça Pensar"
              style={{
                height: DEVICE_HEIGHT - 300,
                minHeight: DEVICE_HEIGHT - 490,
                maxHeight: DEVICE_HEIGHT - 200,
              }}
            />
          </View>
          <View style={styles.boxText} accessible={true} focusable={true}>
            <Text style={styles.titleCaption}>Capítulo 01</Text>
            <Text style={styles.boxCaption} accessibilityRole="adjustable">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac
              tellus feugiat, tincidunt arcu eget, consequat purus. Nulla
              tristique sapien eget auctor pulvinar. Aliquam vitae commodo
              lectus. Mauris aliquam consectetur dui vel sagittis. Ut pulvinar
              purus ut lorem. ornare, in tincidunt est varius. In mollis gravida
              nisl ut mattis. Duis felis nunc, scelerisque in mi eget, sagittis
              tincidunt diam. Donec a tortor vitae urna convallis vulputate.
              Etiam efficitur velit felis, eu mattis dui vehicula eu. Cras
              congue placerat tincidunt. Donec eros sem, euismod vel nunc
              consectetur, tristique faucibus massa. Donec sed dignissim diam.
              Nulla volutpat, erat eu auctor feugiat, massa ex lacinia purus, ut
              sagittis nulla mi sit amet elit. Duis vestibulum mattis magna vel
              sollicitudin. Integer in arcu auctor odio bibendum tincidunt.
              Fusce tempor dui in mi tristique, sed sagittis tellus venenatis.
              Nulla molestie mauris eu vulputate viverra. Phasellus mattis,
              velit eget venenatis viverra, dui arcu ullamcorper ligula, nec
              vulputate felis tellus eget libero. Nam nec urna eget mauris
              vestibulum mattis nec a ante. Nulla id enim mauris. Donec cursus
              sapien sit amet ultricies suscipit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Morbi ac tellus feugiat, tincidunt
              arcu eget, consequat purus. Nulla tristique sapien eget auctor
              pulvinar. Aliquam vitae commodo lectus. Mauris aliquam consectetur
              dui vel sagittis. Ut pulvinar purus ut lorem. ornare, in tincidunt
              est varius. In mollis gravida nisl ut mattis. Duis felis nunc,
              scelerisque in mi eget, sagittis tincidunt diam. Donec a tortor
              vitae urna convallis vulputate. Etiam efficitur velit felis, eu
              mattis dui vehicula eu. Cras congue placerat tincidunt. Donec eros
              sem, euismod vel nunc consectetur, tristique faucibus massa. Donec
              sed dignissim diam. Nulla volutpat, erat eu auctor feugiat, massa
              ex lacinia purus, ut sagittis nulla mi sit amet elit. Duis
              vestibulum mattis magna vel sollicitudin. Integer in arcu auctor
              odio bibendum tincidunt. Fusce tempor dui in mi tristique, sed
              sagittis tellus venenatis. Nulla molestie mauris eu vulputate
              viverra. Phasellus mattis, velit eget venenatis viverra, dui arcu
              ullamcorper ligula, nec vulputate felis tellus eget libero. Nam
              nec urna eget mauris vestibulum mattis nec a ante. Nulla id enim
              mauris. Donec cursus sapien sit amet ultricies suscipit.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  boxTitle: {
    height: 65,
  },
  title: {
    fontFamily: "Poppins_400Regular",
    fontSize: 20 || DEVICE_FONT,
    paddingLeft: 40,
    paddingTop: 10,
  },
  boxImage: {
    zIndex: 1,
  },
  boxText: {
    position: "absolute",
    top: DEVICE_HEIGHT - 300,
    backgroundColor: "#fff",
    shadowColor: "#E7EAF0",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
    padding: 30,
    textAlign: "justify",
    justifyContent: "center",
    borderRadius: 20,
    margin: 30,
    marginEnd: 50,
  },
  titleCaption: {
    fontFamily: "Poppins_400Regular",
    fontSize: 14 || DEVICE_FONT,
    paddingLeft: 5,
    paddingBottom: 10,
    paddingTop: 10,
    color: "#FD7E77",
  },
  boxCaption: {},
});
export default Home;
