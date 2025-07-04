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
  const [showLoginForm, setShowLoginForm] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
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

      {showLoginForm && (
        <LoginFormSection
          onLogin={handleContinue}
          email={email}
          onBack={handleBack}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    position: "relative",
  }, 
});

