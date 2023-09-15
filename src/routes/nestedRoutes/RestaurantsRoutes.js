import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ChatsApp } from '@src/src/apps/2-chatsApp';
import { useSelector } from 'react-redux';
import { RestaurantsApp } from '@src/src/apps';



const Stack = createNativeStackNavigator();

const RestaurantsRoutes = () => {

    const { isAuth, user } = useSelector(state => state.chat)

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="diyetimHome" component={RestaurantsApp.Home} />

        </Stack.Navigator>
    )
}

export default RestaurantsRoutes
