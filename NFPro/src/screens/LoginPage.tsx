import React from 'react';
import BackgroundWithLogo from '../components/LoginPage/BackgroundWithLogo';
import ContainerForm from '../components/LoginPage/ContainerForm';
import Login from '../components/LoginPage/LoginComponent'
import { View } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
    <Login logoSource={require('../assets/images/logoNFPro.png')}/>
    </View>
  );
}
