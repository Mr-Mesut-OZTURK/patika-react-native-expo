import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../pages/HomeScreen';
import JobRoutes from './nestedRoutes/JobRoutes';


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
        </Stack.Navigator>
    )
}

export default AppRouter
