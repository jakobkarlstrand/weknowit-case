import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import * as React from 'react';

import { StyleSheet, Text, View,ScrollView} from 'react-native';
import SvgUri from 'react-native-svg-uri';



export default function Country({route,navigation}) {

    const {city} = route.params;
    navigation.setOptions({ title: city.name })
    const flagURL = "https://hatscripts.github.io/circle-flags/flags/" + city.countryCode.toLowerCase() +".svg"

    return (

      <View style={{backgroundColor: "#FFF",flex:1,  justifyContent: 'flex-start' }}>
        <View style={styles.cityNameView}>
            <Text style={{fontSize: 40,color: "white",textAlign: "center", justifyContent: "center"}}>{city.name}</Text>
            <View style={styles.countryInfo}>
                <SvgUri
                    width="30"
                    height="30"
                    style={styles.flag}
                    source={{uri:flagURL}}
                />
                <Text style={{color: "white", marginLeft: 10}}>{city.countryName}</Text>
            </View>
        </View>
        <View style={styles.cityPopulationView}>
            <Text style={{fontSize: 20}}>Population</Text>
            <View style={styles.population}>
              <FontAwesomeIcon size={40} color="#504ED9" icon={faUserGroup}/>
              <Text style={{fontSize: 40, marginLeft: 20}}>{city.population}</Text>
            </View>
        </View>
        
       

      </View>
    );

    
  }


  const styles = StyleSheet.create({
    cityNameView:{
        backgroundColor: "#504ED9",
        paddingVertical: 80,
    },
    cityPopulationView:{
      flexDirection: "column",
      textAlign: "center", 
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 50,
    },
    countryInfo : {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 10
    },
    population : {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20
    }
    
  });