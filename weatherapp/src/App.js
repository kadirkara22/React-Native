import React, { useState, useEffect } from 'react'
import { StyleSheet, Image, Dimensions, ScrollView, Text, View } from 'react-native'
import { format} from 'date-fns'
import { tr } from 'date-fns/locale'
import Config from 'react-native-config';
import useFetch from './hook/useFetch';
import Geolocation from '@react-native-community/geolocation';

const App = () => {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const formattedDate = format(new Date(), " hh:mm eeee MM/dd/yyyy", { locale: tr })
  const { data, error, loading } = useFetch(`${Config.API_URL}lat=${lat}&lon=${lon}&appid=${Config.API_KEY}&lang=tr`);

  Geolocation.getCurrentPosition(
    (position) => {
      setLat(position.coords.latitude), setLon(position.coords.longitude);
    },
    (error) => {
      console.log(error.message);
    },
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  );

  console.log(data)
  if (loading) {
    return <Text>Loading...</Text>
  }

  return (
    <ScrollView style={styles.container}>
      {(data && data.weather) ?
        <>
          <Image
            source={require("./assets/clouds.jpg")}
            style={styles.image}
            resizeMode="cover"
          />

          <View style={styles.header_container}>
            <View style={styles.countryname}>
              <Text style={styles.country}>{data?.name}</Text>
              <Text style={styles.country}> {data?.sys?.country}</Text>
            </View>
            <Text style={styles.day}>{formattedDate}</Text>
          </View>
          <View style={styles.value_container}>
            <Text style={styles.value}>{Math.floor(data?.main?.temp - 272.15)}&#176;C</Text>
            <View style={styles.weather_container}>
              <Image style={styles.icon} source={{ uri: `https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png` }} />
              <Text style={styles.description}>{data?.weather[0]?.description}</Text>
            </View>
          </View>
          <View style={styles.footer_container}>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.infoText}>Wind</Text>
              <Text style={[styles.infoText, { fontSize: 24 }]}>{data.wind.speed}</Text>
              <Text style={styles.infoText}>km/h</Text>
            </View>
            <View style={styles.infoBar}>
              <View style={{}}>

              </View>
            </View>

          </View>
        </>
        : null
      }
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
  header_container: {
    position: "absolute",
    justifyContent: 'center',
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 2.5,
    padding: 10,

  },
  country: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold"
  },
  countryname: {
    flexDirection: 'row',
  },
  day: {
    color: "white",
    fontSize: 20,
  },
  value_container: {
    position: "absolute",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 5,
    bottom: 200,
    padding: 10,
  },
  value: {
    color: "white",
    fontSize: 60,

  },
  weather_container: {
    width: Dimensions.get("window").width,
    position: "absolute",
    flexDirection: "row",
    bottom: 0,
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderBottomColor: "grey"

  },
  icon: {
    width: 80,
    height: 80,

  },
  description: {
    color: "white",
    fontSize: 20,

  },
  footer_container: {
    backgroundColor: "red",
    bottom: 0
  },
  infoText: {
    color: "white"
  }
})



