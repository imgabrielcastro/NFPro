import React from "react";
import { StyleSheet, View } from "react-native";
import { useTheme, Text } from "react-native-paper";
export default function HeaderClient() {
  const { colors } = useTheme();

  return (
    <View style={[styles.header, { backgroundColor: colors.background }]}>
      <Text
        variant="titleMedium"
        style={[styles.title, { color: colors.primary }]}
      >
        Clientes
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: "12%",
    width: "100%",
    padding: 10,
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    alignContent: "flex-start",
    marginTop: 40,
    left: 10,
  },
});
 