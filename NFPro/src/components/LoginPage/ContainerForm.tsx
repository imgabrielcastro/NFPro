import React from "react";
import { StyleSheet, View, Dimensions } from "react-native"; 
import { Text, useTheme } from "react-native-paper";
import * as Animatable from "react-native-animatable";

type Props = {
  title: string;
};

export default function BackgroundWithLogo({ title }: Props) {
  return (
    <View style={styles.background}>
      <Animatable.View 
        animation="fadeInUp" 
        style={styles.container}
      >
        <Text variant="titleLarge" style={styles.title}>{title}</Text>
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
    width: '100%', 
    height: '90%',
    top: '20%', 
    backgroundColor: '#fafafa', 
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    padding: 16,
  },
  title: {
    paddingVertical: 16,
    color: '#6A6A6A',
    fontSize: 18,
  },
});