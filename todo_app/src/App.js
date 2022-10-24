import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import SaveTodo from './components/SaveTodo';
import TodoCounter from './components/TodoCounter';
import TodoList from './components/TodoList';


const App = () => {


  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TodoCounter />
        <TodoList />
        <SaveTodo />
      </View>


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#102027"
  }

});

export default App;
