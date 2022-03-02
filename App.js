import * as React from 'react';
import HomeScreen from './pages/HomeScreen';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchByCountry from './pages/SearchByCountry';
import SearchByCity from './pages/SearchByCity';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="Home" component={HomeScreen}/>
       <Stack.Screen name="SearchByCountry" component={SearchByCountry} options={{title: "Search by country"}}/>
       <Stack.Screen name="SearchByCity" component={SearchByCity} options={{title: "Search by city"}}/>
     </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
