import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { TriviaApp } from '@src/src/apps';



const Stack = createNativeStackNavigator();

const TriviaRoutes = () => {

    const { isAuth, user } = useSelector(state => state.chat)

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="diyetimHome" component={TriviaApp.Home} />
        </Stack.Navigator>
    )
}

export default TriviaRoutes
