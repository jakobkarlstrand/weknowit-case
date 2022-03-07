import * as React from 'react';

import { StyleSheet, Text, View,Button, ActivityIndicator,TextInput, ScrollView,ScrollAreaView,Image } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import ItemCity from "../components/ItemCity"
import Searchbar from '../components/Searchbar';



export default function Country({route,navigation}) {

    const [isLoading, setLoading] = React.useState(true);
    const [data, setData] = React.useState([]);
    const [searchString,setSearchString] = React.useState("")
    const {country} = route.params;
    navigation.setOptions({ title: country.countryName })


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
        <Text style={styles.title}>{`Cities of ${country.countryName}`}</Text>
        <Searchbar placeholder={`Filter cities in ${country.countryName}`} onChangeText={(text) => setSearchString(text.toLowerCase())}/>
        <View style={styles.countryResults}> 

          {isLoading && 
          <>
          <ActivityIndicator size={"large"} color="#504ED9"/>
          <Text style={{textAlign: "center", justifyContent: "center"}}>Loading Cities...</Text>
          </>

          }
          {!isLoading && 
          data.filter((city) =>{
            return city.name.toLowerCase().startsWith(searchString)
          }).map((city,index) =>{
            return <ItemCity navigation={navigation} key={index} cityData={city}/>
          })
          }

        </View>
        
  
      </View>

    
      </ScrollView>
    );

    
  }


  const styles = StyleSheet.create({
    countryResults:{
      marginTop: 20,
    },
    title:{
      fontSize: 30,
      textAlign: "center",
      paddingVertical: 20
    }
  
   
    
  });