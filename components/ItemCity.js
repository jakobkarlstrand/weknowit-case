import * as React from 'react';


import { StyleSheet, Text, View,Image,TouchableHighlight } from 'react-native';
import SvgUri from 'react-native-svg-uri';

export default function ItemCity({navigation,cityData}) {
    const [ isPress, setIsPress ] = React.useState(false);

    const flagURL = "https://hatscripts.github.io/circle-flags/flags/" + cityData.countryCode.toLowerCase() +".svg"
    

    
    

    var touchProps = {
        activeOpacity: 1,
        underlayColor: '#504ED9',
        onHideUnderlay: () => setIsPress(false),
        onShowUnderlay: () => setIsPress(true),
        onPress: () => {
          navigation.navigate('City',{
            city: cityData
          })
        }, 
      };

  return (
    <>
        <TouchableHighlight style={styles.itemCountry} {...touchProps}>
        <View style={styles.countryContainer}>
            <View >
              <SvgUri
                width="40"
                height="40"
                style={styles.flag}
                source={{uri:flagURL}}
                />
              
            </View>
            <View style={styles.information}>
              <Text style={isPress ? styles.countryTextPressed : styles.countryText}>{cityData.name + ", "} <Text>{cityData.countryName}</Text></Text>
              <Text>{cityData.population}</Text>
            </View>
        </View>
        </TouchableHighlight>

    </>
  )
}

const styles = StyleSheet.create({
   itemCountry:{
       paddingHorizontal: 30,
       paddingVertical: 20,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: "#C7C7C7",
      marginBottom: 10
    
   },
   countryContainer:{
    flexDirection: "row",
    alignItems: "flex-start",

   },
   flag: {
   paddingLeft: 1,
  },
  information:{
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingLeft: 20,
  },
  countryText:{
      fontSize: 20,
      
      color: "black",
  },
  countryTextPressed:{
    fontSize: 20,
    color: "white",
    paddingLeft: 20,
},
  });