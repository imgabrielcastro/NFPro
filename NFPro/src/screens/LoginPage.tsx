import React from 'react';
import Login from '../components/LoginPage/LoginComponent'
import { View } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
    <Login/>
    </View>
  );
}
