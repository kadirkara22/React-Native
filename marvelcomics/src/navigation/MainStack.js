import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import CharacterDetail from '../screens/Characters/CharacterDetail/CharacterDetail';

const Stack = createNativeStackNavigator();
export default function MainStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="CharactersDetail" component={CharacterDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
