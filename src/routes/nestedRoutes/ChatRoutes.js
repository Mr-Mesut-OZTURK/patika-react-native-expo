import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ChatsApp } from '@src/src/apps/2-chatsApp';
import { useSelector } from 'react-redux';



const Stack = createNativeStackNavigator();

const ChatRoutes = () => {

    const { isAuth, user } = useSelector(state => state.chat)

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            {
                isAuth ? (
                    <>
                        <Stack.Screen name="chatHome" component={ChatsApp.Home} />
                        <Stack.Screen name="chat" component={ChatsApp.ChatScreen} />
                    </>
                ) : (
                    <>
                        <Stack.Screen name="welcome" component={ChatsApp.WelcomeToChat} />
                        <Stack.Screen name="login" component={ChatsApp.Login} />
                        <Stack.Screen name="register" component={ChatsApp.Register} />
                    </>
                )
            }


        </Stack.Navigator>
    )
}

export default ChatRoutes
