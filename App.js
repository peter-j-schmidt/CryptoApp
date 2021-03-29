import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import AllCryptosList from './components/AllCryptosList';
import MyCryptosList from './components/MyCryptosList';
import CryptoInfo from './components/CryptoInfo';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello, world!</Text>

      {/* <ScrollView>
        <Text>Open up App.js to start working on your app!</Text>
        <AllCryptosList />
        <MyCryptosList />
        <CryptoInfo />
      <StatusBar style="auto" />
      </ScrollView> */}
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
