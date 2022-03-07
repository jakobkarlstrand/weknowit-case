import * as React from 'react';
import Card from './Card';

export default function ItemCity({navigation,countryData}) {
    

    const flagURL = "https://hatscripts.github.io/circle-flags/flags/" + countryData.countryCode.toLowerCase() +".svg"
    
    const navigate = () => {
      navigation.navigate('Country',{
        country: countryData
      })
  }

  return (
    <Card onClick={navigate} geoData={countryData} svgURI={flagURL} showPopulation={false}/>
  )
}