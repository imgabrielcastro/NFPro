import React from "react";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Text, useTheme, TextInput } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import LoginHeader from "./LoginHeader";
import EmailFormSection from "./EmailFormSection"; 
import LoginFormSection from "./LoginFormSection";


type Props = {
  logoSource: any;
};

export default function Login() {
  const { colors } = useTheme();
  const [checked, setChecked] = useState<boolean>(false);
  const [keyboardVisible, setKeyboardVisible] = useState<boolean>(false);
  const [showLoginForm, setShowLoginForm] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [firstPage, setFirstPage] = useState<boolean>(true);

  const handleContinue = () => {
    setShowLoginForm(true);
    setFirstPage(false);
  };

  const handleBack = () => {
    setShowLoginForm(false);
    setFirstPage(true);
  };

  return (
    <View
      style={[styles.mainContainer, { backgroundColor: colors.background }]}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <LoginHeader
          logoSource={require("../../assets/images/logoNFPro.png")}
        />

        <EmailFormSection
          checked={checked}
          onToggleCheck={() => setChecked(!checked)}
          onContinue={(email: string) => {
            setEmail(email);
            setShowLoginForm(true);
          }}
        />

      </KeyboardAvoidingView>

      {showLoginForm && <LoginFormSection onLogin={handleContinue} email={email} onBack={handleBack} />}

     
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    position: "relative",
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

  loginContainer: {
    backgroundColor: "#fafafa",
    position: "absolute",
    bottom: 0,
    height: "82%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: "100%",
    padding: 24,
  },
});
