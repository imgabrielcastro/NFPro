import React from "react";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Text, useTheme, TextInput } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as Animatable from "react-native-animatable";

const fitnessIcons = [
  "dumbbell",
  "weight-lifter",
  "run-fast",
  "yoga",
  "arm-flex",
  "bike",
  "swim",
  "karate",
  "weight",
];

const FitnessIconCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === fitnessIcons.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.iconContainer}>
      <Animatable.View
        key={currentIndex}
        animation="fadeInUp"
        duration={1000}
        style={styles.iconWrapper}
      >
        <MaterialCommunityIcons
          name={fitnessIcons[currentIndex]}
          size={38}
          color="#FAFAFA"
        />
      </Animatable.View>
    </View>
  );
};

type Props = {
  logoSource: any;
};

export default function Login({ logoSource }: Props) {
  const { colors } = useTheme();
  const [checked, setChecked] = useState<boolean>(false);
  const [keyboardVisible, setKeyboardVisible] = useState<boolean>(false);

  return (
    <View
      style={[styles.mainContainer, { backgroundColor: colors.background }]}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.upperSection}>
          <View style={styles.containerLogo}>
            <Image
              source={logoSource}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <View style={styles.midContainer}>
            <View style={styles.midText}>
              <Text style={styles.slogan} variant="displaySmall">
                O MELHOR PARCEIRO PARA SEU NEGÓCIO!
              </Text>
            </View>
            <FitnessIconCarousel />
          </View>
        </View>

        <View style={styles.lowerSection}>
          <View style={styles.containerForm}>
            <Text
              variant="titleMedium"
              style={[styles.title, { color: "#666" }]}
            >
              Informe seu e-mail para acessar
            </Text>
            <TextInput
              mode="outlined"
              label="Endereço de e-mail"
              outlineColor="#d4d4d4"
              activeOutlineColor="#787878"
              style={styles.input}
            />

            <View style={styles.checkEmail}>
              <TouchableOpacity
                onPress={() => setChecked(!checked)}
                style={{ flexDirection: "row", alignItems: "center" }}
              >
                <MaterialCommunityIcons
                  name={checked ? "checkbox-marked" : "checkbox-blank-outline"}
                  size={24}
                  color={checked ? "#212121" : "#666"}
                />

                <Text style={{ color: "#666", marginLeft: 8 }}>
                  Lembrar meu e-mail
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={{
                marginTop: 35,
                backgroundColor: colors.background,
                borderRadius: 12,
                height: 60,
                paddingVertical: 16,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                variant="labelLarge"
                style={{ color: "#fafafa", fontWeight: "bold" }}
              >
                Continuar
              </Text>
            </TouchableOpacity>

            {!keyboardVisible && <View style={{ paddingTop: 40 }}></View>}
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  upperSection: {
    height: "60%",
  },
  containerLogo: {
    flex: 1,
    alignItems: "flex-start",
    paddingLeft: 24,
    paddingTop: 24,
  },
  logo: {
    width: 200,
    height: 150,
    right: "6%",
  },
  midContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 40,
    paddingHorizontal: 24,
    top: 15,
  },
  midText: {
    flex: 1,
  },
  slogan: {
    textAlign: "left",
    color: "#FAFAFA",
    fontWeight: "bold",
  },
  iconContainer: {
    width: 38,
    justifyContent: "center",
    alignItems: "center",
    bottom: 42,
  },
  iconWrapper: {
    position: "absolute",
  },
  lowerSection: {
    height: "40%",
    width: "100%",
  },
  containerForm: {
    flex: 1,
    backgroundColor: "#fafafa",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  title: {
    marginVertical: 12,
  },
  input: {
    backgroundColor: "#fafafa",
    height: 40,
    borderBlockColor: "#666",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderRadius: 12,
  },
  checkEmail: {
    flexDirection: "row",
    paddingVertical: 10,
    color: "#666",
  },
});
