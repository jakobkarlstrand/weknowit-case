import * as React from 'react';
import { StyleSheet } from 'react-native';
import Card from './Card';

export default function ItemCity({navigation,cityData}) {
    

    const flagURL = "https://hatscripts.github.io/circle-flags/flags/" + cityData.countryCode.toLowerCase() +".svg"
    
    const navigate = () => {
      navigation.navigate('City',{
        city: cityData
      })
  }

  return (
        <Card onClick={navigate} geoData={cityData} svgURI={flagURL}/>
  )
}