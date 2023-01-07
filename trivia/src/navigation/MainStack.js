import React from "react"
import { createStackNavigator } from '@react-navigation/stack';
import Categories from "../screens/Categories";
import Home from "../screens/Home/Home";
import QuestionsScreen from "../screens/QuestionsScreen";

const Stack = createStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="HomeScreen" component={Home} />
            <Stack.Screen name="CategoriesScreen" component={Categories} />
            <Stack.Screen name="QuestionsScreen" component={QuestionsScreen} />

        </Stack.Navigator>
    );
}
export default MainStack