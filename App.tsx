import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { DrawerNavigation } from './src/navigation/DrawerNavigation';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <>
      <StatusBar style={'auto'} translucent={true} />
      <DrawerNavigation />
    </>
  );
}
