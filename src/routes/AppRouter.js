import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../pages/HomeScreen';
import JobRoutes from './nestedRoutes/JobRoutes';
import ChatRoutes from './nestedRoutes/ChatRoutes';
import DiyetimRoutes from './nestedRoutes/DiyetimRoutes';
import BooksRoutes from './nestedRoutes/BooksRoutes';
import MarvelRoutes from './nestedRoutes/MarvelRoutes';
import TriviaRoutes from './nestedRoutes/TriviaRoutes';
import WeatherRoutes from './nestedRoutes/WeatherRoutes';
import RestaurantsRoutes from './nestedRoutes/RestaurantsRoutes';


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

            <Stack.Screen name="diyetim" component={DiyetimRoutes} />
            <Stack.Screen name="books" component={BooksRoutes} />
            <Stack.Screen name="marvel" component={MarvelRoutes} />
            <Stack.Screen name="trivia" component={TriviaRoutes} />
            <Stack.Screen name="weather" component={WeatherRoutes} />
            <Stack.Screen name="restaurants" component={RestaurantsRoutes} />
        </Stack.Navigator>
    )
}

export default AppRouter
