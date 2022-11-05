import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/auth/Login';
import Sign from './pages/auth/Sign';
import auth from "@react-native-firebase/auth"
import FlashMessage from "react-native-flash-message";
import Messages from './pages/Messages';
import colors from './styles/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();

const App = () => {

  const [userSession, setUserSession] = useState()
  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user)
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

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          !userSession ? <Stack.Screen name="AuthStack" component={AuthStack} options={{ headerShown: false }} />
            :

            <Stack.Screen name="MessageScreen" component={Messages}
              options={{
                title: "dertler",
                headerTitleAlign: "center",
                headerTintColor: colors.darkgreen,
                headerRight: () => (
                  <Icon name="logout"
                    size={30} color={colors.darkgreen}
                    onPress={() => auth().signOut()}
                  />
                )
              }
              }
            />
        }

      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  )
}

export default App
