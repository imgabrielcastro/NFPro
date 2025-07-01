import React from 'react';
import 'react-native-gesture-handler'; 
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { theme } from './src/theme/theme'; 
import Routes from './src/routes/AuthStack'; 

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Routes />
        <StatusBar style="light" />
      </NavigationContainer>
    </PaperProvider>
  );
}
