import React from 'react'
import { SvgUri } from 'react-native-svg';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import numberWithSpaces from '../utils/numberWithSpace';
export default function ListItem({ onPress, geoData, isCity = false }) {
  const [isPress, setIsPress] = React.useState(false);

  const flagURL = "https://hatscripts.github.io/circle-flags/flags/" + geoData.countryCode.toLowerCase() + ".svg"

  var touchProps = {
    activeOpacity: 1,
    underlayColor: '#504ED9',
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: onPress,
  };

  return (
    <TouchableHighlight style={styles.touchable} {...touchProps}>
      <View style={styles.container}>
        <SvgUri
          width="40"
          height="40"
          style={styles.flag}
          uri={flagURL}
        />
        <View style={styles.information}>
          <Text style={[isPress ? styles.textPressed : styles.text, { fontWeight: geoData.fcode === "PPLC" ? "bold" : "normal" }]}>{geoData.name} {isCity && <Text>{", " + geoData.countryName}</Text>}</Text>
          <Text style={[isPress ? styles.textPressed : styles.text, { fontSize: 15 }]} >{numberWithSpaces(geoData.population)}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}


const styles = StyleSheet.create({
  touchable: {
    paddingRight: 30,
    paddingLeft: 20,
    paddingVertical: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#C7C7C7",
    marginBottom: 10

  },
  container: {
    flexDirection: "row",
    alignItems: "flex-start",

  },
  flag: {
    paddingLeft: 1,
  },
  information: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingLeft: 20,
  },
  text: {
    fontSize: 20,

    color: "black",
  },
  textPressed: {
    fontSize: 20,
    color: "white",
  },
});