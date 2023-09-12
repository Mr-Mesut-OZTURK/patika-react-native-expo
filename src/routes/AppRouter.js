import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../pages/HomeScreen';
import JobRoutes from './nestedRoutes/JobRoutes';
import ChatRoutes from './nestedRoutes/ChatRoutes';


const Stack = createNativeStackNavigator();

const AppRouter = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen name="jobs" component={JobRoutes} />
            <Stack.Screen name="chats" component={ChatRoutes} />
        </Stack.Navigator>
    )
}

export default AppRouter
