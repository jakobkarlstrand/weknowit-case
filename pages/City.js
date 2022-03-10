import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import * as React from 'react';

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SvgUri } from 'react-native-svg';
import numberWithSpaces from '../utils/numberWithSpace';



export default function Country({ route, navigation }) {

  const { geoData } = route.params;
  const flagURL = "https://hatscripts.github.io/circle-flags/flags/" + geoData.countryCode.toLowerCase() + ".svg"


  React.useEffect(() =>{
    navigation.setOptions({ title: geoData.name })
  },[])

  return (

    <View style={{ backgroundColor: "#FFF", flex: 1, justifyContent: 'flex-start' }}>
      <View style={styles.cityNameView}>
        <Text style={{ fontSize: 40, color: "white", textAlign: "center", justifyContent: "center" }}>{geoData.name}</Text>
        <View style={styles.countryInfo}>
          <SvgUri
            width="30"
            height="30"
            style={styles.flag}
            uri={flagURL}
          />
          <Text style={{ color: "white", marginLeft: 10 }}>{geoData.countryName}</Text>
        </View>
      </View>
      <View style={styles.cityPopulationView}>
        <Text style={{ fontSize: 20 }}>Population</Text>
        <View style={styles.population}>
          <FontAwesomeIcon size={40} color="#504ED9" icon={faUserGroup} />
          <Text style={{ fontSize: 40, marginLeft: 20 }}>{numberWithSpaces(geoData.population)}</Text>
        </View>
      </View>
      <View style={{ paddingHorizontal: 20, marginTop: 100 }}>
        <TouchableOpacity onPress={() => navigation.navigate('Country', {
          geoData: geoData
        })} style={styles.buttonStyle} >
          <SvgUri
            width="30"
            height="30"
            style={styles.flag}
            uri={flagURL}
          />
          <Text style={styles.buttonText}>View all cities of {geoData.countryName}</Text>
        </TouchableOpacity>
      </View>



    </View>
  );


}


const styles = StyleSheet.create({
  cityNameView: {
    backgroundColor: "#504ED9",
    paddingVertical: 80,
  },
  buttonStyle: {
    marginBottom: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: "transparent",
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: "#504ED9",
    borderRadius: 6,
    flexDirection: "row",
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 8,

  },
  buttonText: {
    color: "#504ED9",
    fontSize: 20,
    marginLeft: 20,
  },
  cityPopulationView: {
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  countryInfo: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10
  },
  population: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  }

});