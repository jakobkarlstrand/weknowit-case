import * as React from 'react';


import { StyleSheet, Text, View,Image,TouchableHighlight } from 'react-native';
import SvgUri from 'react-native-svg-uri';

export default function ItemCountry({countryData}) {
    const [isLoading, setLoading] = React.useState(true);
    const [ isPress, setIsPress ] = React.useState(false);
    

    var touchProps = {
        activeOpacity: 1,
        underlayColor: '#504ED9',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
        style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
        onHideUnderlay: () => setIsPress(false),
        onShowUnderlay: () => setIsPress(true),
        onPress: () => console.log('HELLO'),                 // <-- "onPress" is apparently required
      };

  return (
    <>
        <TouchableHighlight {...touchProps}>
            <View style={styles.itemCountry}>
            <SvgUri
      width="40"
      height="40"
      source={{uri:"https://hatscripts.github.io/circle-flags/flags/se.svg"}}
    />
                <Text style={isPress ? styles.countryTextPressed : styles.countryText}>{countryData.countryName}</Text>
            </View>
        </TouchableHighlight>
    </>
  )
}

const styles = StyleSheet.create({
   itemCountry:{
        flexDirection: "column",
       paddingHorizontal: 30,
       paddingVertical: 30,
       shadowColor: "#000",
       shadowOffset: {
           width: 0,
           height: 1,
       },
       shadowOpacity: 0.5,
       shadowRadius: 1.10,
       
       elevation: 0.010,
      borderRadius: 8,
    
   },
   flag: {
    width: 50,
    height: 50,
  },
  countryText:{
      fontSize: 20
  },
  countryTextPressed:{
    fontSize: 20,
    color: "white"
},
  btnNormal:{
    borderRadius: 8,
  },
  btnPress:{
      borderRadius: 8,
      color: "white"

  }
  });