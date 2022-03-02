import * as React from 'react';

import { StyleSheet, Text, View,Button, ActivityIndicator,TextInput, ScrollView,ScrollAreaView,Image } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import ItemCity from "../components/ItemCity"



export default function Country({route,navigation}) {

    const [isLoading, setLoading] = React.useState(true);
    const [data, setData] = React.useState([]);
    const {city} = route.params;
    navigation.setOptions({ title: city.name })


    return (
      <ScrollView>
      <View style={{backgroundColor: "#FFF", flex: 1,  justifyContent: 'flex-start' }}>
        <View style={styles.cityNameView}>
            <Text style={{fontSize: 40,color: "white",textAlign: "center", justifyContent: "center"}}>{city.name}</Text>
        </View>
        <View style={styles.cityPopulationView}>
            <Text style={{textAlign: "center", justifyContent: "center"}}>{city.population}</Text>
        </View>
        
       

      </View>

    
      </ScrollView>
    );

    
  }


  const styles = StyleSheet.create({
    cityNameView:{
        backgroundColor: "#504ED9",
        paddingVertical: 80,
    }
    
  });