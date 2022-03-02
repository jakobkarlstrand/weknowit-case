import * as React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableHighlight } from 'react-native';

export default function ItemCity({cityName, numInhabitants}) {
  return (
    <View>
        <Text>{cityName}</Text>
        <Text>{numInhabitants}</Text>
    </View>
  )
}
