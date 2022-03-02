import * as React from 'react';
import HomeScreen from './pages/HomeScreen';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions,DefaultTheme  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchByCountry from './pages/SearchByCountry';
import SearchByCity from './pages/SearchByCity';
import Country from './pages/Country';
import City from './pages/City'


const Stack = createNativeStackNavigator();

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#504ED9',
    background: "FAFAFA",
  },
};

export default function App() {
  return (
    <NavigationContainer theme={AppTheme}>
     <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: "transparent", border: "none"}}}>
       <Stack.Screen name="Home" component={HomeScreen}/>
       <Stack.Screen name="SearchByCountry" component={SearchByCountry} options={{title: "Search by country"}}/>
       <Stack.Screen name="SearchByCity" component={SearchByCity} options={{title: "Search by city"}}/>
       <Stack.Screen name="Country" component={Country} options={{title: "Country"}}/>
       <Stack.Screen name="City" component={City} options={{title: "City"}}/>
     </Stack.Navigator>
    </NavigationContainer>
  );
}

