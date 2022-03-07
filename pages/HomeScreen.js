import * as React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCity,faEarthEurope } from '@fortawesome/free-solid-svg-icons'

export default function HomeScreen({navigation}) {


    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
        <Image style={styles.homeImage} source={require("../assets/cityPop.png")} />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('SearchByCity')}>
            <FontAwesomeIcon size={30} color="#FAFAFA" icon={faCity}/>
            <Text style={styles.buttonText}>Search by city</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('SearchByCountry')}>
            <FontAwesomeIcon size={30} color="#FAFAFA" icon={faEarthEurope}/>
            <Text style={styles.buttonText}>Search by country</Text>
          </TouchableOpacity>
        </View>
      </View>
    );

    
  }


  const styles = StyleSheet.create({


    buttonStyle: {
      marginBottom: 10,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: "#504ED9",
      paddingHorizontal: 40,
      paddingVertical: 20,
      borderRadius: 6,
      flexDirection: "row",
      shadowColor: '#171717',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.5,
      shadowRadius: 8,
    },
    buttonText:{
      color: "#FAFAFA",
      fontSize: 20,
      marginLeft: 20,
    },
    buttonContainer: {
      paddingHorizontal: 20,
    },
    homeImage : {
      marginTop: -100,
      width: "100%",
    resizeMode: "contain"
    },
    imageContainer: {
      justifyContent: "center",
      alignItems: "center"
    }
  });