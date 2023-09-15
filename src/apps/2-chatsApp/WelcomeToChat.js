import { ActivityIndicator, Button, Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ChatsAppLayout } from '@src/src/layouts'

import ChatImage from './chat_app.jpg'
import { Button as PaperButton } from 'react-native-paper'
import { MyButtonOne } from '@src/src/components'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'
import { chatFunctions } from '@src/src/redux'

const WelcomeToChat = ({ navigation }) => {

    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()

    const handleGoToLogin = () => {
        navigation.navigate("login")
    }

    const handleGoToRegister = () => {
        navigation.navigate("register")
    }

    const handleFetchLocalStorage = async () => {
        const response = await AsyncStorage.getItem("chatAppUser")
        if (response) {
            dispatch(chatFunctions.reduxHandleLogin(JSON.parse(response)))
        }
        setLoading(false)
    }

    useEffect(() => {
        handleFetchLocalStorage()
    }, [])

    return (
        <ChatsAppLayout style={styles.container}>

            {
                loading
                    ? <ActivityIndicator color="orange" />
                    : (
                        <>
                            <Image source={ChatImage} style={styles.header_image} />
                            <Text style={styles.header_text}>Welcome To Chat App</Text>

                            <MyButtonOne title='Login' onPress={handleGoToLogin} />
                            <MyButtonOne title='Register' type="secondary" onPress={handleGoToRegister} />
                        </>
                    )
            }

        </ChatsAppLayout>
    )
}

export default WelcomeToChat

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    header_image: {
        // resizeMode: "contain",
        width: Dimensions.get("screen").width,
        height: 200,
        resizeMode: 'cover',
        marginBottom: 40
    },
    header_text: {
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 30,
    },
})