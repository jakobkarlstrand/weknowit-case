import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { StyleSheet, Text, View,Button, ActivityIndicator,TextInput } from 'react-native';

export default function Searchbar({placeholder, onChangeText}) {
    const [isFocused, setFocused] = React.useState(false)
  return (
    <View style={[styles.searchSection,{borderColor: isFocused ? "#504ED9" : "#C7C7C7"} ]}>
        <FontAwesomeIcon style={styles.searchIcon} icon={faMagnifyingGlass} color={isFocused ? "#504ED9" : "#C7C7C7"}/>
        <TextInput onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} placeholder={placeholder} style={styles.input} onChangeText={onChangeText} underlineColorAndroid="transparent"></TextInput>
    </View>
  )
}


const styles = StyleSheet.create({
    searchSection:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 4,
      },
      searchIcon: {
        marginHorizontal: 10,
    },
      input:{
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        
      },
})