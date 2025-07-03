import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Text, TextInput, useTheme } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

type Props = {
  checked: boolean;
  onToggleCheck: () => void;
  onContinue: (email: string) => void;
};

const EmailFormSection: React.FC<Props> = ({
  checked,
  onToggleCheck,
  onContinue,
}) => {
  const { colors } = useTheme();
  const [email, setEmail] = useState("");

  return (
    <View style={{ height: "40%", width: "100%" }}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#fafafa",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingHorizontal: 24,
          paddingTop: 24,
        }}
      >
        <Text
          variant="titleMedium"
          style={{ marginVertical: 12, color: "#666" }}
        >
          Informe seu e-mail para acessar
        </Text>

        <TextInput
          mode="outlined"
          label="Endereço de e-mail"
          outlineColor="#d4d4d4"
          activeOutlineColor="#787878"
          style={{
            backgroundColor: "#fafafa",
            height: 40,
            borderRadius: 12,
            marginBottom: 16,
          }}
          value={email}
          onChangeText={setEmail}
        />

        <View style={{ flexDirection: "row", paddingVertical: 10 }}>
          <TouchableOpacity
            onPress={onToggleCheck}
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
          onPress={() => onContinue(email)}
        >
          <Text
            variant="labelLarge"
            style={{ color: "#fafafa", fontWeight: "bold" }}
          >
            Continuar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EmailFormSection;
