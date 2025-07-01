import React from 'react';
import BackgroundWithLogo from '../components/LoginPage/BackgroundWithLogo';
import ContainerForm from '../components/LoginPage/ContainerForm';
import { View } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
    <BackgroundWithLogo title="O MELHOR PARCEIRO PARA SEU NEGÓCIO!" logoSource={require('../assets/images/logoNFPro.png')} />
    <ContainerForm title="Informe seu e-mail para acessar" />
    </View>
  );
}
