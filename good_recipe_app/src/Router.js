import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from './pages/Categories';
import Meals from './pages/Meals';
import Detail from './pages/Detail';


const Stack = createNativeStackNavigator();

const Router = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CategoriesPage"
          component={Categories}
          options={{
            title: 'Categories',
            headerStyle: { backgroundColor: "white" },
            headerTitleStyle: { color: "#FFA500" },
            headerTitleAlign: "center"
          }}
        />
        <Stack.Screen
          name="MealsPage"
          component={Meals}
          options={{
            headerTitle: "Meals",
            headerStyle: { backgroundColor: "white" },
            headerTitleStyle: { color: "#FFA500" },
            headerTitleAlign: "center",
            headerTintColor: "#FFA500"
          }}
        />
        <Stack.Screen
          name="DetailPage"
          component={Detail}
          options={{
            headerTitle: "Detail",
            headerStyle: { backgroundColor: "white" },
            headerTitleStyle: { color: "#FFA500" },
            headerTitleAlign: "center",
            headerTintColor: "#FFA500"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default Router;