import * as React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableHighlight } from 'react-native-web';

export default function ItemCity({cityName, numInhabitants}) {
  return (
    <View>
        <Text>{cityName}</Text>
        <Text>{numInhabitants}</Text>
    </View>
  )
}
