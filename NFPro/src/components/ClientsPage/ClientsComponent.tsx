import React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";

import HeaderClient from "./ClientsHeader";
import ClientsContainer from "./ClientsContainer";

export default function ClientsList() {
  return (
    <View style={{ flex: 1 }}>
      <HeaderClient />
      <ClientsContainer />
    </View>
  );
}
