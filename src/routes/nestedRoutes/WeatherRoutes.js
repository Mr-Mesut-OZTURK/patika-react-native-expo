import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { WeatherApp } from '@src/src/apps';



const Stack = createNativeStackNavigator();

const WeatherRoutes = () => {

    const { isAuth, user } = useSelector(state => state.chat)

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="diyetimHome" component={WeatherApp.Home} />
        </Stack.Navigator>
    )
}

export default WeatherRoutes
