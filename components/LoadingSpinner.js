import React from 'react'
import { ActivityIndicator, Text } from 'react-native'

export default function LoadingSpinner({text}) {
  return (
    <>
        <ActivityIndicator size={"large"} color="#504ED9" />
        <Text style={{ textAlign: "center", justifyContent: "center" }}>{text}</Text>
    </>
  )
}
