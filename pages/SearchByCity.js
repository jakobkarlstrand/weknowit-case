import * as React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ItemCity from '../components/ItemCity';


export default function SearchByCity() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ItemCity cityName={"Tokyo"} numInhabitants={10238321}/>
        <ItemCity cityName={"Tokyo"} numInhabitants={10238321}/>
        <ItemCity cityName={"Tokyo"} numInhabitants={10238321}/>
        <ItemCity cityName={"Tokyo"} numInhabitants={10238321}/>
      </View>
    );
  }