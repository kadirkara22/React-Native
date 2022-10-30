import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from './pages/Products';
import Detail from './pages/Detail';
import Login from './pages/Login';

const Stack = createNativeStackNavigator();

const Router = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginPage"
          component={Login}
          options={{
            headerShown: false
          }} />
        <Stack.Screen
          name="ProductsPage"
          component={Products}
          options={{
            title: "Shopping Mall",
            headerStyle: { backgroundColor: "#64b5f6" },
            headerTitleStyle: { color: "white" },
          }} />
        <Stack.Screen
          name="DetailPage"
          component={Detail}
          options={{
            title: "Detay",
            headerStyle: { backgroundColor: "#64b5f6" },
            headerTitleStyle: { color: "white" },
            headerTintColor: "white"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default Router;
