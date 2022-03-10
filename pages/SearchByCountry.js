import * as React from 'react';

import { StyleSheet, Text, View, ActivityIndicator, ScrollView, Image } from 'react-native';
import ListItem from '../components/ListItem';
import Searchbar from '../components/Searchbar';



export default function SearchByCountry({ navigation }) {

  const [isLoading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const [empty, setEmpty] = React.useState(false);
  const [searchString, setSearchString] = React.useState("")

  const handleInputChange = (text) => {
    setSearchString(text)
  }

  React.useEffect(() => {
    if (searchString == "" || searchString == null) {
      setData([])
      setLoading(false);
      return;
    }
    const timeoutId = setTimeout(() => {
      getCountries()
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [searchString])


  const getCountries = async () => {
    setLoading(true)
    try {
      const url = `http://api.geonames.org/searchJSON?&name_startsWith=${encodeURIComponent(searchString).toLowerCase()}&featureCode=PCLI&maxRows=20&orderby=population&lang=en&username=weknowit`
      const response = await fetch(url);
      const json = await response.json();
      const filtered = (json.geonames.filter((country) => {
        return country.countryName.toLowerCase().startsWith(searchString.toLowerCase());
      }));
      if (filtered.length === 0) {
        setEmpty(true);
        setData([])
      }
      else {
        setData(filtered.sort((countryA, countryB) => {
          return countryA.population < countryB.population ? 1 : -1
        }))
        setEmpty(false)
      }


    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView keyboardShouldPersistTaps='handled'>
      <View style={{ backgroundColor: "#FFF", flex: 1, justifyContent: 'flex-start', paddingHorizontal: 20, paddingTop: 20 }}>
        <Searchbar placeholder={"Ex. 'Sweden'"} onChangeText={handleInputChange} />

        <View style={styles.countryResults}>

          {isLoading &&
            <>
              <ActivityIndicator size={"large"} color="#504ED9" />
              <Text style={{ textAlign: "center", justifyContent: "center" }}>Searching for countries...</Text>
            </>

          }
          {!isLoading &&
            data.map((country, index) => {
              return <ListItem key={index} geoData={country} city={true} onPress={() => navigation.navigate("Country", { geoData: country })} />
            })
          }

        </View>
        <View style={styles.noResults}>
          {empty && !isLoading && searchString !== "" &&

            <>
              <Text>Sorry, no countries found for "{searchString}"</Text>
              <Image style={styles.searchImage} source={require("../assets/no_results.png")} />
            </>

          }
          {searchString == "" &&
            <>
              <Text>Search for a country</Text>
              <Image style={styles.searchImage} source={require("../assets/search_image.png")} />
            </>
          }
        </View>
      </View>
    </ScrollView>
  );


}


const styles = StyleSheet.create({
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,

  },
  searchIcon: {
    marginHorizontal: 10,
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#504ED9",
    borderRadius: 4,
  },
  countryResults: {
    marginTop: 20,
  },
  searchImage: {
    width: 250,
    height: 250
  },
  noResults: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50
  }

});