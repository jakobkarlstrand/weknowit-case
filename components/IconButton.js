import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'
import { StyleSheet,TouchableOpacity,Text } from 'react-native'


export default function IconButton({children,icon, onPress}) {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
        <FontAwesomeIcon size={30} color="#FAFAFA" icon={icon} />
        <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  )
}


const styles =  StyleSheet.create({
    buttonStyle: {
        marginBottom: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: "#504ED9",
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderRadius: 6,
        flexDirection: "row",
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
      },
      buttonText: {
        color: "#FAFAFA",
        fontSize: 20,
        marginLeft: 20,
      },
})