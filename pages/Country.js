import * as React from 'react';

import { StyleSheet, Text, View,Button, ActivityIndicator,TextInput, ScrollView,ScrollAreaView,Image } from 'react-native';

import ListItem from '../components/ListItem';
import Searchbar from '../components/Searchbar';



export default function Country({route,navigation}) {

    const [isLoading, setLoading] = React.useState(true);
    const [data, setData] = React.useState([]);
    const [searchString,setSearchString] = React.useState("")
    const {geoData} = route.params;
    navigation.setOptions({ title: geoData.countryName })


    React.useEffect(  () =>{
        getCitiesFromCountry()
    },[])

    const getCitiesFromCountry = async () => {
      setLoading(true)
      try {
        const url = `http://api.geonames.org/search?&country=${geoData.countryCode}&cities=cities500&maxRows=100&lang=en&orderby=population&username=weknowit&type=json`
        const response = await fetch(url);
        const json = await response.json();
        const filtered = json.geonames.filter((city) =>{
          return city.countryCode != undefined
        });
        setData(filtered)
        setLoading(false);

      } catch (error) {
        console.error(error);
        
      }
    };


    return (
      <ScrollView keyboardShouldPersistTaps='handled'>
      <View style={{backgroundColor: "#FFF", flex: 1,  justifyContent: 'flex-start', paddingHorizontal: 20, paddingTop: 20 }}>
        <Text style={styles.title}>{`Cities of ${geoData.countryName}`}</Text>
        <Searchbar placeholder={`Filter cities in ${geoData.countryName}`} onChangeText={(text) => setSearchString(text.toLowerCase())}/>
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
            return <ListItem key={index} geoData={city} city={true} onPress={() => navigation.navigate("City", {geoData: city})}/>
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