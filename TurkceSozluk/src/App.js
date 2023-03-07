import * as React from 'react';
import { Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HistoryView from './views/HistoryView';
import SearchView from './views/SearchView';
import FavoriteView from './views/FavoriteView';
import DetailView from './views/DetailView';
import TabBar from './components/TabBar';
import theme from './utils/theme';


const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function SearchStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="SearchView" component={SearchView} />
      <HomeStack.Screen name="Details" component={DetailView} />
    </HomeStack.Navigator>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>

      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Search"
          tabBar={props => <TabBar {...props} />}>
          <Tab.Screen name="History" component={HistoryView} />
          <Tab.Screen name="Search" component={SearchStack} />
          <Tab.Screen name="Favorite" component={FavoriteView} />
        </Tab.Navigator>
      </NavigationContainer>

    </ThemeProvider >

  );
}