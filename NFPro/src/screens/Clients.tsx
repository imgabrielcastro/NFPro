import React from 'react';
import { View } from 'react-native';
import HeaderClient from '../components/ClientsPage/ClientsHeader';
import ClientsList from '../components/ClientsPage/ClientsComponent'

export default function Clients() {
  return (
    <View style={{ flex: 1 }}>
      <ClientsList />
    </View>
  );
}
