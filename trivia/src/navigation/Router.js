import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react'
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
import Home from '../screens/Home';

const Router = () => {
    const [currentUser, setCurentUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const onAuthStateChanged = async (user) => {
        await setCurentUser(user)
        setIsLoading(false)
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber
    }, [])

    if (isLoading) {
        return null
    }
    return (
        <NavigationContainer>
            {currentUser ? <Home /> : <AuthStack />}
        </NavigationContainer>
    )
}

export default Router
