import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DiyetimApp } from '@src/src/apps/3-diyetimApp';
import { useSelector } from 'react-redux';



const Stack = createNativeStackNavigator();

const DiyetimRoutes = () => {

    // const { isAuth, user } = useSelector(state => state.chat)

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="diyetimHome" component={DiyetimApp.Home} />
        </Stack.Navigator>
    )
}

export default DiyetimRoutes
