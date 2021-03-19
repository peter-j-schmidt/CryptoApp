import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import AllCryptosList from './components/AllCryptosList';
import MyCryptosList from './components/MyCryptosList';
import CryptoInfo from './components/CryptoInfo';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Open up App.js to start working on your app!</Text>
        <AllCryptosList />
        <MyCryptosList />
        <CryptoInfo />
      <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
