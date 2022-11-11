import React, { useState } from 'react'
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native'
import Button from './components/Button/Button'

const App = () => {
  const [text, setText] = useState("")
  const [list, setList] = useState([])

  const renderElements = ({ item }) => <Text>{item}</Text>
  const addToList = () => {
    if (!text) {
      return
    }
    setList([...list, text])
    setText("")
  }

  return (
    <View style={styles.container}>
      <FlatList
        testID="list"
        keyExtractor={(_, index) => index.toString()}
        data={list}
        renderItem={renderElements}
      />
      <TextInput style={styles.input}
        testID="input-area"
        placeholder="add..."
        onChangeText={setText}
        value={text} />
      <Button title="Add" onClick={addToList} />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    backgroundColor: "#e0e0e0",
    margin: 10,
  }
})