import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { MarvelApp } from '@src/src/apps';



const Stack = createNativeStackNavigator();

const MarvelRoutes = () => {

    const { isAuth, user } = useSelector(state => state.chat)

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="diyetimHome" component={MarvelApp.Home} />
        </Stack.Navigator>
    )
}

export default MarvelRoutes
