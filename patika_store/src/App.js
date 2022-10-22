import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CardStore from './components/CardStore';
import store_Products from './patika_store.json'
const App = () => {
  const renderProducts = (({ item }) => <CardStore products={item} />)
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.container_title}>PATIKASTORE</Text>
      <View style={styles.card_container}>
        <FlatList
          data={store_Products}
          renderItem={renderProducts}
        />
      </View>

    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  container_title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "purple"
  },
  card_container: {

  }
});

export default App;
