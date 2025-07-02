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

type Props = {
  logoSource: any;
};

export default function Login({ logoSource }: Props) {
  const { colors } = useTheme();
  const [checked, setChecked] = useState<boolean>(false);
  const [keyboardVisible, setKeyboardVisible] = useState<boolean>(false);
  const [showLoginForm, setShowLoginForm] = useState<boolean>(false);
  const [firstPage, setFirstPage] = useState<boolean>(true)

  const handleContinue = () => {
    setShowLoginForm(true);
    setFirstPage(false);
  };

  return (
    <View
      style={[styles.mainContainer, { backgroundColor: colors.background }]}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <LoginHeader logoSource={require('../../assets/images/logoNFPro.png')}/>

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
              onPress={handleContinue}
            >
              <Text
                variant="labelLarge"
                style={{ color: "#fafafa", fontWeight: "bold" }}
              >
                Continuar
              </Text>
            </TouchableOpacity>

            {!keyboardVisible && firstPage && showLoginForm && <View style={{ paddingTop: 40 }}></View>}
          </View>
        </View>


      </KeyboardAvoidingView>

      {showLoginForm && (
          <View style={styles.loginContainer}>
            <Text
              variant="headlineMedium"
              style={{ fontWeight: "bold", backgroundColor: colors.primary }}
            >
              Boas vindas novamente!{" "}
            </Text>

            <TextInput
              mode="outlined"
              label=""
              outlineColor="#d4d4d4"
              activeOutlineColor="#787878"
              style={styles.input}
            />

            <TextInput
              mode="outlined"
              label="Senha"
              outlineColor="#d4d4d4"
              activeOutlineColor="#787878"
              style={styles.input}
            />

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
              onPress={handleContinue}
            >
              <Text
                variant="labelLarge"
                style={{ color: "#fafafa", fontWeight: "bold" }}
              >
                Entrar
              </Text>
            </TouchableOpacity>
          </View>
        )}
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
