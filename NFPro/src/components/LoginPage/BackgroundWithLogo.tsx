import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import * as Animatable from "react-native-animatable";

type Props = {
  title: string;
  logoSource: any; 
};

export default function BackgroundWithLogo({ title, logoSource }: Props) {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={{flex: 2}}>
      <Image source={logoSource} style={styles.logo} resizeMode="contain" />
      <Text variant="displaySmall" style={[styles.title, { color: colors.primary }]}>
        {title}
      </Text> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  logo: {
    width: '55%',
    height: 120,
    marginTop: '5%',
    right: '5%',
  },
  title: {
    fontWeight: 'bold',
    fontFamily: 'Helvetica Neue',
    top: '55%',
    right: '2%',
    zIndex: 1,
  },
});
