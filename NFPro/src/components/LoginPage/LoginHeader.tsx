import React from "react";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
} from "react-native";
import { Text, useTheme} from "react-native-paper";
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

export default function LoginHeader({ logoSource }: Props) {
  const { colors } = useTheme();

  return (
    <View
      style={[styles.mainContainer, { backgroundColor: colors.background }]}
    >
      <View style={styles.upperSection}>
        <View style={styles.containerLogo}>
          <Image source={logoSource} style={styles.logo} resizeMode="contain" />
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
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    position: "relative",
  },
  upperSection: {
    height: "100%",
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
});
