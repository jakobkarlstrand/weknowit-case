import * as React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function HomeScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
        title="Search by city"
        onPress={() => navigation.navigate('SearchByCity')}
      />
      <Button
        title="Search by country"
        onPress={() => navigation.navigate('SearchByCountry')}
      />
      </View>
    );
  }