import React, { useState, useEffect, useContext } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from "@react-native-firebase/auth"
import FlashMessage from "react-native-flash-message";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './pages/Home';
import Comment from './pages/Comment';
import UserInfo from './pages/UserInfo';
import Login from './pages/auth/Login';
import Sign from './pages/auth/Sign';
import SearchBook from './pages/SearchBook';
import Book from './pages/Book';
import { UserInfoContext } from './context/UserInfoContext';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [userSession, setUserSession] = useState()
  const { setUserMail, userMail } = useContext(UserInfoContext)
  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user)
      const userMail = auth().currentUser?.email
      setUserMail(userMail)
    })

  }, [])


  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="SignPage" component={Sign} />
      </Stack.Navigator>
    )
  }

  const HomeStack = () => {
    return (
      <Stack.Navigator >
        <Stack.Screen name="HomePage" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="SearchBookPage" component={SearchBook} options={{ headerShown: false }} />
        <Stack.Screen name="SelectedBookPage" component={Book}
          options={{ headerTitle: "" }}
        />
      </Stack.Navigator>
    )
  }

  const MainStack = () => {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="HomeStack" component={HomeStack}
          options={{
            tabBarActiveBackgroundColor: "#f5f5f5",
            title: "",
            tabBarIcon: ({ tintColor }) => (
              <Icon name="home-outline" size={30} color="black" />
            )
          }}
        />
        <Tab.Screen name="CommentPage" component={Comment}
          options={{
            tabBarActiveBackgroundColor: "#f5f5f5",
            title: "",
            tabBarIcon: ({ tintColor }) => (
              <Icon name="plus" size={30} color="black" />
            )
          }}
        />
        <Tab.Screen name="UserInfoPage" component={UserInfo}
          options={{
            tabBarActiveBackgroundColor: "#f5f5f5",
            title: "",
            tabBarIcon: ({ tintColor }) => (
              <Icon name="account-circle-outline" size={30} color="black" />
            )
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!userSession ?
          <Stack.Screen name="AuthStack" component={AuthStack} />
          :
          <Stack.Screen name="MainStack" component={MainStack} />

        }

      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>

  );


}
