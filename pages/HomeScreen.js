import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCity, faEarthEurope } from '@fortawesome/free-solid-svg-icons'
import IconButton from '../components/IconButton';

export default function HomeScreen({ navigation }) {


  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.homeImage} source={require("../assets/cityPop.png")} />
      </View>
      <View style={styles.buttonContainer}>
        <IconButton icon={faCity} onPress={() => navigation.navigate('SearchByCity')}>Search by city</IconButton>
        <IconButton icon={faEarthEurope} onPress={() => navigation.navigate('SearchByCountry')}>Search by country</IconButton>
      </View>
    </View>
  );


}


const styles = StyleSheet.create({


 
  buttonContainer: {
    paddingHorizontal: 20,
  },
  homeImage: {
    marginTop: -100,
    width: "100%",
    resizeMode: "contain"
  },
  imageContainer: {
    marginTop: -10,
    justifyContent: "center",
    alignItems: "center"
  }
});