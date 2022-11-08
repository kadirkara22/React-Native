import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from "@react-native-firebase/auth"
import Login from './pages/auth/Login';
import Sign from './pages/auth/Sign';
import ChatRooms from './pages/ChatRooms';
import colors from './styles/colors';


const Stack = createNativeStackNavigator();

function Router() {
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
            : <Stack.Screen name="Rooms" component={ChatRooms}
              options={{
                title: "Odalar",
                headerTitleAlign: "center",
                headerTitleStyle: { color: colors.primaryColor },

              }}
            />
        }

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;