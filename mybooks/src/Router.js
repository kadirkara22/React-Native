import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home';
import Comment from './pages/Comment';
import UserInfo from './pages/UserInfo';
import Login from './pages/auth/Login';
import Sign from './pages/auth/Sign';




const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {


  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="SignPage" component={Sign} />
      </Stack.Navigator>
    )
  }

  const MainStack = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="HomePage" component={Home} />
        <Tab.Screen name="CommentPage" component={Comment} />
        <Tab.Screen name="UserInfoPage" component={UserInfo} />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="MainStack" component={MainStack} />
      </Stack.Navigator>
    </NavigationContainer>

  );


}
