import * as React from 'react';
import { Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Left,More} from './components/icons';
import HistoryView from './views/HistoryView';
import SearchView from './views/SearchView';
import FavoriteView from './views/FavoriteView';
import DetailView from './views/DetailView';
import TabBar from './components/TabBar';
import Button from './components/Button';
import theme from './utils/theme';


const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function SearchStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="SearchView" component={SearchView} 
      options={{headerShown: false}}/>
      <HomeStack.Screen
     name="Details"
        component={DetailView}
        options={({ route, navigation }) => {
          return {
            title: route.params?.title,
            headerStyle: {
              backgroundColor: theme.colors.softRed,
  
            },
            headerShadowVisible: false,
            headerBackTitleVisible:false,
            headerTitleAlign:"center",
             headerLeft: () => (
              <Button
                
                height="100%"
                onPress={() => navigation.navigate('SearchView')}
              >
                <Left color={theme.colors.textDark} />
              </Button>
            ),
            headerRight: () => (
              <Button
               
                height="100%"
                onPress={() => navigation.navigate('SearchView')}
              >
                <More color={theme.colors.textDark} />
              </Button>
            )
          }
        }}
    
       />
    </HomeStack.Navigator>
  
  );
}

export default function App() {
  return (
   
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Search"
          tabBar={props => <TabBar {...props} />}
          screenOptions={{ headerShown: false }}
          >
          <Tab.Screen name="History" component={HistoryView} />
          <Tab.Screen name="Search" component={SearchStack} />
          <Tab.Screen name="Favorite" component={FavoriteView} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider >
   

  );
}