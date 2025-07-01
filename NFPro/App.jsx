import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppProvider from './src/AppProvider';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <AppProvider>
        <AppNavigator />
      </AppProvider>
    </SafeAreaProvider>
  );
}
