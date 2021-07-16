import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header';

export default function App() {
  return (
    <View>
      <Header title="People"/>
      <StatusBar style="auto" />
    </View>
  );
};
