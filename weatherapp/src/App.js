import React, { useState, useEffect } from 'react'
import { StyleSheet, Image, Dimensions, ScrollView, Text } from 'react-native'
import { format } from 'date-fns'
import { tr } from 'date-fns/locale'
import Config from 'react-native-config';
import useFetch from './hook/useFetch';
import Geolocation from '@react-native-community/geolocation';

const App = () => {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const formattedDate = format(new Date(), "eeee d", { locale: tr })
  const { data, error, loading } = useFetch(`${Config.API_URL}lat=${lat}&lon=${lon}&appid=${Config.API_KEY}&lang=tr`);

  Geolocation.getCurrentPosition(
    (info) => console.log(info),
    (error) => console.log(error),
    {
      enableHighAccuracy: true,
    },
  );

  if (loading) {
    return <Text>Loading...</Text>
  }

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("./assets/clouds.jpg")}
        style={styles.image}
        resizeMode="cover"
      />

      <Text style={styles.day}>{formattedDate}</Text>
    </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  image: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },
  day: {
    position: "absolute",
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  }
})



