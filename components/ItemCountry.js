import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';


import { StyleSheet, Text, View,Image,TouchableHighlight } from 'react-native';
import SvgUri from 'react-native-svg-uri';

export default function ItemCountry({navigation,countryData}) {
    const [ isPress, setIsPress ] = React.useState(false);
    const flagURL = "https://hatscripts.github.io/circle-flags/flags/" + countryData.countryCode.toLowerCase() +".svg"

    var touchProps = {
        activeOpacity: 1,
        underlayColor: '#504ED9',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
        onHideUnderlay: () => setIsPress(false),
        onShowUnderlay: () => setIsPress(true),
        onPress: () => {
          navigation.navigate('Country',{
            country: countryData
          })
        },                 // <-- "onPress" is apparently required
      };

  return (
    <>

        <TouchableHighlight style={styles.itemCountry} {...touchProps}>
        <View style={styles.countryContainer}>
            <SvgUri
      width="40"
      height="40"
      style={styles.flag}
      source={{uri:flagURL}}
    />
                <Text style={isPress ? styles.countryTextPressed : styles.countryText}>{countryData.countryName}</Text>
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
    alignItems: "center",
   },
   flag: {
   paddingLeft: 1,
  },
  countryText:{
      fontSize: 20,
      paddingLeft: 20,
      color: "black",
  },
  countryTextPressed:{
    fontSize: 20,
    color: "white",
    paddingLeft: 20,
},
  });