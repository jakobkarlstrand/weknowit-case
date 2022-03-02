import * as React from 'react';

import { StyleSheet, Text, View,Button, ActivityIndicator,TextInput, ScrollView,ScrollAreaView,Image } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import ItemCity from "../components/ItemCity"



export default function Country({route,navigation}) {

    const [isLoading, setLoading] = React.useState(true);
    const [data, setData] = React.useState([]);
    const {country} = route.params;
    navigation.setOptions({ title: country.countryName })
    console.log(country)

    const handleInputChange = (text) =>{
      setSearchString(text)
    }

    React.useEffect(  () =>{
        getCitiesFromCountry()
    },[])


    const getCitiesFromCountry = async () => {
      try {
        const url = `http://api.geonames.org/searchJSON?&country=${country.countryCode}&featureCode=PPL&featureCode=PPLS&featureCode=PPLC&featureCode=PPLA&maxRows=100&lang=en&orderby=population&username=weknowit`
        const response = await fetch(url);
        const json = await response.json();
        const filtered = json.geonames.filter((city) =>{
          return city.countryCode != undefined
        });

        setData(filtered.sort((cityA,cityB) =>{
          return cityA.population < cityB.population ? 1 : -1
        }))

      } catch (error) {
        console.error(error);
      }finally{
        setLoading(false);
      }
    };

    return (
      <ScrollView>
      <View style={{backgroundColor: "#FFF", flex: 1,  justifyContent: 'flex-start', paddingHorizontal: 20, paddingTop: 20 }}>
        <View style={styles.countryResults}> 

          {isLoading && 
          <>
          <ActivityIndicator size={"large"} color="#504ED9"/>
          <Text style={{textAlign: "center", justifyContent: "center"}}>Loading Cities...</Text>
          </>

          }
          {!isLoading && 
          data.map((city,index) =>{
            return <ItemCity key={index} cityData={city}/>
            //return <Text key={index}>{country.countryName}</Text>
          })
          }

        </View>
        
  
      </View>

    
      </ScrollView>
    );

    
  }


  const styles = StyleSheet.create({
    input:{
      flex: 1,
      paddingTop: 10,
      paddingRight: 10,
      paddingBottom: 10,
      paddingLeft: 0,
      
    },
    searchIcon: {
      marginHorizontal: 10,
  },
    searchSection:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "white",
      borderWidth: 1,
      borderColor: "#C7C7C7",
      borderRadius: 4,
    },
    countryResults:{
      marginTop: 20,
    },
    searchImage:{
      width: 250,
      height: 250
    },
    noResults:{
      justifyContent: "center",
      alignItems: "center",
      marginTop: 50
    }
    
  });