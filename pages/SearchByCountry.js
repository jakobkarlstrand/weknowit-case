import * as React from 'react';

import { StyleSheet, Text, View,Button, ActivityIndicator,TextInput } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import ItemCountry from "../components/ItemCountry"


export default function SearchByCountry({navigation}) {

    const [isLoading, setLoading] = React.useState(true);
    const [data, setData] = React.useState([]);
    const [searchString, setSearchString] = React.useState("")

    const handleInputChange = (text) =>{
      setSearchString(text)
    }

    React.useEffect(  () =>{
      setLoading(true)
      getCountries()
    },[searchString])


    const getCountries = async () => {
      if(searchString == "" || searchString == null){
        setData([])
        setLoading(false);
        return;
      }
      try {
        const url = `http://api.geonames.org/searchJSON?&name_startsWith=${searchString.toLowerCase()}&oderby=population&featureCode=PCLI&lang=en&username=weknowit`
        const response = await fetch(url);
        const json = await response.json();
        setData(json.geonames.filter((country) =>{
          return country.countryName.toLowerCase().startsWith(searchString.toLowerCase());
        }));
      } catch (error) {
        console.error(error);
      }finally{
        setLoading(false);
      }
    };

    return (
      <>
      <View style={{backgroundColor: "#FFF", flex: 1,  justifyContent: 'flex-start', paddingHorizontal: 20, paddingTop: 20 }}>
        <View style={styles.searchSection}>
          <FontAwesomeIcon style={styles.searchIcon} icon={faMagnifyingGlass} color="#C2C2C2"/>
          <TextInput placeholder="Ex. 'Sweden'" style={styles.input} value={searchString}  onChangeText={handleInputChange} underlineColorAndroid="transparent"></TextInput>
        </View>

        <View style={styles.countryResults}> 
        {isLoading && 
        <>
        <ActivityIndicator size={"large"} color="#504ED9"/>
        <Text style={{textAlign: "center", justifyContent: "center"}}>Searching for countries...</Text>
        </>

        }
        {!isLoading && 
        data.map((country,index) =>{
          return <ItemCountry key={index} countryData={country}/>
          //return <Text key={index}>{country.countryName}</Text>
        })
        }

        </View>
  
      </View>

    
      </>
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
      padding: 10,
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
    }
    
  });