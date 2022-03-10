import * as React from 'react';

import { StyleSheet, Text, View, ActivityIndicator, ScrollView,Image } from 'react-native';
import ListItem from '../components/ListItem';
import Searchbar from '../components/Searchbar';



export default function SearchByCity({navigation}) {

    const [isLoading, setLoading] = React.useState(true);
    const [data, setData] = React.useState([]);
    const [empty, setEmpty] = React.useState(false);
    const [searchString, setSearchString] = React.useState("")

    const handleInputChange = (text) =>{
      setSearchString(text)
    }

    React.useEffect(  () =>{
      if(searchString == "" || searchString == null){
        setData([])
        setLoading(false);
        return;
      }
      const timeoutId = setTimeout(() => {
        setLoading(true)
        getCities()
      }, 300);
    return () => clearTimeout(timeoutId);
    },[searchString])


    const getCities = async () => {
      try {
        const url = `http://api.geonames.org/search?username=weknowit&type=json&name_startsWith=${encodeURIComponent(searchString)}&orderby=relevance&maxRows=10&cities=cities500`
        const response = await fetch(url);
        const json = await response.json();
        const filtered = json.geonames.filter((city) =>{
          return city.countryCode != undefined
        });
        if(filtered.length === 0){
          setEmpty(true)
          setData([])
        }
        else{
          
          setData(filtered.sort((cityA,cityB) =>{
            return cityA.population < cityB.population ? 1 : -1
          }))
          setEmpty(false)
        }
        

      } catch (error) {
        console.error(error);
      }finally{
        setLoading(false);
      }
    };

    return (
      <ScrollView keyboardShouldPersistTaps='handled'>
        <View style={{backgroundColor: "#FFF", flex: 1,  justifyContent: 'flex-start', paddingHorizontal: 20, paddingTop: 20 }}>
          <Searchbar placeholder={"Ex. 'Stockholm'"} onChangeText={handleInputChange}/>
          <View style={styles.countryResults}> 

            {isLoading && 
            <>
            <ActivityIndicator size={"large"} color="#504ED9"/>
            <Text style={{textAlign: "center", justifyContent: "center"}}>Searching for cities...</Text>
            </>

            }
            {!isLoading && 
            data.map((city,index) =>{
              return <ListItem key={index} geoData={city} city={true} onPress={() => navigation.navigate("City", {geoData: city})}/>
            })
            }

          </View>

          <View style={styles.noResults}>
            {empty && !isLoading && searchString !== "" &&
              
                <>
                  <Text>Sorry, no cities found for "{searchString}"</Text>
                  <Image style={styles.searchImage} source={require("../assets/no_results.png")} />
                </>
              
            }
            {searchString == "" &&
                <>
                  <Text>Search for a city</Text>
                  <Image style={styles.searchImage} source={require("../assets/search_image.png")} />
                </>
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