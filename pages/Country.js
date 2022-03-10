import * as React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView } from 'react-native';

import ListItem from '../components/ListItem';
import Searchbar from '../components/Searchbar';



export default function Country({ route, navigation }) {

  const [isLoading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const [searchString, setSearchString] = React.useState("")
  const { geoData } = route.params;
  const [limit, setLimit] = React.useState(10)

  


  React.useEffect(() => {
    navigation.setOptions({ title: geoData.countryName })
    getCitiesFromCountry()
  }, [])

 

  const getCitiesFromCountry = async () => {
    try {
      const url = `http://api.geonames.org/search?&country=${geoData.countryCode}&cities=cities500&maxRows=100&lang=en&orderby=population&username=weknowit&type=json`
      const response = await fetch(url);
      const json = await response.json();
      const filtered = json.geonames.filter((city) => {
        return city.countryCode != undefined
      });
      setData(filtered)

    } catch (error) {
      console.error(error);

    }
    setLoading(false)
  };

  const filterCities = () =>{

    return data.filter((city) => {
      return city.name.toLowerCase().startsWith(searchString)
    }).slice(0,limit).map((city, index) => {
      return (
      <ListItem key={index} geoData={city} city={true} onPress={() => navigation.navigate("City", { geoData: city })} />)
    })
  }
  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;
  };


  return (
    <ScrollView keyboardShouldPersistTaps='handled' onScroll={({nativeEvent}) => {
      if (isCloseToBottom(nativeEvent)) {
        setLimit((prev) => Math.min(prev+10,100))
      }
    }}
    scrollEventThrottle={400}>
      <View style={{ backgroundColor: "#FFF", flex: 1, justifyContent: 'flex-start', paddingHorizontal: 20, paddingTop: 20 }}>
        <Text style={styles.title}>{`Cities of ${geoData.countryName}`}</Text>
        <Searchbar placeholder={`Filter cities in ${geoData.countryName}`} onChangeText={(text) => setSearchString(text.toLowerCase())} />
        <View style={styles.countryResults}>

          {isLoading &&
            <>
              <ActivityIndicator size={"large"} color="#504ED9" />
              <Text style={{ textAlign: "center", justifyContent: "center" }}>Loading Cities...</Text>
            </>

          }
          {!isLoading &&
            filterCities()
          }

        </View>
      </View>
    </ScrollView>
  );


}


const styles = StyleSheet.create({
  countryResults: {
    marginTop: 20,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    paddingVertical: 20
  }



});