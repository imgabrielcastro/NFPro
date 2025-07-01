import React from "react";
import { StyleSheet, View, Dimensions } from "react-native"; 
import { Text, useTheme, TextInput } from "react-native-paper";
import * as Animatable from "react-native-animatable";

type Props = {
  title: string;
};

export default function ContainerForm({ title }: Props) {
  return (
    <View style={styles.background}>
      <Animatable.View 
        animation="fadeInUp" 
        style={styles.container}
      >
        <Text variant="titleLarge" style={styles.title}>{title}</Text>
        <TextInput style={styles.input}
        mode="outlined"
        outlineColor="#d8d8d8"
        activeOutlineColor="#03dac6"/> 
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1, 
    backgroundColor: '#212121',
  },
  container: {
    flex: 1,
    height: '90%',
    top: '20%', 
    backgroundColor: '#fafafa', 
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    padding: 16,
  },
  title: {
    paddingVertical: 20,
    color: '#6A6A6A',
    fontSize: 18,
  },
  input: {
    marginBottom: 10,
    paddingRight: 40,
    height: 40,
    fontSize: 14,
    borderRadius: 30,
    borderBlockColor: '#6A6A6A',
    color:  '#d8d8d8',
    borderColor: '#d8d8d8',
    backgroundColor: '#fafafa' 
  },
});