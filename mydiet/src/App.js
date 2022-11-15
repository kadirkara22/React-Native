import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserInfo from './pages/UserInfo';
import Rapors from './pages/Rapors';
import StartedInfo from './pages/StartedSetting/StartedInfo';
import StartedGender from './pages/StartedSetting/StartedGender';
import StartedLevel from './pages/StartedSetting/StartedLevel';
import StartedWeight from './pages/StartedSetting/StartedWeight';
import StartedHeight from './pages/StartedSetting/StartedHeight';
import StartedAge from './pages/StartedSetting/StartedAge';
import colors from './styles/colors';


const user = []

//console.log(user.length > 0)
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



export default function App() {

  function StartedPage() {
    return (
      <Stack.Navigator >
        <Stack.Screen name="StartedInfo" component={StartedInfo} options={{ headerShown: false }} />
        <Stack.Screen name="StartedGender" component={StartedGender}
          options={{
            headerTintColor: "white",
            headerStyle: { backgroundColor: colors.darkGreen },
            headerTitle: "",
          }} />
        <Stack.Screen name="StartedLevel" component={StartedLevel} />
        <Stack.Screen name="StartedWeight" component={StartedWeight} />
        <Stack.Screen name="StartedHeight" component={StartedHeight} />
        <Stack.Screen name="StartedAge" component={StartedAge} />
      </Stack.Navigator>
    );
  }


  function HomePage() {
    return (

      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Ben" component={UserInfo} />
        {/*   <Tab.Screen name="Hedef" component={ } /> */}
        <Tab.Screen name="Raporlar" component={Rapors} />
      </Tab.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {
          user ? <Stack.Screen name="StartedPage" component={StartedPage} />
            : <Stack.Screen name="HomePage" component={HomePage} />
        }


      </Stack.Navigator>
    </NavigationContainer>

  );
}
