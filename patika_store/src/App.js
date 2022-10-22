import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native';
import CardStore from './components/CardStore';
import SearchStore from './components/SearchStore/SearchStore';
import SortProduct from './components/SortProduct/SortProduct';
import store_Products from './patika_store.json'
const App = () => {
  const [text, setText] = React.useState("");

  const renderProducts = (({ item }) => <CardStore products={item} />)
  const filteredProduct = store_Products.filter((product) => `${product.title}`.toLowerCase().includes(text.toLowerCase()))

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.container_title}>PATIKASTORE</Text>
      <SearchStore setText={setText} />
      <SortProduct />
      <FlatList
        numColumns={2}
        data={filteredProduct}
        renderItem={renderProducts}
      />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",

  },
  container_title: {
    fontSize: 30,
    width: "100%",
    fontWeight: "bold",
    color: "purple",
    marginLeft: 10
  }
});

export default App;
